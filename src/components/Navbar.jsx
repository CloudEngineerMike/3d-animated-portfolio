"use client"; // This is a client component
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { navLinks } from "../constant/constant";
import { ctaButton } from "../constant/constant";
import { IoIosArrowDown } from "react-icons/io";
// import { Link } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';


const Header = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const handleClose = () => setNav(!nav);
  const [toggleSidenavCloud, setToggleSidenavCloud] = useState(false);

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
    <header
      className={`fixed xs:h-[70px] md:h-[90px] w-full z-20 transition-all duration-200 ease-in-out ${
        navBg ? "bg-indigo-700 shadow-2xl" : ""
      }`}
    >
      <div className=" w-full flex justify-between sticky top-0 z-10 h-full px-4">
        <div className="h-full flex justify-center items-center lg:w-64 ">
          <Link to="/">
            <motion.img
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              src="/logo-white.svg"
              alt="Logo"
              className=" xs:w-[70px] md:w-[90px]"
            />
          </Link>
        </div>

        {/* Nav Links */}
        <div className="hidden lg:flex justify-end w-full h-full font-medium px-6">
          <div className="flex flex-row justify-center items-center space-x-6">
            {navLinks.map((navLink) => {
              return (
                <Link key={navLink.id} to={navLink.url}>
                  <motion.p
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className=" hover:text-teal-400   duration-300 lg:text-lg"
                  >
                    {navLink.label}
                  </motion.p>
                </Link>
              );
            })}
          </div>
          {/* Contact Button */}
          <div className="flex justify-center items-center ml-6">
            {ctaButton.map((navLink) => {
              return (
                <Link key={navLink.id} to={navLink.url}> 
                  <motion.p
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="py-2 px-4 border border-teal-400 hover:shadow-2xl hover:bg-black  transition duration-300  rounded-lg"
                  >
                    {navLink.label}
                  </motion.p>
                </Link>
              );
            })}
          </div>
        </div>

        <div>
          <div
            className="flex w-full h-full justify-center items-center hover:cursor-pointer   lg:hidden"
            onClick={handleClick}
          >
            {!nav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="xs:w-8 md:w-9"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="xs:w-8 md:w-9  mr-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </div>
        </div>

        {/* HAMBURGER MENU LIST */}
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute divide-y divide-dotted divide-black bg-white w-full px-4 py-4 top-[70px] left-0 h-screen text-white text-2xl"
          }
        >
          <li className="pb-2 w-full">
            <Link
              onClick={handleClose}
              to={"/"}
              className="text-black hover:text-blue-500 font-semibold xs:text-[15px] md:text-xl"
            >
              Home
            </Link>
          </li>
          <li className="py-2 w-full">
            <Link
              onClick={handleClose}
            to={"/#about"}
              className=" text-black hover:text-blue-500 font-semibold xs:text-[15px] md:text-xl"
            >
              About
            </Link>
          </li>

          <li className="py-2 w-full">
            <Link
              onClick={handleClose}
              to={"/#experience"}
              className="text-black hover:text-blue-500 font-semibold xs:text-[15px] md:text-xl"
            >
              Experience
            </Link>
          </li>
          <li className="  w-full text-black">
            <div>
              <div className="flex flex-row justify-between">
              <li className="py-2 w-full">
            <Link
              onClick={handleClose}
              to={"/#projects"}
              className="text-black hover:text-blue-500 font-semibold xs:text-[15px] md:text-xl"
            >
              Projects
            </Link>
            </li>
                <button
                  onClick={() => setToggleSidenavCloud(!toggleSidenavCloud)}
                  className="text-black xs:text-[22px]"
                >
                  <IoIosArrowDown />
                </button>
              </div>

              {toggleSidenavCloud && (
                <div className="flex flex-col pb-4 px-12">
                  <p className="xs:text-[15px] font-semibold pb-4 text-indigo-700 leading-normal">
                    Explore projects showcasing my expertise.
                  </p>
                  <ul className="border-l-2 border-yellow-400 pl-4">
                    <li className="pb-0 w-full">
                      <Link
                        onClick={handleClose}
                        to="/blob-questor"
                        className="text-black hover:text-blue-500 xs:text-[15px] md:text-xl "
                      >
                        Blob Questor
                      </Link>
                    </li>
                    <li className="pb-0 w-full">
                      <Link
                        onClick={handleClose}
                        to="/cloud-index-auth"
                        className="text-black hover:text-blue-500 font-medium xs:text-[15px] md:text-xl "
                      >
                        Cloud Index Authorizer
                      </Link>
                    </li>
                    <li className="pb-0 w-full">
                      <Link
                        onClick={handleClose}
                        to="/onboarding-pipeline"
                        className="text-black hover:text-blue-500 font-medium xs:text-[15px] md:text-xl "
                      >
                        Onboarding Pipeline
                      </Link>
                    </li>
                    <li className="pb-2 w-full">
                      <Link
                        onClick={handleClose}
                        to="/caaptive-solutions"
                        className="text-black hover:text-blue-500 font-medium xs:text-[15px] md:text-xl"
                      >
                        Caaptive Solutions Website
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </li>
          <li className="py-2 w-full">
            <Link
              onClick={handleClose}
              to="/#testimonials"
              className="text-black hover:text-blue-500 font-semibold xs:text-[15px] md:text-xl"
            >
              Testimonials
            </Link>
          </li>
          <li className="py-2 w-full">
            <Link
              onClick={handleClose}
              to="/#contact"
              className="text-black hover:text-blue-500 font-semibold xs:text-[15px] md:text-xl"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
