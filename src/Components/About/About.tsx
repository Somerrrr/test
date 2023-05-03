import React from "react";
import HeckNo from "@/assets/images/HeckNo.png";

export default function About() {
  return (
    <section className="section section-about h-[60vh]">
      <div className="content flex my-10">
        <div className="w-1/3 flex justify-end items-center">
          <img src={HeckNo.src} width={250} height={250} alt="feature-1" />
        </div>
        <div className="flex flex-col w-2/3 items-center justify-start">
          <div className="font-extrabold text-5xl">about</div>
          <div className="text-2xl mt-12">Content</div>
        </div>
      </div>
    </section>
  );
}
