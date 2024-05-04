"use client";

import { orgABI, contractAddress } from "@/app/provider";
import { useReadContract } from "wagmi";
import SkeletonLoading from "./SkeletonLoading";

export default function OrgList() {

    const {data : orgsAddressData, isFetched : addressFetched} = useReadContract({
        abi:orgABI,
        address: contractAddress,
        functionName: 'listOrgs',
    })

    const {data : orgsReadedData, isFetched : orgsDataFetched} = useReadContract({
        abi:orgABI,
        address: contractAddress,
        functionName: 'getAllOrgInfo',
    })

    if (orgsDataFetched) {
        return (
            <div className="min-h-screen p-10">
                <div className="flex flex-row flex-wrap justify-around">
                    {orgsReadedData && orgsReadedData.map((_orgInfo, index) => (
                        <div key={index} className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700 my-10">
                            <a href={"orgs_list/"+orgsAddressData[index]}>
                                <img className="rounded-t-lg" src="/make_change.jpg" alt="" />
                            </a>
                            <div className="p-5">
                                <a href={"orgs_list/"+orgsAddressData[index]}>
                                    <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">{_orgInfo['org_name']}</h5>
                                </a>
                                <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">{_orgInfo['org_desc']}</p>
                                <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Donate Now
                                    <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </a>
                                <a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 ms-5 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    {"Goal = "+_orgInfo['org_goal']}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="justify-center">
            <SkeletonLoading />
        </div>
    );

}