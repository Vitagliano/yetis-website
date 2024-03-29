import Image from "next/image";
import {Mint} from "@/components/mint";
import React from "react";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center w-full relative">
            <div className="bg-gobblerz-pattern absolute inset-0 -z-1"/>


            <div className="flex items-center justify-center w-full max-w-6xl min-h-[100vh] relative">
                <div className="absolute top-0 left-0 w-full h-full opacity-[0.1] z-[-1]"
                ></div>
                <div className="flex w-[1300px] min-h-[100vh]">
                    <div
                        className="flex flex-col px-[30px] xl:px-0 xl:flex-row w-full items-center xl:items-start xl:items-between gap-[30px] xl:gap-[150px] mt-[20px] xl:mt-[100px] mb-[50px]">
                        <div className="flex flex-col grow"><span
                            className="text-[42px] text-[#fff] font-[700]">GOBBLERZ</span>
                            <div className="flex gap-[10px] mt-[12px]">
                                <div
                                    className="px-[16px] py-[8px] text-[#fff] rounded-[4px] bg-[rgba(22,22,22,1)] border-white/30 border-2 "
                                ><span
                                    className="text-[rgba(255,255,255,0.5)] font-[600]">Supply:</span> <span>2222</span>
                                </div>
                            </div>
                            <div className="flex flex-col mt-[45px] gap-[12px]"><span
                                className="text-[22px] text-[#fff] font-[700]">About GOBBLERZ Collection</span><span
                                className="text-[rgba(255,255,255,0.5)] text-[16px]">The Gobblerz collection resembles an exquisite art gallery showcasing the talent of over 30 accomplished artists on the Avalanche platform. Discover your favorite artists among our collaborative works, featuring a stunning array of unique 1/1 creations!</span>
                            </div>
                            <div className="flex flex-col mt-[45px] gap-[12px]"><span
                                className="text-[22px] text-[#fff] font-[700]">Mint Phases</span>
                                <div className="flex flex-col w-full gap-[24px]">
                                    <div
                                        className="px-[16px] py-[8px] text-[#fff] rounded-[4px] bg-[rgba(22,22,22,1)] border-white/30 border-2 ">
                                        <div className="flex flex-col gap-[8px] relative">
                                            <div className="flex"><span
                                                className="w-[110px] text-[16px] text-[rgba(255,255,255,0.5)]">Phase:</span><span
                                                className="text-[16px] text-[#fff] font-[700]">OG</span></div>
                                            <div className="flex"><span
                                                className="w-[110px] text-[rgba(255,255,255,0.5)]">Date:</span><span
                                                className="text-[16px] text-[#fff] font-[700]"><time
                                                dateTime="1707148800000">2024/02/05 13:00:00</time></span></div>


                                            <div
                                                className="absolute top-[-8px] right-[-16px] px-[16px] py-[4px] text-[13px] border-end"
                                            >
                                                <span className="text-[#fff]">Ended</span></div>
                                        </div>
                                    </div>
                                    <div className="border-white/30 border-2 p-[16px] py-[8px] text-[#fff] rounded-[4px] bg-[rgba(22,22,22,1)]"
                                    >
                                        <div className="flex flex-col gap-[8px] relative">
                                            <div className="flex"><span
                                                className="w-[110px] text-[16px] text-[rgba(255,255,255,0.5)]">Phase:</span><span
                                                className="text-[16px] text-[#fff] font-[700]">WL</span></div>
                                            <div className="flex"><span
                                                className="w-[110px] text-[rgba(255,255,255,0.5)]">Date:</span><span
                                                className="text-[16px] text-[#fff] font-[700]"><time
                                                dateTime="1707150600000">2024/02/05 13:30:00</time></span></div>

                                            <div
                                                className="absolute top-[-8px] right-[-16px] px-[16px] py-[4px] text-[13px] border-end"
                                            >
                                                <span className="text-[#fff]">Ended</span></div>
                                        </div>
                                    </div>
                                    <div
                                        className="px-[16px] py-[8px] text-[#fff] rounded-[4px] bg-[rgba(22,22,22,1)] border-white/30 border-2 "
                                    >
                                        <div className="flex flex-col gap-[8px] relative">
                                            <div className="flex"><span
                                                className="w-[110px] text-[16px] text-[rgba(255,255,255,0.5)]">Phase:</span><span
                                                className="text-[16px] text-[#fff] font-[700]">Public</span></div>
                                            <div className="flex"><span
                                                className="w-[110px] text-[rgba(255,255,255,0.5)]">Date:</span><span
                                                className="text-[16px] text-[#fff] font-[700]"><time
                                                dateTime="1707154200000">2024/02/05 14:30:00</time></span></div>
                                            <div className="flex"><span
                                                className="w-[110px] text-[rgba(255,255,255,0.5)]">Price:</span>
                                                <div className="flex items-center"><span
                                                    className="text-[16px] text-[#fff] mr-[5px]">0.5</span>
                                                    <svg width="17" height="15" viewBox="0 0 17 15" fill="current"
                                                         xmlns="http://www.w3.org/2000/svg" focusable="false"
                                                         className="fill-white">
                                                        <path
                                                            d="M12.4833 8.73993C12.8744 8.0642 13.5057 8.0642 13.8968 8.73993L16.3331 13.0165C16.7242 13.6923 16.4042 14.2436 15.6218 14.2436H10.7139C9.94036 14.2436 9.62028 13.6923 10.0026 13.0165L12.4833 8.73993ZM7.77094 0.506787C8.16214 -0.168929 8.78452 -0.168929 9.17572 0.506787L9.71809 1.48481L10.9984 3.73426C11.3096 4.3744 11.3096 5.13015 10.9984 5.77031L6.70401 13.2121C6.31281 13.8167 5.66376 14.1991 4.94358 14.2436H1.37826C0.59584 14.2436 0.275751 13.7012 0.666969 13.0165L7.77094 0.506787Z"
                                                            fill="current"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="flex"><span
                                                className="w-[110px] text-[rgba(255,255,255,0.5)]">Limit:</span><span
                                                className="text-[16px] text-[#fff] font-[700]">Unlimited</span></div>
                                            <div className="flex"><span
                                                className="w-[110px] text-[rgba(255,255,255,0.5)]">Countdown:</span><span
                                                className="text-[16px] text-[#fff] font-[700]"><span>Mint is open</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col w-full xs:w-[400px] gap-[36px]">
                            <div className="flex w-full justify-center">
                                <div className="w-[400px] md:w-[400px] h-[400px] md:h-[400px] relative"><Image
                                    className="absolute top-0 left-0 w-full h-full" src="/logo.png" fill={true}
                                    alt="Gobblerz"
                                /><Image className="absolute w-full h-full"
                                         src="/logo.png" fill={true} alt="Gobblerz"/></div>
                            </div>
                            <Mint/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
        ;
}
