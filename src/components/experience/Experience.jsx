import { VerticalTimeline } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { experiences } from "../../constant/constant";
import { textVariant } from "../../utils/motion";
import ExperienceCard from "./ExperienceCard";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {

  return (
    <div className="flex lg:hidden xs:py-6 lg:py-24 flex-col lg:max-w-[1170px] mx-auto ">
    <motion.div variants={textVariant()} className="">
      <div className="flex flex-col justify-center text-center ">
        <h2 className="section-title ">Experience</h2>
        <p className="section-description">
          My work experience throughout the years
        </p>

      </div>
   
    </motion.div>

    <div className=' xs:mt-8 lg:mt-0 flex flex-col w-full pr-4 md:max-w-[650px] lg:max-w-full mx-auto '>
      <VerticalTimeline
      lineColor="#ffffff"
>
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={`experience-${index}`}
            experience={experience}
          />
        ))}
      </VerticalTimeline>
    </div>
  </div>
  );
};

export default Experience;
