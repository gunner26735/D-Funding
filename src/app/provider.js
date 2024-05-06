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
export var provider;
const abiJSON = require("../../artifacts/contracts/DonationContract.sol/DonationManagement.json");
export const orgABI = abiJSON.abi;
export const contractAddress = '0xe318bfc9ccd58f77db810c5ac204442820f61230';
export var contractRead,contractWrite;

export function Providers({ children }) {

  account = useAccount({
    config,
  })

  React.useEffect(()=>{
    const loadContractsDefault = async ()=> {
      if(account != null){
        provider = new ethers.BrowserProvider(window.ethereum)
        const signer = await provider.getSigner();
        contractRead = new ethers.Contract(
          contractAddress,
          orgABI,
          provider
        );
        contractWrite = new ethers.Contract(contractAddress, orgABI, signer);
      }
    }
    loadContractsDefault();
  },[account])
  
 
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
