import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion.js";


const ServiceCard = ({ index, title, icon }) => {
    const tiltOptions = {
      max: 45,
      scale: 1,
      speed: 450,
    };
  
    return (
        <Tilt
        tiltReverse={true} // Reverse the tilt direction
        className=" flex col-span-2 flex-col items-center justify-center bg-indigo-900 border-2 border-green-500 rounded-[20px] shadow-2xl sm:p-[1px]"
      >
        <motion.div
          variants={fadeIn("right", "spring", index * 0.5, 0.75)}
          className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
          <div
            options={tiltOptions}
            className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
          >
            <img
              src={icon}
              alt={title}
              className="w-16 h-16 object-contain"
            />
            <h3 className="text-white text-[20px] font-bold text-center">
              {title}
            </h3>
          </div>
        </motion.div>
      </Tilt>
    );
  };

  export default ServiceCard;