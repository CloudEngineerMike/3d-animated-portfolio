"use client";
import "./mobilenav.css";
import { navLinks } from "../../constant/constant";
import {useEffect, useState} from "react";

// define props type
const Nav = ({ openNav }) => {
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

  // You can return the JSX for rendering the Nav here
};
const MobileNav = () => {
  return (
    <div className="noScroll">
      {/* Overlay */}
      <div className="mobileOverlay"></div>
      {/* Nav Links */}
      <div className="mobileContainer">
            {navLinks.map((navLink) => {
              return (
                <a key={navLink.id} href={navLink.url}>
                  <p className="mobileStyle">{navLink.label}</p>
                </a>
              );
            })}
      </div>
    </div>
  )
}

export default MobileNav