import React from "react";
// import ImageFeature3 from "@/assets/images/problem-img-3.svg";

export default function Card({ title, content, icon }: any) {
  return (
    <div className="card-box flex justify-center items-center">
      <div data-aos="flip-left" className="card-item w-full">
        <div className="img-box">
          {/* <img src={{icon}.src} width={250} height={250} alt="feature-3" /> */}
        </div>
        <div className="title">
          <h5>{title}</h5>
        </div>
        <div className="desc">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}
