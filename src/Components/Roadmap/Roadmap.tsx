import React from "react";
import Card from "./Card/Card";

export default function Roadmap() {
  return (
    <section className="section" id="Roadmap">
      <div className="content flex flex-col items-center gap-8">
        <div className="title">RoadMap</div>
        <div className="flex justify-around w-10/12 gap-24">
          <Card
            delay={0}
            title={"phase1"}
            subTitle={"AIpepe Launch "}
            time={`Q2 2023`}
            content={[
              `Develop and deploy AIpepe token on the ARB Blockchain`,
              `Establish a strong community and marketing presence`,
              `Initiate liquidity pool and user rewards system`,
            ]}
          />
          <Card
            delay={300}
            title={"phase2"}
            subTitle={"NFT Integration "}
            time={`Q3 2023`}
            content={[
              `Introduce AIpepe-themed Non-Fungible Tokens (NFTs) for digital art and collectibles`,
              `Collaborate with artists and creators for exclusive AIpepe NFT collections`,
              `Develop a marketplace for buying, selling, and trading AIpepe NFTs`,
            ]}
          />
          <Card
            delay={600}
            title={"phase3"}
            subTitle={"AIpepe Vault "}
            time={`Q4 2023`}
            content={[
              `Create a secure AIpepe Vault for staking and earning rewards`,
              `Implement a robust governance for community participation`,
              `Offer exclusive benefits and incentives for AIpepe token holders`,
            ]}
          />
        </div>
        <div className="flex justify-around w-7/12 gap-24">
          <Card
            delay={600}
            title={"phase4"}
            subTitle={"Community Building"}
            time={`Q1 2024 - ongoing`}
            content={[
              `Organize online and offline events, meetups, and workshops for AIpepe enthusiasts`,
              `Launch educational initiatives to promote awareness about AI, blockchain, and AIpepe`,
              `Encourage community-driven content creation and sharing through social media platforms`,
            ]}
          />
          <Card
            delay={900}
            title={"phase5"}
            subTitle={"Cross-Chain Expansion "}
            time={`Q2 2024`}
            content={[
              `Enable AIpepe token interoperability across multiple blockchains`,
              `Establish strategic partnerships with key players in the blockchain ecosystem`,
              `Facilitate seamless token transfers and transactions between different networks`,
            ]}
          />
        </div>
      </div>
    </section>
  );
}
