import React from "react";
import Card from "./Card/Card";
import swap from "@/assets/images/swap.png";
import uniswap from "@/assets/images/uniswap.png";
import eth from "@/assets/images/eth.png";
import wallet from "@/assets/images/wallet.png";

export default function Buy() {
  return (
    <section className="section section-buy" id="Buy">
      <div className="content flex flex-col justify-center items-center w-full">
        <div className="title">How To Buy</div>
        <div className="flex flex-col mt-5 w-full">
          <Card
            delay={300}
            title={`Create a Wallet`}
            content={`download metamask or your wallet of choice from the app store or google play store for free. Desktop users, download the google chrome extension by going to metamask.io.`}
            icon={wallet}
          />

          <Card
            delay={300}
            title={`Get Some Arb ETH`}
            content={`have ETH in your wallet to switch to $AIPEPE. If you don’t have any ETH, you can buy directly on metamask, transfer from another wallet, or buy on another exchange and send it to your wallet.`}
            icon={eth}
          />
          <Card
            delay={300}
            title={`Go to Uniswap`}
            content={`connect to Uniswap. Go to app.uniswap.org in google chrome or on the browser inside your Metamask app. Connect your wallet. Paste the $AIPEPE token address into Uniswap, select AIPEPE, and confirm. When Metamask prompts you for a wallet signature, sign.`}
            icon={uniswap}
          />
          <Card
            delay={300}
            title={`Switch ETH for $AIPEPE`}
            content={`Switch ETH for $AIPEPE. We have a 5% tax, so you need to increase the slippage to buy $AIPEPE smoothly.`}
            icon={swap}
          />
        </div>
      </div>
    </section>
  );
}
