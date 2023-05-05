import React from "react";
import pepeLogo from "@/assets/images/logo-text.png";
import Link from "next/link";

export default function Header() {
  return (
    <header className="header shadow-xl">
      <div className="flex justify-center content items-center">
        <div className="logo-box">
          <img src={pepeLogo.src} height={280} width={280} alt="logo" />
        </div>
        <nav className="nav-main desktop flex-1">
          <ul className="nav-box">
            <li>
              <Link href="/#Home">
                <p className="nav-item">Home</p>
              </Link>
            </li>
            <li>
              <Link href="/#About">
                <p className="nav-item">About</p>
              </Link>
            </li>
            <li>
              <Link href="/#Buy">
                <p className="nav-item">how to buy</p>
              </Link>
            </li>
            <li>
              <Link href="/#Tokenomics">
                <p className="nav-item">tokenomics</p>
              </Link>
            </li>
            <li>
              <Link href="/#Roadmap">
                <p className="nav-item">roadmap</p>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="wallet">connect wallet</div>
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
