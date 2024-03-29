'use client'
import {ConnectButton as Web3Button} from '@rainbow-me/rainbowkit';
import {Button} from "@/components/ui/button";

export const ConnectButton = () => {
    return (
        <Web3Button.Custom>
            {({
                  account,
                  chain,
                  openAccountModal,
                  openChainModal,
                  openConnectModal,
                  mounted,
              }) => {
                // Note: If your app doesn't use authentication, you
                // can remove all 'authenticationStatus' checks
                const ready = mounted;
                const connected =
                    ready &&
                    account &&
                    chain
                return (
                    <div
                        className="h-full"
                        {...(!ready && {
                            'aria-hidden': true,
                            'style': {
                                opacity: 0,
                                pointerEvents: 'none',
                                userSelect: 'none',
                            },
                        })}
                    >
                        {(() => {
                            if (!connected) {
                                return (
                                    <Button className="rounded-[4px] h-full xs:w-fit select-none font-[500] border-2 border-solid flex justify-center whitespace-nowrap align-center md:w-auto px-[22px] py-[8px] text-[14px] xs:text-[15px] border-[transparent] bg-[#0084CE] text-[#fff] cursor-pointer hover:bg-[#DFFF1A] hover:text-[rgba(0,0,0,0.8)] hover:border-[transparent]" onClick={openConnectModal}
                                            type="button">
                                        Connect Wallet
                                    </Button>
                                );
                            }
                            if (chain.unsupported) {
                                return (
                                    <Button className="rounded-[4px] h-full xs:w-fit select-none font-[500] border-2 border-solid flex justify-center whitespace-nowrap align-center md:w-auto px-[22px] py-[8px] text-[14px] xs:text-[15px] border-[transparent] bg-[#0084CE] text-[#fff] cursor-pointer hover:bg-[#DFFF1A] hover:text-[rgba(0,0,0,0.8)] hover:border-[transparent]" onClick={openChainModal}
                                            type="button">
                                        Wrong network
                                    </Button>
                                );
                            }
                            return (
                                <div style={{display: 'flex', gap: 12}}>
                                    <Button
                                        className="rounded-[4px] h-full xs:w-fit select-none font-[500] border-2 border-solid flex justify-center whitespace-nowrap align-center md:w-auto px-[22px] py-[8px] text-[14px] xs:text-[15px] border-[transparent] bg-[#0084CE] text-[#fff] cursor-pointer hover:bg-[#DFFF1A] hover:text-[rgba(0,0,0,0.8)] hover:border-[transparent]"
                                        onClick={openChainModal}
                                        style={{display: 'flex', alignItems: 'center'}}
                                        type="button"
                                    >
                                        {chain.hasIcon && (
                                            <div
                                                style={{
                                                    background: chain.iconBackground,
                                                    width: 12,
                                                    height: 12,
                                                    borderRadius: 999,
                                                    overflow: 'hidden',
                                                    marginRight: 4,
                                                }}
                                            >
                                                {chain.iconUrl && (
                                                    <img
                                                        alt={chain.name ?? 'Chain icon'}
                                                        src={chain.iconUrl}
                                                        style={{width: 12, height: 12}}
                                                    />
                                                )}
                                            </div>
                                        )}
                                        {chain.name}
                                    </Button>
                                    <Button className="rounded-[4px] h-full xs:w-fit select-none font-[500] border-2 border-solid flex justify-center whitespace-nowrap align-center md:w-auto px-[22px] py-[8px] text-[14px] xs:text-[15px] border-[transparent] bg-[#0084CE] text-[#fff] cursor-pointer hover:bg-[#DFFF1A] hover:text-[rgba(0,0,0,0.8)] hover:border-[transparent]" onClick={openAccountModal}
                                            type="button">
                                        {account.displayName}
                                        {account.displayBalance
                                            ? ` (${account.displayBalance})`
                                            : ''}
                                    </Button>
                                </div>
                            );
                        })()}
                    </div>
                );
            }}
        </Web3Button.Custom>
    );
};