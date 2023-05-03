import React from "react";
import Card from "../Card/Card";

export default function Buy() {
  return (
    <section className="section section-buy" id="Buy">
      <div className="content flex flex-col justify-center items-center ">
        <div className="title">How To Buy</div>
        <div className="flex flex-col mt-5">
          <Card title={"title1"} content={"content1"} icon={"1"} />
          <Card
            title={"title2"}
            content={` DeFi users have neither forward products and term futures to hedge
            exchange risks nor fixed income markets to hedge interest rate
            risks.`}
            icon={"2"}
          />
          <Card title={"title3"} content={"content3"} icon={"3"} />
          <Card title={"title4"} content={"content4"} icon={"4"} />
        </div>
      </div>
    </section>
  );
}
