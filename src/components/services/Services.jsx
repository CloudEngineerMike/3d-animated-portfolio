import { FaNodeJs } from "react-icons/fa";

const Services = () => {
  return (
    <div id="expertise" className="container h-screen lg:pt-32">
      <div className="flex flex-col justify-center w-full">
        <h2 className="section-title px-2">Skills.</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-[80%] mx-auto items-center mt-10">
        {/* Card Component */}
        <div className="flex flex-col items-center justify-center bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-6 lg:w-[450px] ">
          {/* <!-- Card Header --> */}
          <h2 className="text-white text-2xl font-bold mb-4 text-center">
            BackEnd
          </h2>

          {/* <!-- Mini Grid --> */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 ">
            {/* <!-- Mini Cards --> */}
            <div className="bg-gray-800 p-3 border-gray-700 border-2 rounded-xl shadow-md flex items-center justify-center col-span-2">
              <div className="flex justify-center items-center  text-white font-medium">
                <FaNodeJs />
                <p className="ml-1">Node Js</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
