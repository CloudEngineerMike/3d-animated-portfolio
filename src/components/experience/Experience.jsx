import { VerticalTimeline } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { experiences } from "../../constant/constant";
import { textVariant } from "../../utils/motion";
import ExperienceCard from "./ExperienceCard";
import { styles } from "../../styles";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {

  return (
    <div className="xs:my-12 sm:py-8 lg:py-24 flex flex-col lg:max-w-[1170px] mx-auto ">
    <motion.div variants={textVariant()} className="">
      {/* <p className={`${styles.sectionSubText} text-center`}>
        What I&#39;ve done so far
      </p> */}
      <h2 className={`${styles.sectionHeadText} text-center ` }>
        Work Experience
      </h2>
   
    </motion.div>

    <div className=' md:mt-5 lg:mt-0 flex flex-col md:max-w-[650px] lg:max-w-full mx-auto '>
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
