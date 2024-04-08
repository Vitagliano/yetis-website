import type {Metadata} from "next";
import {Plus_Jakarta_Sans, Roboto_Mono} from "next/font/google";
import "./globals.css";

import '@rainbow-me/rainbowkit/styles.css';
import {Providers} from './providers';
import {Toaster} from "@/components/ui/toaster";


const jakarta = Plus_Jakarta_Sans({
    subsets: ["latin"],
    variable: '--font-inter', //css variables name
})

const roboto = Roboto_Mono({
    subsets: ["latin"],
    variable: '--font-roboto',
})

export const metadata: Metadata = {
    title: "Yetis",
    description: "The Gobblerz collection resembles an exquisite art gallery showcasing the talent of over 30 accomplished artists on the Avalanche platform. Discover your favorite artists among our collaborative works, featuring a stunning array of unique 1/1 creations!",
    openGraph: {
        type: 'website',
        url: 'https://mint.thegangdao.xyz/',
        title: 'Gobblerz - The Gang DAO',
        description: 'The Gobblerz collection resembles an exquisite art gallery showcasing the talent of over 30 accomplished artists on the Avalanche platform. Discover your favorite artists among our collaborative works, featuring a stunning array of unique 1/1 creations!',
        images: [
            {
                url: 'https://i.imgur.com/54BZ4ff.png',
                width: 1200,
                height: 630,
                alt: 'Yetis',
            }
        ]
    },
    twitter: {
        card: 'summary',
        site: '@TheGangDAOo',
        title: 'Yetis',
        description: 'The Gobblerz collection resembles an exquisite art gallery showcasing the talent of over 30 accomplished artists on the Avalanche platform. Discover your favorite artists among our collaborative works, featuring a stunning array of unique 1/1 creations!',
        images: 'https://i.imgur.com/54BZ4ff.png'
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${jakarta.variable} ${roboto.variable} bg-[#1E1F20]`}>
        <Providers>
            {children}
            <Toaster/>
        </Providers>
        </body>
        </html>
    );
}
