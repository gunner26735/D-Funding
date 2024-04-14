import { polt_nowy } from "@/app/fonts";
import Image from 'next/image'

export default function Landing() { 
    return(
        <div>
            <div className="flex flex-row justify-between m-40">
                <div className="flex flex-col">
                    <div className={polt_nowy.className+" mt-16 text-8xl text-opacity-25 subpixel-antialiased"}>
                        D~Funding
                    </div>
                    <div className="font-light text-2xl ms-8 mt-8">
                        A New Way to Revolutionize world into Transparency and Security...<br />
                        Start Here.........
                    </div>
                </div>
                <div className="-m-8">
                    <Image src="/home.png" width={600} height={600} alt="Image of Management"/>
                </div>
            </div>
        </div>
    );
}