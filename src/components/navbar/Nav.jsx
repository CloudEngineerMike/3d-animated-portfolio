"use client";
import "./nav.css";
import { navLinks } from "../../constant/constant";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { useEffect, useState } from "react";

const Nav = () => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      }
      if (window.scrollY < 90) {
        setNavBg(false);
      }
    };

    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);
  return (
    <header className={`nav ${navBg ? "nav-bg" : "nav-fixed"}`}>
      <div className="innerContainer">
        {/* LOGO */}
        <a href="/" className="logo">
        {/* <img src="./test2.svg" alt=""  /> */}
          <img src="./logo-white.svg" alt="LOGO" />
        </a>
        {/* Nav Links */}
        <div className="navLinksContainer">
          <div className="hideLinks">
            {navLinks.map((navLink) => {
              return (
                <a key={navLink.id} href={navLink.url}>
                  <p className="linkStyle">{navLink.label}</p>
                </a>
              );
            })}
          </div>
          {/* Buttons */}
          <div className="btnBox">
            <a
              href="https://www.linkedin.com/in/michael-g-smith-9b9677120/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/CloudEngineerMike"
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <FaSquareGithub />
            </a>
          </div>
          <RxHamburgerMenu className="menu" />
        </div>
      </div>
    </header>
  );
};

export default Nav;
