import { VerticalTimeline } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { experiences } from "../../constant/constant";
import { textVariant } from "../../utils/motion";
import ExperienceCard from "./ExperienceCard";
import { styles } from "../../styles";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {

  return (
    <>
    <motion.div variants={textVariant()} className=" sm:py-8 lg:py-32 flex flex-col lg:justify-start lg:items-start lg:max-w-[1170px] mx-auto">
      <p className={`${styles.sectionSubText} text-center`}>
        What I&#39;ve done so far
      </p>
      <h2 className={`${styles.sectionHeadText} text-center` }>
        Work Experience.
      </h2>
   
    </motion.div>

    <div className='md:mt-5 lg:mt-0 flex flex-col md:max-w-[725px] lg:max-w-full mx-auto'>
      <VerticalTimeline
      lineColor="#00b8f8"
>
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={`experience-${index}`}
            experience={experience}
          />
        ))}
      </VerticalTimeline>
    </div>
  </>
  );
};

export default Experience;
