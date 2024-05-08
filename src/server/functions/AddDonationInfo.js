import { ethers } from "ethers";
import { contractAddress, orgABI } from "@/app/provider";
// const ethers = require('ethers');

export default function AddDonationInfo(_sender, _receiver, _txhash) {

    async function doCall() {
        try{
            const provider = new ethers.JsonRpcProvider(process.env.NEXT_PUBLIC_ALCHMEY_API_KEY);
            const wallet = new ethers.Wallet(process.env.NEXT_PUBLIC_PRIVATE_KEY, provider);
            const contractWrite = new ethers.Contract(contractAddress, orgABI, provider);
            const contractWithSigner = await contractWrite.connect(wallet);
            const tx = await contractWithSigner.makeDonation("0xD11fD1e9748b14B85684814184989fed2c65F161",5,"asdsadsadsad");
            tx.wait().then(async (data)=>{
                console.log(data);
            })
        }
        catch(err){
            console.log(err);
        }
    }
    doCall()
}