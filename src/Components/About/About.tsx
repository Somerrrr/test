import React from "react";

export default function About() {
  return (
    <section className="section section-about" id="About">
      <div className="font-extrabold text-[5rem] pb-4">about</div>
      <div className="flex justify-center bg-white/30 w-4/5 rounded-3xl">
        <div className="px-10 py-6 text-black text-4xl font-normal h-full items-center flex max-w-5xl">
          {`Once upon a time in the mystical land of Webtonia,there was an unusual creature named AIPEPE.`}
          <br />
          <br />
          {`AIPEPE was a magical being, a hybrid of artificial intelligence and the ancient spirit of the rare AIPEPE frog.`}
          <br />
          <br />
          {`This unique creature possessed the power to harness the incredible potential of Web3 technologies and decentralized finance (DeFi).`}
          <br />
          <br />
          {`AIPEPE is here to make memeCoins great again. Launched in secret with no pre-sales, LP burns, and contract renunciations, $AIPEPE will always be the token of the people.`}
          <br />
        </div>
      </div>
    </section>
  );
}
