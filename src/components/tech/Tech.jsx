
import BallCanvas from "../canvas/Ball";
import { technologies } from "../../constant/constant";

const Tech = () => {
  return (
    <div className="container sm:py-20 lg:py-32">
      <div className=" flex flex-row flex-wrap justify-center sm:gap-0 md:gap-10 lg:max-w-[1300px] mx-auto">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tech;
