import Image from "next/image";
import {Mint} from "@/components/mint";
import React from "react";
import {Button} from "@/components/ui/button";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {Faq} from "@/components/faq";
import Link from "next/link";

export default function Home() {
    return (
        <main className="flex flex-col items-center w-full relative">
            <header className="w-full h-dvh bg-gradient-to-b from-[#73C4EF] from-0% to-white to-55% relative pixelated">
                <Image src="/hero/yeti.png" alt="Yeti" fill/>
                <Image src="/hero/mountain.png" alt="Mountain" fill/>
                <Image src="/hero/bighand.png" alt="Yeti's Hand" fill/>
                <Image src="/hero/cave.png" alt="Cave" fill/>
                <Image src="/hero/top.png" alt="Top" fill/>
                <Image src="/hero/pinetrees.png" alt="Pinetrees" fill/>

                <Image src="/hero/kings.png" alt="Kings" fill/>
                <Image src="/hero/gold.png" alt="Gold" fill/>
                <Image src="/hero/sign.png" alt="Sign" fill/>
                <Image src="/hero/bottom.png" alt="Bottom" fill/>

            </header>
            <section className="max-w-5xl w-full mb-32">
                <div className="grid grid-cols-2 grid-rows-1 gap-12">
                    <div className="flex flex-col justify-center">
                        <h1 className="font-jakarta text-6xl font-bold text-[#73BEEF] mb-6">
                            Explore, build and conquer
                        </h1>
                        <p className="font-roboto mb-4">
                            From far-distant mountains, the glorious and humongous three Kings came to rescue the snowy
                            land of Ayveks, bringing with them thousands of Yetis, each to its own uniqueness. Still,
                            all united to form a new DAO, ruled by three pillars: Farm, Boast, and Pillage.
                        </p>
                        <p className="font-roboto">Each pillar will have its own stake in the history and
                            decision-making in the snowy land.</p>
                    </div>
                    <div className="flex justify-end relative aspect-square rounded overflow-hidden">
                        <Image src="/yetis.png" alt="Yetis" fill className="pixelated"/>
                    </div>
                </div>
            </section>


            <section className="max-w-5xl w-full mb-32">
                <div className="grid grid-cols-2 grid-rows-1 gap-12">
                    <div className="flex relative aspect-square">

                        <div className="grid grid-cols-4 grid-rows-4 gap-2">
                            <Image src="/yetis/1.png" alt="Yetis" width={240} height={240}
                                   className="rounded hover:scale-110"/>

                            <Image src="/yetis/2.png" alt="Yetis" width={240}
                                   height={240} className="rounded hover:scale-110"/>

                            <Image src="/yetis/3.png" alt="Yetis" width={240}
                                   height={240} className="rounded hover:scale-110"/>

                            <Image src="/yetis/4.png" alt="Yetis" width={240}
                                   height={240} className="rounded hover:scale-110"/>

                            <Image src="/yetis/5.png" alt="Yetis" width={240}
                                   height={240} className="rounded hover:scale-110"/>

                            <Image src="/yetis/6.png" alt="Yetis" width={240}
                                   height={240} className="rounded hover:scale-110"/>

                            <Image src="/yetis/7.png" alt="Yetis" width={240}
                                   height={240} className="rounded hover:scale-110"/>

                            <Image src="/yetis/8.png" alt="Yetis" width={240}
                                   height={240} className="rounded hover:scale-110"/>

                            <Image src="/yetis/9.png" alt="Yetis" width={240}
                                   height={240} className="rounded hover:scale-110"/>

                            <Image src="/yetis/10.png" alt="Yetis" width={240}
                                   height={240}
                                   className="rounded hover:scale-110"/>
                            <Image src="/yetis/11.png" alt="Yetis" width={240}
                                   height={240}
                                   className="rounded hover:scale-110"/>
                            <Image src="/yetis/12.png" alt="Yetis" width={240}
                                   height={240}
                                   className="rounded hover:scale-110"/>
                            <Image src="/yetis/13.png" alt="Yetis" width={240}
                                   height={240}
                                   className="rounded hover:scale-110"/>
                            <Image src="/yetis/14.png" alt="Yetis" width={240}
                                   height={240}
                                   className="rounded hover:scale-110"/>
                            <Image src="/yetis/15.png" alt="Yetis" width={240}
                                   height={240}
                                   className="rounded hover:scale-110"/>
                            <Image src="/yetis/16.png" alt="Yetis" width={240}
                                   height={240}
                                   className="rounded hover:scale-110"/>
                        </div>

                    </div>
                    <div className="flex flex-col justify-center items-start">
                        <h1 className="font-jakarta text-6xl font-bold text-[#73BEEF] mb-6">
                            Know your
                            people
                        </h1>
                        <p className="font-roboto mb-4">
                            Yetis are a very diverse people, you can find people from all over the icy lands
                        </p>
                        <Button>Visit the Gallery</Button>
                    </div>
                </div>
            </section>

            <section className="max-w-5xl w-full mb-32">
                <h1 className="font-jakarta text-5xl text-center text-[#73BEEF] mb-6">
                    Frequently asked questions
                </h1>
                <Accordion type="single" collapsible>
                    <Faq/>
                </Accordion>
            </section>

            <footer className="max-w-5xl flex justify-between items-center w-full">
                <div className="font-roboto text-lg">
                    <p className="mb-2">
                        All Rights Reserved.
                    </p>
                    <p>© Pixel Yeti DAO</p>
                </div>
                <Image src="/bases/1.png" alt="Yeti" width={240} height={240}/>
                <div className="font-roboto text-lg">
                    <p className="mb-2">
                        Follow Us
                    </p>
                    <div className="flex gap-4 items-center justify-between">
                        <Link href="https://x.com/yetisavax">
                            <Image src="/x.svg" alt="X (Twitter)" width={28} height={28}/>
                        </Link>
                        <Link href="https://discord.gg/eyuDxmDZAZ">
                            <Image src="/discord.svg" alt="Discord" width={32} height={32} className="pixelated"/>
                        </Link>
                    </div>
                </div>

            </footer>
        </main>
    );
}
