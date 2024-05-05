"use client";
import { useState } from "react";
import { contractWrite } from "@/app/provider";
import { toast } from "react-toastify";

export default function AddNewOrg() {

    const [orgName, setOrgName] = useState("");
    const [orgAddress, setOrgAddress] = useState("");
    const [orgDesc, setOrgDesc] = useState("");
    const [orgFundGoal, setOrgFundGoal] = useState(0);
    const addOrgButton = document.getElementById('login_default_state');

    async function doAddOrg() {
        try {
            addOrgButton.disabled = true;
            const response = await contractWrite.addOrg(orgAddress, orgName, orgDesc, orgFundGoal);
            toast.success("Organization Added Successfully", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                style: {'font-weight': 'bold',},
            });
        }
        catch (err) {
            console.log(err.reason);
            toast.error(err.reason, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                style: {'font-weight': 'bold',},
            });
        }
    }

    return (
        <section id="login" className="p-4 flex flex-col justify-center min-h-screen max-w-md mx-auto">
            <div className="p-6 bg-sky-100 rounded">
                <div className="flex items-center justify-center font-black m-3 mb-12">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mr-3 text-red-600 animate-pulse" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                    <h1 className="tracking-wide text-3xl text-gray-900">Add New Organization</h1>
                </div>
                <form id="login_form" onSubmit={(e) => e.preventDefault()} className="flex flex-col justify-center">

                    <label className="text-sm font-medium">Org Wallet Address</label>
                    <input className="mb-3 px-2 py-1.5 mt-1 block w-full border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                                focus:outline-none
                                focus:border-sky-500
                                focus:ring-1
                                focus:ring-sky-500
                                focus:invalid:border-red-500 focus:invalid:ring-red-500" type="text" name="username" placeholder="0xD11fD1...F161"
                        onChange={(e) => setOrgAddress(e.target.value)} />

                    <label className="text-sm font-medium">Org Name / Fund Title</label>
                    <input className="mb-3 px-2 py-1.5 mt-1 block w-full border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                                focus:outline-none
                                focus:border-sky-500
                                focus:ring-1
                                focus:ring-sky-500
                                focus:invalid:border-red-500 focus:invalid:ring-red-500" type="text" name="username" placeholder="Save Ocean..."
                        onChange={(e) => setOrgName(e.target.value)} />

                    <label className="text-sm font-medium">Description</label>
                    <textarea className="
                                mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                                focus:outline-none
                                focus:border-sky-500
                                focus:ring-1
                                focus:ring-sky-500
                                focus:invalid:border-red-500 focus:invalid:ring-red-500" name="messages" placeholder="Write something"
                        onChange={(e) => setOrgDesc(e.target.value)}></textarea>
                    <label className="text-sm font-medium">Fund Goal</label>
                    <input className="mb-3 px-2 py-1.5 mt-1 block w-full border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                                focus:outline-none
                                focus:border-sky-500
                                focus:ring-1
                                focus:ring-sky-500
                                focus:invalid:border-red-500 focus:invalid:ring-red-500" type="text" name="username" placeholder="1000"
                        onChange={(e) => setOrgFundGoal(e.target.value)} />
                    <div className="px-4 py-1.5 rounded-md shadow-lg bg-gradient-to-r from-pink-600 to-red-600 font-medium text-center text-gray-100 block transition duration-300">
                        <button type="button" id="login_default_state" onClick={doAddOrg}>Submit</button>
                    </div>
                </form>
            </div>
        </section>
    );
}