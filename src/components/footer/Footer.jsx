import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
// import { GrLocationPin } from "react-icons/gr";
// import { MdOutlineMarkEmailUnread } from "react-icons/md";
// import { IoIosPhonePortrait } from "react-icons/io";

const Footer = () => {
  const year = new Date().getFullYear();
  const iconSize = 22;

  return (
    <footer className="xs:pb-10 lg:pb-0 w-full text-black px-4 left-0 right-0 bottom-0 bg-indigo-800">
      {/* <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-5 border-b-2 py-6 text-white"> */}
        {/* <div className="">
      
          <div className="flex flex-row   ">
            <div className="">
              <GrLocationPin size={iconSize} />
            </div>
            <div className="flex justify-center items-center xs:text-sm lg:text-base">
              Atlanta, GA, USA
            </div>
          </div>
          
          <div className="flex flex-row py-3">
            <div className="">
              <IoIosPhonePortrait size={iconSize} />
            </div>
            <div className="flex justify-center items-center xs:text-sm lg:text-base">
              Ask Via Email
            </div>
          </div>
          <div className="flex flex-row   ">
            <div className="">
              <MdOutlineMarkEmailUnread size={iconSize} className="mr-1"/>
            </div>
            <div className="flex justify-center items-center xs:text-sm lg:text-base">
              michaelgsmith1914@gmail.com
            </div>
          </div>
        </div> */}

        {/* <div className="col-span-2 pt-8 md:pt-2">
          <p className="font-bold xs:text-sm lg:text-base lg:uppercase">
            Subscribe to our newsletter
          </p>
          <p className="py-4 xs:text-xs lg:text-sm">
            Get the latest news, articles, and resources, sent to your inbox
            weekly.
          </p> */}
        {/* <form className="flex xs:flex-col md:flex-row">
            <input
              className="w-full p-2 mr-4 rounded-md mb-4 text-black"
              type="email"
              placeholder="Enter email..."
            />
            <button className="p-2 mb-4 cursor-pointer text-black font-semibold text-[12px] border bg-caaptive-gold border-caaptive-gold hover:bg-transparent hover:text-caaptive-gold rounded-md">
              Subscribe
            </button>
          </form> */}
        {/* </div> */}
      {/* </div> */}

      {/* BELOW BORDER */}
      <div className="flex md:flex-row xs:flex-col max-w-[1240px] px-2 xs:py-4 lg:py-3 m-auto justify-between text-center text-gray-300">
        <div className="flex xs:text-xs lg:text-sm xs:flex-col md:flex-row">
          <p className="xs:pt-6 md:py-4">
            &copy; Copyright {year}. Made by{" "}
            <span className="font-semibold underline">Michael Smith</span>.
          </p>
          <p className="xs:pb-6 md:py-4 md:pl-2">All Rights Reserved.</p>
        </div>
        <div className="flex justify-between pt-4 text-2xl xs:px-12 md:px-0">
          <a
            href="https://www.linkedin.com/in/michael-g-smith-9b9677120/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-500 md:px-4"
          >
            <FaLinkedinIn size={iconSize} />
          </a>

          <a
            href="https://github.com/CloudEngineerMike"
            target="_blank"
            rel="noopener noreferrer"
            className="  hover:text-gray-300 md:px-4"
          >
            <FaGithub size={iconSize} />
          </a>

          <a
            href="https://www.youtube.com/@EngineerGuyMike"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:text-red-600 md:px-4"
          >
            <FaYoutube size={iconSize} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
