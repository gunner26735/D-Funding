"use client";

import { orgABI, contractAddress } from "@/app/provider";
import { useReadContract } from "wagmi";

export default function TransactionList(_orgAddress) {

    const { data: orgTrasactionData, isFetched: orgTransactionDataFetched } = useReadContract({
        abi: orgABI,
        address: contractAddress,
        functionName: 'listDonations',
        args: [_orgAddress._orgAddress],
        chainId: 11155111,
    });
    console.log(_orgAddress._orgAddress);
    if (orgTransactionDataFetched) {
        console.log(orgTrasactionData);
        return (
            <table className="text-center">
                <thead>
                    <tr className="border-4 border-solid border-l-0 border-r-0 text-xl">
                        <th className="text-md px-6 py-3">Donor Address</th>
                        <th className="text-md px-6 py-3">Transaction Hash</th>
                        <th className="text-md px-6 py-3">Donoation Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {orgTrasactionData.map((orgTx,index) =>(
                        <tr key={index}>
                            <td className="text-md px-6 py-3">{orgTx['donor_addr']}</td>
                            <td className="text-md px-6 py-3">{orgTx['txhash']}</td>
                            <td className="text-md px-6 py-3">{parseInt(orgTx['donation'])}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        );
    }
    else{
        return(
            <div>
                loading.......
            </div>
        );
    }
}