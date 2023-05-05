import React from "react";
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
            <div className="text-2xl mt-12  max-w-4xl text-left pl-24">
              70% to liquidity pool
              <br />
              10% airdrop to ERC20 Pepe holders
              <br />
              10% Staking Reward
              <br />
              10% CEX Listing + Community
              <br />
              <br />
              transaction tax 5% of each transaction will include 2.5% will
              automatically enter the LP pool 1% to $AIPEPE-ETH LP staking pool
              1% reward will be given to the last address that bought $AIPEPE
              0.5% to $AIPEPE staking pool
              <br />
              <br />
              {`Community Governance : Users who hold $AIPEPE tokens are allowed to participate in the governance of the project, such as voting to determine the future development direction.`}
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
