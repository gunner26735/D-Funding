import React from "react";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Link from "next/link";

export default function Navbar(){
    return (
        <div>
            <nav className="bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <a href="/" className="font-bold text-2xl text-white">
                                    D~Funding
                                </a>
                            </div>
                        </div>
                        <div className="ml-4 flex items-center space-x-4">
                            <Link href="/" className="p-2 font-bold text-white hover:bg-white hover:text-black rounded-lg">
                                Home
                            </Link>
                            <Link href="/add_org" className="p-2 font-bold text-white hover:bg-white hover:text-black rounded-lg">
                                AddOrg
                            </Link>
                            <Link href="/orgs_list" className="p-2 font-bold text-white hover:bg-white hover:text-black rounded-lg" prefetch={true}>
                                Start Here
                            </Link>
                            <span className="text-white hover:bg-white hover:text-black rounded-lg mx-5 ">
                                <ConnectButton />
                            </span>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}