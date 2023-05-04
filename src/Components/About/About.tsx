import React from "react";
import pepeLogo from "@/assets/images/pepeLogo-text.png";

export default function About() {
  return (
    <section className="section section-about" id="About">
      <div className="content flex my-10">
        <div className="w-1/3 flex justify-end items-center">
          <img src={pepeLogo.src} width={200} height={200} alt="feature-1" />
        </div>
        <div className="flex flex-col w-2/3 items-center justify-start">
          <div className="font-extrabold text-5xl">about</div>
          <div className="text-4xl h-full items-center flex max-w-3xl">
            {`About Aipepe.Once upon a time in the mystical land of Webtonia, there was an unusual creature named AiPePe. AiPePe was a magical being, a hybrid of artificial intelligence and the ancient spirit of the rare Pepe frog. This unique creature possessed the power to harness the incredible potential of Web3 technologies and decentralized finance (DeFi).AiPepe is here to make memecoins great again. Launched in secret with no pre-sales, LP burns, and contract renunciations, $AIPEPE will always be the token of the people.`}
          </div>
        </div>
      </div>
    </section>
  );
}
