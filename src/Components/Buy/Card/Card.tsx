import React from "react";

export default function Card({ delay, title, content, icon }: any) {
  return (
    <div className="flex justify-center w-full my-6">
      <div
        data-aos-delay={delay}
        data-aos="fade-right"
        className="flex items-center bg-[#d6fadc65] shadow-card p-8 rounded-3xl w-2/3"
      >
        <div className="mt-4">
          <img src={icon.src} width={100} height={100} alt="feature-3" />
        </div>
        <div className="flex flex-1 pl-12 flex-col text-left gap-6">
          <div className="text-4xl font-bold">
            <h5>{title}</h5>
          </div>
          <div className="text-2xl">
            <p>{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
