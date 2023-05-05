import React from "react";

export default function Card({ delay, title, content, subTitle, time }: any) {
  return (
    <div className="flex justify-center w-full my-6 max-w-md">
      <div
        data-aos-delay={delay}
        data-aos="flip-left"
        className="flex justify-center bg-[#d6fadc65] opacity-90 shadow-card p-8 rounded-3xl"
      >
        <div className="flex flex-col text-left gap-2">
          <div className="flex flex-col gap-2 text-center font-semibold">
            <div className="text-2xl font-bold text-[#484c6a]">{title}</div>
            <div className="text-3xl">{subTitle}</div>
            <div className="text-xl text-[#484c6a]">{time}</div>
          </div>
          {content.map((item: any) => (
            <div className="text-2xl px-2">{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
