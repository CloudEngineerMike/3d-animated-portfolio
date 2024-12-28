const ProjectCard = () => {
  return (
    <div id="/#projects"
      className="  xs:py-16 inset-0 z-1 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] text-black "
    >
      <div className="flex flex-col justify-center text-center text-black">
        <h2 className="section-title">Projects</h2>
        <p className="section-description">
          Here you will find personal and <br /> client projects that I created
        </p>
      </div>

      <div className=" ">
        {/* Blob Questor */}
        <div className="flex xs:flex-col lg:flex-row justify-center items-center xs:text-center lg:text-start my-16 md:pb-[75px] lg:gap-x-[60px]">
          <img
            src="./blob.svg"
            alt=""
            className="xs:max-w-[335px] md:max-w-[640px]"
          />
          <div className="flex flex-col xs:justify-center xs:items-center justify-start items-start max-w-[500px]">
            <h1 className="xs:text-xl md:text-2xl font-semibold mt-10">
              Blob Questor
            </h1>
            <p className="mt-6 xs:text-[15px] xs:px-4 lg:text-[17px] text-gray-600">
              Designed a cloud automation service to query and transport Big
              Data. Improving cross-platform analytics and monitoring.
            </p>
            <div className="hidden md:flex pt-4">
              <ul className="flex">
                <li className="flex justify-center items-center bg-blue-700 p-2 rounded-full mr-2 text-[11px]  text-white ">
                  Azure
                </li>

                <li className="flex justify-center items-center bg-orange-600 p-2 rounded-full mr-2 text-[11px]  text-white">
                  AWS
                </li>
                <li className="flex justify-center items-center bg-blue-700 p-2 rounded-full mr-2 text-[11px]  text-white">
                  PowerShell
                </li>

                <li className="flex justify-center items-center bg-purple-700 p-2 rounded-full mr-2 text-[11px]  text-white">
                  Python
                </li>
              </ul>
            </div>
            <a href="/blob-questor" className="">
              <button className="mt-8 w-full bg-indigo-600 text-white  font-semibold tracking-wider xs:text-xs uppercase lg:text-base xs:px-10 p-4 rounded hover:scale-105 transition duration-300 shadow-lg hover:shadow-2xl">
                Case Study
              </button>
            </a>
          </div>
        </div>

        {/* Cloud Index Authorizer */}
        <div className="flex xs:flex-col lg:flex-row justify-center items-center xs:text-center lg:text-start my-16 md:pb-[75px] lg:gap-x-[60px]">
          <img
            src="./cia-mackbook.svg"
            alt=""
            className="xs:max-w-[335px] md:max-w-[640px]"
          />
          <div className="flex flex-col xs:justify-center xs:items-center justify-start items-start max-w-[500px]">
            <h1 className="xs:text-xl font-semibold mt-10">
              Cloud Index Authorizer
            </h1>
            <p className="mt-6 xs:text-[15px] xs:px-4 text-gray-600">
              Led the implementation of an automated authorization service for
              GUI/API access to a cloud inventory tool, achieving a 65%
              reduction in manual.
            </p>
            <div className="hidden md:flex pt-4">
              <ul className="flex">
                <li className="flex justify-center items-center bg-orange-600 p-2 rounded-full mr-2 text-[11px]  text-white">
                  AWS
                </li>

                <li className="flex justify-center items-center bg-purple-700 p-2 rounded-full mr-2 text-[11px]  text-white">
                  Python
                </li>
              </ul>
            </div>
            <a href="/cloud-index-auth">
            <button className="mt-8 w-full bg-indigo-600 text-white  font-semibold tracking-wider xs:text-xs uppercase lg:text-base xs:px-10 p-4 rounded hover:scale-105 transition duration-300 shadow-lg hover:shadow-2xl">
            Case Study
              </button>
            </a>
          </div>
        </div>

        {/* Caaptive Cloud */}
        <div className="flex xs:flex-col lg:flex-row justify-center items-center xs:text-center lg:text-start my-16 md:pb-[75px] lg:gap-x-[60px]">
          <img
            src="./caaptive-solutions.svg"
            alt=""
            className="xs:max-w-[335px] md:max-w-[640px]"
          />
          <div className="flex flex-col xs:justify-center xs:items-center justify-start items-start max-w-[500px]">
            <h1 className="xs:text-xl font-semibold mt-10">
              Caaptive Solutions
            </h1>
            <p className="mt-6 xs:text-[15px] xs:px-4 text-gray-600">
              Developed a full-stack web application for a startup, handling
              everything from conceptual design to deployment. Website cost $2
              per month to run!
            </p>
            <div className="hidden md:flex pt-4">
              <ul className="flex">
                <li className="flex justify-center items-center bg-black p-2 rounded-full mr-2 text-[11px]  text-white ">
                  Next JS
                </li>
                <li className="flex justify-center items-center text-black bg-yellow-400 p-2 rounded-full mr-2 text-[11px]">
                  TypeScript
                </li>
                <li className="flex justify-center items-center bg-orange-600 p-2 rounded-full mr-2 text-[11px]  text-white">
                  AWS
                </li>

                <li className="flex justify-center items-center bg-purple-700 p-2 rounded-full mr-2 text-[11px]  text-white">
                  Python
                </li>
              </ul>
            </div>
            <a href="/caaptive-solutions">
            <button className="mt-8 w-full bg-indigo-600 text-white  font-semibold tracking-wider xs:text-xs uppercase lg:text-base xs:px-10 p-4 rounded hover:scale-105 transition duration-300 shadow-lg hover:shadow-2xl">
            Case Study
              </button>
            </a>
          </div>
        </div>

        {/* Onboarding Pipeline */}
        <div className="flex xs:flex-col lg:flex-row justify-center items-center xs:text-center lg:text-start my-16 md:pb-[75px] lg:gap-x-[60px]">
          <img
            src="./onboardpipeline.svg"
            alt=""
            className="xs:max-w-[335px] md:max-w-[640px]"
          />
          <div className="flex flex-col xs:justify-center xs:items-center justify-start items-start max-w-[500px]">
            <h1 className="xs:text-xl font-semibold mt-10">
              Onboarding Pipeline
            </h1>
            <p className="mt-6 xs:text-[15px] xs:px-4 text-gray-600">
              Developed an onboarding pipeline leveraging step functions,
              lambda, and dynamodb. Enhanced security compliance to leverage
              RBAC with an 85% efficiency improvement.
            </p>
            <div className="hidden md:flex pt-4">
              <ul className="flex">
                <li className="flex justify-center items-center bg-orange-600 p-2 rounded-full mr-2 text-[11px]  text-white">
                  AWS
                </li>

                <li className="flex justify-center items-center bg-purple-700 p-2 rounded-full mr-2 text-[11px]  text-white">
                  Python
                </li>
              </ul>
            </div>
            <a href="/onboarding-pipeline">
            <button className="mt-8 w-full bg-indigo-600 text-white  font-semibold tracking-wider xs:text-xs uppercase lg:text-base xs:px-10 p-4 rounded hover:scale-105 transition duration-300 shadow-lg hover:shadow-2xl">
            Case Study
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
