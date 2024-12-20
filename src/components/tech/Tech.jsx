
import BallCanvas from "../canvas/Ball";
import { technologies } from "../../constant/constant";

const Tech = () => {
  return (
    <div className="container">
      <div className=" flex flex-row flex-wrap justify-center gap-10">
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
