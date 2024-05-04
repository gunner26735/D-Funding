import { polt_nowy } from "@/app/fonts";
import { orgABI, contractAddress } from "@/app/provider";
import { useReadContract } from "wagmi";

export default function InfoPage(){
    return(
        <div className={polt_nowy.className+" flex flex-col items-center"}>
            <div className="m-16 px-12 pt-12 flex flex-col bg-white/20 text-black isolate aspect-video w-1/3 rounded-xl shadow-lg ring-1 ring-black/15">
                <div className="flex text-5xl">
                Save Ocean
                </div>
                <div className="flex subpixel-antialiased font-thin text-xl ps-5 my-10">
                    Provide your valuable contribution to clean the oceans
                </div>
                <div className="flex text-l font-thin ps-5 text-xl">
                    Fund Goal : 1,000
                </div>
            </div>

            <div className="m-16 flex flex-col bg-white/20 text-black isolate aspect-video w-2/3 h-auto rounded-xl shadow-lg ring-1 ring-black/15">
                <div className="flex text-3xl self-center py-8">
                    List of Donors
                </div>
                <div className="flex flex-col self-center m-4 p-4 overflow-x-auto">
                    <table className="text-center">
                        <thead>
                            <tr className="border-4 border-solid border-l-0 border-r-0 text-xl">
                                <th className="text-md px-6 py-3">Donor Address</th>
                                <th className="text-md px-6 py-3">Transaction Hash</th>
                                <th className="text-md px-6 py-3">Donoation Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="text-md px-6 py-3">0x07cC2e02D7b1A36091f36add0aEB0D5317DDB261</td>
                                <td className="text-md px-6 py-3">0x07cC2e02D7b1A36091f36add0aEB0D5317DDB261</td>
                                <td className="text-md px-6 py-3">2000</td>
                            </tr>
                            <tr>
                                <td className="text-md px-6 py-3">0x07cC2e02D7b1A36091f36add0aEB0D5317DDB261</td>
                                <td className="text-md px-6 py-3">0x07cC2e02D7b1A36091f36add0aEB0D5317DDB261</td>
                                <td className="text-md px-6 py-3">2000</td>
                            </tr>
                            <tr>
                                <td className="text-md px-6 py-3">0x07cC2e02D7b1A36091f36add0aEB0D5317DDB261</td>
                                <td className="text-md px-6 py-3">0x07cC2e02D7b1A36091f36add0aEB0D5317DDB261</td>
                                <td className="text-md px-6 py-3">2000</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>

        </div>
    );
}