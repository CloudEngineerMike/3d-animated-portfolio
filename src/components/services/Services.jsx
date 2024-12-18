import { skillCards } from "../../constant/constant";

const Services = () => {
  return (
    <div id="expertise" className="container h-screen lg:pt-32">
      <div className="flex flex-col justify-center w-full">
        <h2 className="section-title px-2">Skills.</h2>
      </div>

      {/* Grid layout for all cards */}
      <div className="grid justify-center items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-10 w-full mt-10">
        {skillCards.map((card) => {
          return (
            <div
              key={card.id}
              className="flex col-span-2 flex-col items-center justify-center bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-6"
            >
              <h2 className="text-white text-2xl font-bold mb-4 text-center">
                {card.title}
              </h2>

              <div className="grid grid-cols-6 gap-2">
                {card.cardItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex col-span-2 justify-center items-center p-4 border-gray-700 border-2 rounded-xl shadow-md lg:text-base"
                  >
                    <span className={item.color}>{item.icon}</span>
                    <p className="ml-1">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
