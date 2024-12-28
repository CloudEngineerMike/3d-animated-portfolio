import { RiArrowGoBackLine } from "react-icons/ri";

export default function CloudIndexAuth() {
  return (
    <div className="w-full xs:h-full md:h-screen lg:h-full bg-inherit">
      <div>
        <div className="relative w-full h-[30vh] lg:h-[40vh] xs:bg-[url('/cia-mackbook.svg')] bg-no-repeat bg-cover overflow-x-clip brightness-50"></div>
        <div className="absolute xs:bottom-[72%] md:bottom-[72%] lg:bottom-[65%] xs:left-4 md:left-10 text-white">
          <h2 className="py-2 xs:text-xl md:text-3xl lg:text-4xl font-bold">
            Cloud Index Authorizer
          </h2>
        </div>
      </div>
      <div className="xs:pb-8 xs:p-[20px] sm:p-[22px] md:p-10    xs:w-full lg:max-w-[1240px] m-auto flex xs:flex-col md:flex-row ">
        <div className="flex-col md:pr-10 ">
          <h1 className="xs:text-base md:text-xl lg:text-2xl font-bold">
            The Problem
          </h1>
          <p className="xs:text-sm md:text-base lg:text-lg pt-1">
            Need to submit a ticket to request authorization to a custom tool?
            This process can be largely manual, and as engineers, we aim to
            leverage technology to automate repetitive tasks and reduce manual
            effort.
          </p>
          <h1 className="xs:text-base md:text-xl lg:text-2xl font-bold xs:pt-4 md:pt-8">
            The Solution
          </h1>
          <p className="xs:text-sm md:text-base lg:text-lg pt-1">
            The Cloud Index Authorizer is a custom-built service that offers an
            automated solution for handling authorization processes for UI & API
            access.{" "}
          </p>

          <h1 className="xs:text-base md:text-xl lg:text-2xl font-bold xs:pt-4 md:pt-8">
            Architecture/Design
          </h1>
          <img
            src="/cia-diagram.png"
            alt=""
            className="mt-2 pb-4 lg:w-[700px] bg-white"
          />
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
              <li className="pt-3 list-none font-semibold text-orange-600">
                AWS
              </li>
              <li className="pt-2">Lambda</li>
              <li className="pt-2">Secrets Manager</li>
              <li className="pt-2">API Gateway</li>
              <li className="pt-2">SNS</li>
              <li className="pt-3 list-none font-semibold text-green-600">
                Program Language
              </li>
              <li className="pt-2">Python</li>

              <li className="pt-3 list-none font-semibold text-purple-600">
                Infrastructure
              </li>
              <li className="pt-2">Terraform</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
