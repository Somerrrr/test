import React from "react";
import HeckNo from "@/assets/images/HeckNo.png";

export default function Tokenomics() {
  return (
    <section className="section h-[60vh]" id="Tokenomics">
      <div className="content flex flex-col justify-start">
        <div className="text-center my-5 title">Tokenomics</div>
        <div className="flex items-center h-full mt-5">
          <div className="flex flex-col w-1/2 items-center justify-start h-full">
            <div className="font-extrabold text-3xl">Token Supply:</div>
            <div className="text-2xl mt-12">Content</div>
          </div>
          <div className="w-1/2 flex justify-center">
            <img src={HeckNo.src} width={350} alt="feature-1" />
          </div>
        </div>
      </div>
    </section>
  );
}
