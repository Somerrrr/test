import React from "react";
import SvgIcon from "../SvgIcon/SvgIcon";

export default function Contact() {
  return (
    <section className="section-contact">
      <div className="content">
        <div className="text-3xl">Contact</div>
        <nav className="nav-social">
          <ul className="nav-box">
            <li className="nav-item">
              <SvgIcon width="25" height="25" iconName="icon-telegram" />
            </li>
            <li className="nav-item">
              <SvgIcon width="25" height="25" iconName="icon-twitter" />
            </li>
            <li className="nav-item">
              <SvgIcon width="25" height="25" iconName="icon-medium" />
            </li>
            <li className="nav-item">
              <SvgIcon width="25" height="25" iconName="icon-discord" />
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}
