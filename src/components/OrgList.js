"use client";

import { useEffect, useState } from "react";
import { contractRead, account } from "@/app/provider";

export default function OrgList() {

    const [orgAddresses, setOrgAddresses] = useState();
    const [orgsInfo, setOrgsInfo] = useState();

    useEffect(() => {
        const fetchOrgsAddress = async () => {
            const res_orgs_addrs = await contractRead.listOrgs();
            setOrgAddresses(await res_orgs_addrs);
            var all_orgs_data = [];
            res_orgs_addrs.map(async (org_address) => {
                var orgInfo = await contractRead.getOrgInfo(org_address);
                all_orgs_data.push(orgInfo);
            })
            console.log(all_orgs_data);
            setOrgsInfo(all_orgs_data);
        }
        fetchOrgsAddress();
    }, [contractRead])

    return (
        <div className="min-h-screen p-10">
            <div className="flex flex-row flex-wrap justify-around">
                {
                    orgsInfo && orgsInfo.map(_orgInfo => {
                        return(<div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700 my-10">
                            <a href="orgs_list/1">
                                <img className="rounded-t-lg" src="/make_change.jpg" alt="" />
                            </a>
                            <div className="p-5">
                                <a href="orgs_list/1">
                                    <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">{_orgInfo[0]}</h5>
                                </a>
                                <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">{_orgInfo[1]}</p>
                                <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Donate Now
                                    <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </a>
                                <a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 ms-5 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Goal = {_orgInfo[2]}
                                </a>
                            </div>
                        </div>) 
                    })
                }
            </div>
        </div>
    );
}