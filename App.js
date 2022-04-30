import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import { Button } from '@mui/material';
import { ethers } from "ethers";

export default function App() {
  const [ walletAccount, setWalletAccount ] = useState('')
  const [ currentChain, setCurrentChain ] = useState('')
  const [ isConnected, setIsConnected ] = useState(false)
  const [ bnbBalance, setBnbBalance ] = useState(null)
  const [ vaultAddress, setVaultAddress ] = useState(null)
  const [ hasVault, setHasVault ] = useState(null)
  const [ vaultBalance, setVaultBalance ] = useState(null)
  const [ vaultTarget, setVaultTarget ] = useState(null)
  
  const ethersProvider = new ethers.providers.JsonRpcProvider("https://data-seed-prebsc-1-s1.binance.org:8545/");
  const vaultFactoryContract = new ethers.Contract(
    "0x3db847E4D3B6117e8ed060C8e45e2e680d5E2AAD",
    [{
      "inputs": [
        {
          "internalType": "address",
          "name": "_user",
          "type": "address"
        }
      ],
      "name": "hasVault",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "createVault",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_user",
          "type": "address"
        }
      ],
      "name": "getVaultAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    }],
    ethersProvider
    )
  
  const handleHasVault = async () => {
    const _vA = await vaultFactoryContract.hasVault(walletAccount);    
    setHasVault(_vA);
  }
  const handleGetVaultAddress = async () => {
    const _vA = await vaultFactoryContract.getVaultAddress(walletAccount);
    setVaultAddress(_vA);
    getVaultInfo(_vA);
    var balance = await ethersProvider.getBalance(_vA);
    balance = ethers.utils.formatUnits(balance, "gwei");
    console.log("BALANCE", balance);
    setVaultBalance(balance);
  }
  const getVaultInfo = async (vaultAddress) => {
    const vaultContract = new ethers.Contract(
      vaultAddress,
      [{
        "inputs": [],
        "name": "getTarget",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      }],
      ethersProvider
    )
    const target = await vaultContract.getTarget()
    setVaultTarget(target)
  }


   // Initialize the application and MetaMask Event Handlers
   useEffect(() => {

    // Setup Listen Handlers on MetaMask change events
    if(typeof window.ethereum !== 'undefined') {
        // Add Listener when accounts switch
        window.ethereum.on('accountsChanged', (accounts) => {

          console.log('Account changed: ', accounts[0])
          setWalletAccount(accounts[0])

        })
        
        // Do something here when Chain changes
        window.ethereum.on('chainChanged', (chaindId) => {

          console.log('Chain ID changed: ', chaindId)
          setCurrentChain(chaindId)

        })

    } else {

        alert('Please install MetaMask to use this service!')

    }
  }, [])

  useEffect(() => {
    setIsConnected(walletAccount ? true : false)
  }, [walletAccount]);

  const handleConnectWallet = async () => {

    console.log('Connecting MetaMask...')

    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
    const account = accounts[0]
    setIsConnected(account ? true : false)
    console.log('Account: ', account)
    setWalletAccount(account)

    // balance
    const balance = await window.ethereum.request({ method: "eth_getBalance", params: [ account, "latest"]});
    const wei = parseInt(balance, 16)
    const bnb = (wei / Math.pow(10, 18))

    setBnbBalance(bnb)
  }

  const handleGetChain = async () => {
    const chain = await window.ethereum.request({ method: "eth_chainId"});
    setCurrentChain(chain == "0x61" ? "bnb-testnet" : chain);
  }

  const createVaultCreationTransactionParameters = () => {
    return {
      from: window.ethereum.selectedAddress,
      to: "0x3db847E4D3B6117e8ed060C8e45e2e680d5E2AAD",
      value: "0x16345785D8A0000", // 0.1 BNB
      data: "0x5d12928b" // createVault() signature
    }

  }

  const createVault = async () => {
    const transactionParameters = createVaultCreationTransactionParameters();
    console.log(transactionParameters)
    const txHash = await window.ethereum.request({ method: "eth_sendTransaction", params: [transactionParameters]})
    console.log("txHash", txHash)

  }







  handleConnectWallet();
  handleGetChain();
  handleHasVault();
  handleGetVaultAddress();
  

  return (
    <div className="app">
      <p className="caption">Is connected: {isConnected ? "Yes" : "No"}</p>
      <p className="caption">Chain ID: {currentChain}</p>
      <p className="caption">Address: {walletAccount}</p>
      <p className="caption">Your balance is</p>
      <h1 className="balance">{bnbBalance} BNB</h1>
      {hasVault ? <p className="caption">Your Vault Address: {vaultAddress}</p> : <p className="caption">No Vault Detected</p>}
      
      {!hasVault && <Button onClick={() => createVault()} variant="contained">Create Vault</Button>}

      {hasVault && <div className="vaultInfo">
        <p className="caption">Vault Balance: {vaultBalance}</p>
        <p className="caption">Target: {vaultTarget}</p>
      </div>
      
      }


    </div>
  );
}