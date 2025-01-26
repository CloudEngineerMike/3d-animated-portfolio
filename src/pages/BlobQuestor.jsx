// import { Link } from "react-router-dom";
import { RiArrowGoBackLine } from "react-icons/ri";

export default function BlobQuestor() {
  return (
    <div className="w-full xs:h-full md:h-screen bg-inherit">
      <div>
        <div className="relative w-full h-[30vh] lg:h-[40vh] xs:bg-[url('/blob.svg')] bg-no-repeat bg-cover overflow-x-clip brightness-50"></div>
        <div className="absolute xs:bottom-[72%] md:bottom-[72%] lg:bottom-[65%] xs:left-4 md:left-10 text-white">
          <h2 className="py-2 xs:text-xl md:text-3xl lg:text-4xl font-bold">
            Blob Questor
          </h2>
        </div>
      </div>
      <div className="xs:pb-8 xs:p-[20px] sm:p-[22px] md:p-10    xs:w-full lg:max-w-[1240px] m-auto flex xs:flex-col md:flex-row ">
        <div className="flex-col md:pr-10 ">
          <h1 className="xs:text-base md:text-xl lg:text-2xl font-bold">
            The Problem
          </h1>
          <p className="xs:text-sm md:text-base lg:text-lg pt-1">
            Ever wanted to track analytics for all the resources in your Azure
            tenant? Say goodbye to guesswork and outdated inventory
            spreadsheets. Let Blob Questor, query your entire tenant and provide
            detailed insights at your fingertips.
          </p>
          <h1 className="xs:text-base md:text-xl lg:text-2xl font-bold xs:pt-4 md:pt-8">
            The Solution
          </h1>
          <p className="xs:text-sm md:text-base lg:text-lg pt-1">
            Blob Questor is a service that provides an automated mechanism for
            querying all of Azure&#39;s data and pulling the JSON into a blob file.
            Bonus: Blob Questor can now transport data between cloud platforms!
            Keep all your data in one place has never been easier.
          </p>
          {/* <h1 className="text-2xl font-bold pt-8">Architecture/Diagram</h1>
          <Image src="/ss-diagram.png" alt="" width="75" height="35" /> */}

<div className="mt-8 flex xs:space-x-4 lg:space-x-6">
              <a
                href="https://github.com/CloudEngineerMike/blob-questor"
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
              href="/"
            >
              Back to Projects
            </a>
          </div>

        </div>
        <div className="">
          <div className="border-solid border-2 border-yellow-400 shadow-xl rounded-lg p-6 xs:w-[200px] md:w-[200px] lg:w-[225px]">
            <h3 className="font-semibold text-center xs:text-base lg:text-lg">
              Technologies
            </h3>
            <div className=" xs:text-sm lg:text-base ">
              <li className="pt-3 list-none font-semibold text-blue-600">
                Azure
              </li>
              <li className="pt-2">Resource Graph</li>
              <li className="pt-1">Function App</li>
              <li className="pt-3 list-none font-semibold text-orange-600">
                AWS
              </li>
              <li className="pt-2">CloudWatch Events</li>
              <li className="pt-1">Secrets Manager</li>
              <li className="pt-1">Lambda</li>
              <li className="pt-1">S3</li>
              <li className="pt-3 list-none font-semibold text-green-600">
                Program Languages
              </li>
              <li className="pt-2">Powershell</li>
              <li className="pt-1">Python</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}