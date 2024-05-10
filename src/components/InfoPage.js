"use client";

import { polt_nowy } from "@/app/fonts";
import { orgABI, contractAddress } from "@/app/provider";
import { useReadContract } from "wagmi";

import TransactionList from "./orgs/TransactionList";
import weiToUSD from "@/app/functions/weiToUSD";

export default function InfoPage({ orgAddress }) {

    const { data: orgData, isFetched: orgDataFetched } = useReadContract({
        abi: orgABI,
        address: contractAddress,
        functionName: 'getOrgInfo',
        args: [orgAddress],
    });

    if (orgDataFetched) {
        return (
            <div className={polt_nowy.className + " flex flex-col items-center"}>
                <div className="m-16 px-12 pt-12 flex flex-col bg-white/20 text-black isolate aspect-video w-1/3 rounded-xl shadow-lg ring-1 ring-black/15">
                    <div className="flex text-5xl">
                        {orgData['org_name']}
                    </div>
                    <div className="flex subpixel-antialiased font-thin text-xl ps-5 my-10">
                        {orgData['org_desc']}
                    </div>
                    <div className="flex text-l font-thin ps-5 text-xl">
                        {"Fund Goal : $" + weiToUSD(orgData['org_goal'])}
                    </div>
                </div>

                <div className="m-16 flex flex-col bg-white/20 text-black isolate aspect-video w-2/3 h-auto rounded-xl shadow-lg ring-1 ring-black/15">
                    <div className="flex text-3xl self-center py-8">
                        List of Donors
                    </div>
                    <div className="flex flex-col self-center m-4 p-4 overflow-x-auto">
                        <TransactionList _orgAddress={orgAddress} />
                    </div>
                </div>

            </div>
        );
    }
    else {
        return (
            <h1>
                loading.....
            </h1>
        );
    }
}