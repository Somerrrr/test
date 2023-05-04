import React from "react";
import ImageLogoText from "@/assets/images/logo-text.png";
import pepeLogo from "@/assets/images/pepeLogo-text.png";

export default function Header() {
  return (
    <header className="header shadow-xl">
      <div className="flex justify-center content items-center">
        <div className="logo-box">
          <img src={pepeLogo.src} height={50} width={50} alt="logo" />
        </div>
        <nav className="nav-main desktop flex-1">
          <ul className="nav-box">
            {/* <a className="nav-item" href="/#Home">
              <li>Home</li>
            </a>
            <a className="nav-item" href="/#About">
              <li>About</li>
            </a>
            <a className="nav-item" href="/#Buy">
              <li>how to buy</li>
            </a>
            <a className="nav-item" href="/#Tokenomics">
              <li>tokenomics</li>
            </a>
            <a className="nav-item" href="/#Roadmap">
              <li>roadmap</li>
            </a> */}
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
