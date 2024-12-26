import { styles } from "../../styles";

const ProjectCard = () => {
  return (
    <div
      id="projects"
      className="  sm:mt-16 inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"
    >
      <div className="sm:flex lg:hidden justify-center text-center">
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </div>

      <div className=" text-black ">
        {/* Blob Questor */}
        <div className="flex xs:flex-col md:flex-row justify-center items-center xs:text-center md:text-start my-16 lg:pb-[75px] lg:gap-x-[60px]">
          <img src="./blob.svg" alt="" className="max-w-[640px]" />
          <div className="flex flex-col justify-start items-start max-w-[500px]">
            <h1 className="xs:text-xl font-semibold mt-10">Blob Questor</h1>
            <p className="mt-6">
              Azure Function App used to query Big Data from Tenant. Data used
              for analytics and cloud inventory index.
            </p>
            <a href="/">
              <button className="mt-6 w-full bg-indigo-600 text-white font-semibold tracking-wider xs:text-xs uppercase lg:text-base p-4 rounded hover:bg-blue-600 transition">
                Case Study
              </button>
            </a>
          </div>
        </div>

        {/* Cloud Idex Authorizer */}
        <div className="flex xs:flex-col md:flex-row justify-center items-center xs:text-center md:text-start my-16 lg:pb-[75px] lg:gap-x-[60px]">
          <img src="./cia-mackbook.svg" alt="" className="max-w-[640px]" />
          <div className="flex flex-col justify-start items-start max-w-[500px]">
            <h1 className="xs:text-xl font-semibold mt-10">
              Cloud Index Authorizer
            </h1>
            <p className="mt-6">
              An automation service built to manage authorization for a cloud
              inventory index, reducing manual processing efforts by 65%.
            </p>
            <a href="/">
              <button className="mt-6 w-full bg-indigo-600 text-white font-semibold tracking-wider xs:text-xs uppercase lg:text-base p-4 rounded hover:bg-blue-600 transition">
                Case Study
              </button>
            </a>
          </div>
        </div>

        {/* Onboarding Pipeline */}
        <div className="flex xs:flex-col md:flex-row justify-center items-center xs:text-center md:text-start my-16 lg:pb-[75px] lg:gap-x-[60px]">
          <img src="./onboardpipeline.svg" alt="" className="max-w-[640px]" />
          <div className="flex flex-col justify-start items-start max-w-[500px]">
            <h1 className="xs:text-xl font-semibold mt-10">
              Onboarding Pipeline
            </h1>
            <p className="mt-6">
              Developed a Step Functions workflow to onboard, audit, and
              off-board employee RBAC permissions. Improved compliance and
              reduced overhead by 70%.
            </p>
            <a href="/">
              <button className="mt-6 w-full bg-indigo-600 text-white font-semibold tracking-wider xs:text-xs uppercase lg:text-base p-4 rounded hover:bg-blue-600 transition">
                Case Study
              </button>
            </a>
          </div>
        </div>

        {/* Caaptive Cloud */}
        <div className="flex xs:flex-col md:flex-row justify-center items-center xs:text-center md:text-start my-16 lg:pb-[75px] lg:gap-x-[60px]">
          <img
            src="./caaptive-solutions.svg"
            alt=""
            className="max-w-[640px]"
          />
          <div className="flex flex-col justify-start items-start max-w-[500px]">
            <h1 className="xs:text-xl font-semibold mt-10">
              Caaptive Solution Startup
            </h1>
            <p className="mt-6">
              Developed a Step Functions workflow to onboard, audit, and
              off-board employee RBAC permissions. Improved compliance and
              reduced overhead by 70%.
            </p>
            <a href="/">
              <button className="mt-6 w-full bg-indigo-600 text-white font-semibold tracking-wider xs:text-xs uppercase lg:text-base p-4 rounded hover:bg-blue-600 transition">
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
