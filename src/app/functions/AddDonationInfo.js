"use client";

import { ethers } from "ethers";
import { contractAddress, orgABI } from "@/app/provider";

export default async function AddDonationInfo(_sender,_receiver,_donationAmt,_txhash) {
    
    try{
        const provider = new ethers.JsonRpcProvider(process.env.NEXT_PUBLIC_ALCHMEY_API_KEY);
        const wallet = new ethers.Wallet(process.env.NEXT_PUBLIC_PRIVATE_KEY, provider);
        const contractWrite = new ethers.Contract(contractAddress, orgABI, provider);
        const contractWithSigner = await contractWrite.connect(wallet);
        const tx = contractWithSigner.makeDonation(_sender,_receiver,_donationAmt,_txhash);
    }
    catch(err){
        console.log(err);
    }
}
