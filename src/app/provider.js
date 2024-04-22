'use client';

import * as React from 'react';
import {
  RainbowKitProvider,
  getDefaultConfig,
} from '@rainbow-me/rainbowkit';
import {
  goerli,
  sepolia,
} from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider, useAccount } from 'wagmi';
import { ethers } from "ethers";

const config = getDefaultConfig({
  appName: 'RainbowKit demo',
  projectId: 'YOUR_PROJECT_ID',
  chains: [
    sepolia,
    goerli,
  ],
  ssr: true,
});

const queryClient = new QueryClient();

export var account;
const abiJSON = require("../../artifacts/contracts/DonationContract.sol/DonationManagement.json");
const orgABI = abiJSON.abi;
export var contractRead,contractWrite;

export function Providers({ children }) {

  account = useAccount({
    config,
  })

  React.useEffect(()=>{
    const loadContractsDefault = async ()=> {
      const provider = new ethers.BrowserProvider(window.ethereum)
      const signer = await provider.getSigner();
      const contractAddress = '0x2379D827779BD9C29f9b7F3f7519651425D58fD1';
      contractRead = new ethers.Contract(
        contractAddress,
        orgABI,
        provider
      );
      contractWrite = new ethers.Contract(contractAddress, orgABI, signer);
    }
    loadContractsDefault();
  },[])
  
 
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
