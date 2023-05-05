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
            title={`Get Some ETH`}
            content={`have ETH in your wallet to switch to $AIPEPE. If you don’t have any ETH, you can buy directly on metamask, transfer from another wallet, or buy on another exchange and send it to your wallet.`}
            icon={eth}
          />
          <Card
            delay={300}
            title={`Go to Uniswap`}
            content={`connect to Uniswap. Go to app.uniswap.org in google chrome or on the browser inside your Metamask app. Connect your wallet. Paste the $AIPEPE token address into Uniswap, select Pepe, and confirm. When Metamask prompts you for a wallet signature, sign.`}
            icon={uniswap}
          />
          <Card
            delay={300}
            title={`Switch ETH for $AIPEPE`}
            content={`switch ETH for $AIPEPE. We have ZERO taxes so you don’t need to worry about buying with a specific slippage, although you may need to use slippage during times of market volatility.`}
            icon={swap}
          />

          {/* <Card
            title={"title2"}
            content={`DeFi users have neither forward products and term futures to hedge
            exchange risks nor fixed income markets to hedge interest rate
            risks.`}
            icon={"2"}
          />
          <Card title={"title3"} content={"content3"} icon={"3"} />
          <Card title={"title4"} content={"content4"} icon={"4"} /> */}
        </div>
      </div>
    </section>
  );
}
