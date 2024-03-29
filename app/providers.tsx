'use client';

import * as React from 'react';
import {
    RainbowKitProvider,
    getDefaultWallets,
    getDefaultConfig,
    darkTheme,
} from '@rainbow-me/rainbowkit';
import {
    argentWallet,
    trustWallet,
    ledgerWallet,
} from '@rainbow-me/rainbowkit/wallets';
import {
    avalanche,
    avalancheFuji,
} from 'wagmi/chains';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {WagmiProvider} from 'wagmi';

const {wallets} = getDefaultWallets();

const config = getDefaultConfig({
    appName: 'Gobblerz',
    projectId: 'YOUR_PROJECT_ID',
    wallets: [
        ...wallets,
        {
            groupName: 'Other',
            wallets: [argentWallet, trustWallet, ledgerWallet],
        },
    ],
    chains: [
        avalanche,
        ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [avalancheFuji] : []),
    ],
    ssr: true,
});

const queryClient = new QueryClient();

export function Providers({children}: { children: React.ReactNode }) {
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider modalSize="compact" theme={darkTheme()}>{children}</RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    );
}