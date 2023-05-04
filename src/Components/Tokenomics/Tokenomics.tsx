import React from "react";
import HeckNo from "@/assets/images/HeckNo.png";
import pepeCoin from "@/assets/images/pepeCoin.png";

export default function Tokenomics() {
  return (
    <section className="section" id="Tokenomics">
      <div className="content flex flex-col justify-start">
        <div className="text-center my-5 title">Tokenomics</div>
        <div className="flex items-center h-full mt-5">
          <div className="flex flex-col w-3/5 items-center justify-start h-full">
            <div className="font-extrabold text-4xl text-center flex gap-10">
              <div className="">
                Token Supply : <br />
                420,690,000,000,000
              </div>
              <div className="">
                Based on : <br />
                Arbitrum
              </div>
            </div>
            <div className="text-2xl mt-12 text-center max-w-4xl">
              <div className="text-left">
                70% to liquidity pool
                <br />
                10% airdropped to ERC20 Pepe holders
                <br />
                10% community rewards
                <br />
                10% for CEX listings Mechanism: Transaction Tax
                <br />
                5% of each transaction will be used to generate LP (Liquidity
                Provider) tokens
                <br />
                <br />
                Auto Pooling: 5% of the transaction fee will be automatically
                added to the trading pair pool, increasing liquidity.
                <br />
                <br />
                {` User Rewards: Whenever a user buys in, they will receive 70% of
                the LP tokens generated from the subsequent trader's transaction
                (70% of that 5% transaction volume).`}
                <br />
                <br />
                {` Community Governance: Allows users holding Aipepe tokens to
                participate in the project's governance, such as voting to
                determine the future development direction.`}
                <br />
                <br />
                Stake Rewards: Used as the basis for airdropping AipepePFP
                avatars in the V2 version / stake Aipepe to earn Aipepe.
              </div>
            </div>
          </div>
          <div className="w-2/5 flex justify-start">
            <img src={pepeCoin.src} width={600} height={600} alt="feature-1" />
          </div>
        </div>
      </div>
    </section>
  );
}
