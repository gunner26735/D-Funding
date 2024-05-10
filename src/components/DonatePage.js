"use client";

import { useState } from "react";
import { provider } from "@/app/provider";
import { toast } from "react-toastify";
import AddDonationInfo from "@/app/functions/AddDonationInfo";

export default function DonatePage(orgAddress) {

    const [donateAmount, setDonateAmount] = useState(0.000);

    async function doDonation() {
        const oneUSDInWei = Number(10**18 / 2998.88);
        const donationInWei = Number(donateAmount) * oneUSDInWei;
        try {
            const signer = await provider.getSigner();
            const tx = await signer.sendTransaction({
                to: orgAddress.orgAddress,
                value: BigInt(Math.floor(donationInWei)),
            });
            console.log(await tx);
            tx.wait().then(async (data) => {
                //adding tx info into smart contract
                AddDonationInfo(data.from,data.to,BigInt(Math.floor(donationInWei)),data.hash);
                console.log(data);
                toast.success("Transaction made Successfully", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    style: { 'fontWeight': 'bold', },
                    onClick: () => {
                        window.open("https://sepolia.etherscan.io/tx/" + data.hash, '_blank');
                    },
                });
            })
        }
        catch(err){
            toast.error(err.reason, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                style: { 'fontWeight': 'bold', },
            });
        }
    }

    return (
        <section id="donate" className="p-4 flex flex-col justify-center min-h-screen max-w-md mx-auto">
            <div className="p-6 bg-sky-100 rounded">
                <div className="flex items-center justify-center font-black m-3 mb-12">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mr-3 text-red-600 animate-pulse" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                    <h1 className="tracking-wide text-3xl text-gray-900">Donation</h1>
                </div>

                <label className="text-sm font-medium">Donation Amount</label>
                <input className="mb-3 px-2 py-1.5 mt-1 block w-full border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                            focus:outline-none
                            focus:border-sky-500
                            focus:ring-1
                            focus:ring-sky-500
                            focus:invalid:border-red-500 focus:invalid:ring-red-500" type="text" name="username" placeholder="100"
                    onChange={(e) => setDonateAmount(e.target.value)} />

                <div className="px-4 py-1.5 rounded-md shadow-lg bg-gradient-to-r from-pink-600 to-red-600 font-medium text-center text-gray-100 block transition duration-300">
                    <button type="button" id="login_default_state" onClick={doDonation}>Donate</button>
                </div>

            </div>
        </section>
    );
}