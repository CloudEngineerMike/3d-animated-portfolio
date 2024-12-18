"use client";
import "./nav.css";
import { navLinks } from "../../constant/constant";
import { ctaButton } from "../../constant/constant";
import { RxHamburgerMenu } from "react-icons/rx";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

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
          <motion.img
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            src="./logo-white.svg"
            alt="LOGO"
          />
        </a>
        {/* Nav Links */}
        <div className="navLinksContainer">
          <div className="responsiveLinks">
            {navLinks.map((navLink) => {
              return (
                <a key={navLink.id} href={navLink.url}>
                  <motion.p
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="linkStyle"
                  >
                    {navLink.label}
                  </motion.p>
                </a>
              );
            })}
            {ctaButton.map((navLink) => {
              return (
                <a key={navLink.id} href={navLink.url}>
                  <motion.p
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="ctaLinkStyle border"
                  >
                    {navLink.label}
                  </motion.p>
                </a>
              );
            })}
          </div>
          <RxHamburgerMenu className="menu" />
        </div>
      </div>
    </header>
  );
};

export default Nav;
