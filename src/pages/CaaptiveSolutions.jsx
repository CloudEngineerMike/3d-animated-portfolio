import { RiArrowGoBackLine } from "react-icons/ri";

export default function CaaptiveSolutions() {
  return (
    <div className="w-full xs:h-full md:h-screen lg:h-full bg-inherit">
      <div>
        <div className="relative w-full h-[30vh] lg:h-[40vh] xs:bg-[url('/caaptive-solutions.svg')] bg-no-repeat bg-cover overflow-x-clip brightness-50"></div>
        <div className="absolute xs:bottom-[72%] md:bottom-[72%] lg:bottom-[65%] xs:left-4 md:left-10 text-white">
          <h2 className="py-2 xs:text-xl md:text-3xl lg:text-4xl font-bold">
            Caaptive Solutions
          </h2>
        </div>
      </div>
      <div className="xs:pb-8 xs:p-[20px] sm:p-[22px] md:p-10    xs:w-full lg:max-w-[1240px] m-auto flex xs:flex-col md:flex-row ">
        <div className="flex-col md:pr-10 ">
          <h1 className="xs:text-base md:text-xl lg:text-2xl font-bold">
            Overview
          </h1>
          <p className="xs:text-sm md:text-base lg:text-lg pt-1">
            My very first full-stack, freelance opportunity. The project was for
            a friend who was building a MSP startup and non-profit organization,
            dedicated to helping senior citizens to stay protected against cyber
            attacks.
          </p>

          <h1 className="xs:text-base md:text-xl lg:text-2xl font-bold xs:pt-4 md:pt-8">
            Mobile Design
          </h1>
          <img src="/caaptive.png" alt="" className="mt-2 pb-4 lg:w-[700px]" />

          <div className="mt-8 flex xs:space-x-4 lg:space-x-6">
            <a
              href="https://github.com/CloudEngineerMike?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-600 rounded-md hover:scale-105 transition duration-300 shadow-xl hover:shadow-2xl"
            >
              <button className=" w-full  text-white  font-semibold tracking-wider xs:text-[10px] lg:text-xs uppercase lg:text-[15] xs:px-10 p-4">
                Github
              </button>
            </a>
            <a
              href="https://www.caaptivesolutions.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-600 rounded-md hover:scale-105 transition duration-300 shadow-xl hover:shadow-2xl"
            >
              <button className=" w-full  text-white  font-semibold tracking-wider xs:text-[10px] lg:text-xs uppercase lg:text-[15] xs:px-10 p-4 ">
                Demo
              </button>
            </a>
          </div>
          <div className="flex justify-start items-center flex-row py-6 text-blue-500 font-semibold xs:text-sm lg:text-base">
            <RiArrowGoBackLine className="" />
            <a
              className="pl-1 hover:underline underline-offset-2"
              href="/#projects"
            >
              Back to Projects
            </a>
          </div>
        </div>
        <div className="pt-10">
          <div className="border-solid border-2 border-yellow-400 shadow-xl rounded-lg p-6 xs:w-[200px] md:w-[200px] lg:w-[225px]">
            <h3 className="font-semibold text-center xs:text-base lg:text-lg">
              Technologies
            </h3>
            <div className=" xs:text-sm lg:text-base ">
              <li className="pt-3 list-none font-semibold text-purple-600">
                Front-End
              </li>
              <li className="pt-2">Next.js (React)</li>
              <li className="pt-3 list-none font-semibold text-orange-600">
                Back-End
              </li>
              <li className="pt-2">AWS</li>
              <li className="pt-3 list-none font-semibold text-green-700">
                Program Languages
              </li>
              <li className="pt-2">TypeScript</li>
              <li className="pt-1">HTML & CSS</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
