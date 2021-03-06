export const formatAddress = (address?: string) => {
  if (!address) {
    return "None";
  }
  const firstSix = address.slice(0, 6);
  const LastFour = address.slice(address.length - 4, address.length);
  return `${firstSix}...${LastFour}`;
};
