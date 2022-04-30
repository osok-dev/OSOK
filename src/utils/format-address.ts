export const formatAddress = (address?: string) => {
  console.log(address);
  if (!address) {
    return "";
  }
  const firstSix = address.slice(0, 6);
  const LastFour = address.slice(address.length - 4, address.length);
  return `${firstSix}...${LastFour}`;
};
