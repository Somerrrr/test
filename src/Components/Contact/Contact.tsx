import React from "react";
import SvgIcon from "../SvgIcon/SvgIcon";
import logo from "@/assets/images/logo-text.png";
import { useRouter } from "next/router";

export default function Contact() {
  const router = useRouter();
  const goPage = (path: string) => {
    router.push(path);
  };
  return (
    <section className="section section-contact pt-10">
      <div className="content flex flex-col items-center gap-10">
        <div className="title">Contact</div>
        <div className="my-4 cursor-pointer" onClick={() => goPage("/")}>
          <img src={logo.src} width={500} height={500} alt="feature-3" />
        </div>
        <div className="text-2xl max-w-4xl">
          {`$AIPEPE coin has no association with Matt Furie or his creation Pepe the Frog. This token is simply paying homage to a meme we all love and recognize.`}
        </div>
        <nav className="nav-social">
          <ul className="nav-box">
            <li className="nav-item">
              <SvgIcon width="60" height="60" iconName="icon-telegram" />
            </li>
            <li className="nav-item">
              <SvgIcon width="60" height="60" iconName="icon-twitter" />
            </li>
            <li className="nav-item">
              <SvgIcon width="60" height="60" iconName="icon-medium" />
            </li>
            <li className="nav-item">
              <SvgIcon width="60" height="60" iconName="icon-discord" />
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}
