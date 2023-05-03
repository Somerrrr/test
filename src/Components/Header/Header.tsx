import React from "react";
import { useRouter } from "next/router";
import ImageLogoText from "@/assets/images/logo-text.png";

export default function Header() {
  const route = useRouter();
  const titleObj: any = {
    "/": "Index",
    "/Accounts": "Hedge Accounts",
    "/Monitor": "Spot Info",
    "/TradingInfo": "Trading Info",
    "/MMSystem": "MM System",
    "/Performance": "Performance",
    "/Position": "Position",
    "/Download": "Download",
  };

  return (
    <header className="header shadow-md">
      <div className="flex justify-center content items-center">
        <div className="logo-box">
          <a>
            <img src={ImageLogoText.src} height={30} alt="logo" />
          </a>
        </div>
        <nav className="nav-main desktop flex-1">
          <ul className="nav-box">
            <a className="nav-item" href="/#Home">
              <li>Home</li>
            </a>
            <a className="nav-item" href="/#About">
              <li>About</li>
            </a>
            <a className="nav-item" href="/#buy">
              <li>how to buy</li>
            </a>
            <a className="nav-item" href="/#tokenomics">
              <li>tokenomics</li>
            </a>
            <a className="nav-item" href="/#roadmap">
              <li>roadmap</li>
            </a>
          </ul>
        </nav>
        <div>connect wallet</div>
        {/* TODO: MENU */}
        <div className="mobile mobile-menu-box">
          {/* <Menu isOpen={isOpenMenu} right className="button-menu-box">
            <a
              href="/#solutions"
              onClick={() => toggleMenu()}
              className="nav-item"
            >
              <span className="menu-item">Solutions</span>
            </a>
            <a
              href="/#products"
              onClick={() => toggleMenu()}
              className="nav-item"
            >
              <span className="menu-item">Products</span>
            </a>
            <a
              href="/#roadmap"
              onClick={() => toggleMenu()}
              className="nav-item"
            >
              <span className="menu-item">Roadmap</span>
            </a>
            <a className="nav-item no-hover align-center" href="/hiring">
              <button className="btn-launch btn-launch-gradient gradient-border">
                <span>Hiring</span>
              </button>
            </a>
          </Menu> */}
        </div>
      </div>
    </header>
  );
}
