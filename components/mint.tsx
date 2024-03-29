'use client'

import React from 'react';
import Image from 'next/image';
import type {NextPage} from 'next';
import {
    useAccount,
    useReadContract,
    useWaitForTransactionReceipt,
    useWriteContract,
} from 'wagmi';
import {abi} from '../abi';
import {useToast} from "@/components/ui/use-toast"
import {Card} from "@/components/ui/card";
import {Progress} from "@/components/ui/progress";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {ToastAction} from "@/components/ui/toast";
import {ConnectButton} from "@/components/ConnectButton";


const contractConfig = {
    address: '0x74E97Be4A7CDba6E97a5F83F90026798050eB6D1',
    abi,
} as const;

export const Mint = () => {
    const [amount, setAmount] = React.useState(1);

    const [mounted, setMounted] = React.useState(false);
    React.useEffect(() => setMounted(true), []);

    const [totalMinted, setTotalMinted] = React.useState(0);
    const {isConnected} = useAccount();

    const {toast} = useToast()

    const {
        data: hash,
        writeContract: mint,
        isPending: isMintLoading,
        isSuccess: isMintStarted,
        error: mintError,
    } = useWriteContract();

    const {data: totalSupplyData} = useReadContract({
        ...contractConfig,
        functionName: 'minted',
    });

    const {
        data: txData,
        isSuccess: txSuccess,
        error: txError,
    } = useWaitForTransactionReceipt({
        hash,
        query: {
            enabled: !!hash,
        },
    });

    React.useEffect(() => {
        if (totalSupplyData) {
            setTotalMinted(totalSupplyData);
        }
    }, [totalSupplyData]);

    const isMinted = txSuccess && txData.transactionHash;

    const isError = mintError || txError;

    const increment = () => setAmount((prevValue) => prevValue + 1);
    const decrement = () => setAmount((prevValue) => Math.max(0, prevValue - 1));

    const progressBar = ((Number(totalMinted) / 2222) * 100);

    React.useEffect(() => {
        if (mintError) {
            toast({
                title: "Uh oh! Something went wrong.",
                description: mintError.message,
            });
        }
    }, [mintError, toast]);

    React.useEffect(() => {
        if (txError) {
            toast({
                title: "Uh oh! Something went wrong.",
                description: txError.message,

            });
        }
    }, [txError, toast]);


    React.useEffect(() => {
        if (txSuccess) {
            toast({
                title: "You minted a Gobblerz!",
                description: "Gobblerz",
                action: <ToastAction altText="View tx"
                                     onClick={() => window.open("https://snowtrace.io/tx/" + txData.transactionHash, '_blank', 'noopener,noreferrer')}>View
                    tx</ToastAction>,
            });
        }
    }, [txSuccess, toast]);

    return (
        <>

            <div
                className="px-[16px] py-[8px] text-[#fff] rounded-[4px] bg-[rgba(22,22,22,1)] border-white/30 border-2 "
            >
                <div className="flex flex-col gap-5">
                    <div className="flex justify-between">
                        <div className="flex flex-col gap-[4px]"><span
                            className="text-[12px] text-[rgba(255,255,255,0.5)]">Minted</span><span>{Number(totalMinted)}/2222</span>
                        </div>
                        <div className="flex flex-col gap-[4px]"><span
                            className="text-[12px] text-[rgba(255,255,255,0.5)]">Percent</span><span>{progressBar.toFixed(2)}%</span>
                        </div>
                    </div>
                    <Progress value={progressBar}/>

                    <div className="flex gap-[8px]">
                        <div
                            className="p-1 text-[#fff] rounded-[4px] bg-[rgba(22,22,22,1)] border-white/30 border-2 "
                        >
                            <div className="flex gap-5 items-center">
                                <Button className="bg-transparent hover:bg-zinc-950 font-bold" size="icon"
                                        onClick={decrement}
                                        disabled={amount === 1}>
                                    -
                                </Button>
                                <p>{amount}</p>
                                <Button className="bg-transparent hover:bg-zinc-950 font-bold" size="icon"
                                        onClick={increment}>
                                    +
                                </Button>
                            </div>
                        </div>

                        <div>
                            {mounted && isConnected ? <Button
                                    className="rounded-[4px] h-full xs:w-fit select-none font-[500] border-2 border-solid flex justify-center whitespace-nowrap align-center md:w-auto px-[22px] py-[8px] text-[14px] xs:text-[15px] border-[transparent] bg-[#0084CE] text-[#fff] cursor-pointer hover:bg-[#DFFF1A] hover:text-[rgba(0,0,0,0.8)] hover:border-[transparent]"
                                    disabled={isMintLoading || isMintStarted || amount === 0}
                                    onClick={() =>
                                        mint?.({
                                            ...contractConfig,
                                            functionName: 'mint',
                                            args: [BigInt(amount)],
                                            value: (BigInt(amount) * BigInt(5e17)),
                                        })
                                    }>{isMintLoading && 'Waiting for approval'}
                                    {isMintStarted && 'Minting...'}
                                    {!isMintLoading && !isMintStarted && `Mint ${amount} for ${amount * 0.5} AVAX`}</Button> :
                                <ConnectButton
                                />}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )

}

