import React from "react";
// import ImageFeature3 from "@/assets/images/problem-img-3.svg";
import pepeLogo from "@/assets/images/pepeLogo-text.png";

export default function Card({ title, content, icon }: any) {
  return (
    <div className="card-box flex justify-center w-full my-6">
      <div data-aos="fade-right" className="card-item w-2/3">
        <div className="img-box">
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
