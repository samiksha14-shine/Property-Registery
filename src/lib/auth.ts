// // src/lib/auth.ts

// const users = new Map<string, string>(); // Map to store email and password

// // Register a new user
// export function registerUser(email: string, password: string): boolean {
//     if (users.has(email)) {
//         return false; // User already exists
//     }
//     users.set(email, password); // Store user email and password
//     return true;
// }

// // Log in a user
// export function loginUser(email: string, password: string): boolean {
//     const storedPassword = users.get(email);
//     return storedPassword === password;
// }

// // Mock function for session check
// export function isAuthenticated(): boolean {
//     // Implement session check logic here
//     return true; // Example: always return true (not secure)
// }

import { ethers } from "ethers";

export const loginUser = async (email: string, password: string) => {
    // Implement login logic here
    // Example: Connect to Ethereum wallet using MetaMask
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    return signer;
};

export const registerUser = async (email: string, password: string) => {
    // Implement registration logic here
    // Example: Connect to Ethereum wallet using MetaMask
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    return signer;
};
