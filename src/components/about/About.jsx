import { motion } from "framer-motion";
import { styles } from "../../styles";
import { fadeIn, textVariant } from "../../utils/motion.js";
import { services } from "../../constant/constant";
import ServiceCard from "./ServiceCard";

const About = () => {
  return (
    <div className="container mx-auto h-screen sm:py-32">
      {/* Section Heading */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me.</h2>
      </motion.div>

      {/* About Description */}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-[17px] max-w-3xl leading-[30px]"
      >
       I&#39;m a dedicated Senior Software Engineer with nearly a decade of experience in software engineering and cloud automation, specializing in AWS and Azure platforms. In recent years, I&#39;ve turned my focus toward front-end development, honing my skills in TypeScript, JavaScript, and frameworks like Angular, React, Node.js, and now Vite! Lately, I&#39;ve been exploring iOS mobile development and diving into Swift, driven by my passion for continuous learning and growth in my career.
      </motion.p>

      {/* Service Cards */}
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default About;
