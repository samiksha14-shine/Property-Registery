import { ethers } from "ethers";

const CONTRACT_ADDRESS = "YOUR_CONTRACT_ADDRESS";
const ABI = require('../../artifacts/PropertyRegistry.json').abi;

export const getEthereumProvider = () => {
    if (typeof window.ethereum !== "undefined") {
        return new ethers.providers.Web3Provider(window.ethereum);
    }
    throw new Error("No Ethereum provider found. Install MetaMask.");
};

export const getContract = () => {
    const provider = getEthereumProvider();
    const signer = provider.getSigner();
    return new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
};
