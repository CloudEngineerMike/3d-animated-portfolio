import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: experience.iconBg,
        boxShadow: 'none',
        border: "1px solid #B45309"
        // color: "#B45309",
        // borderRadius: "1.5rem",
      }}
      contentArrowStyle={{
        borderRight: `7px solid ${experience.iconBg}`
      
      }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full ">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className=" w-[100%] h-[100%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3
          className={`${experience.pointsColor} sm:text-base md:text-[24px] font-bold`}
        >
          {experience.title}
        </h3>
        <p
          className={`${experience.pointsColor} text-secondary text-[16px] font-semibold`}
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="sm:hidden md:flex flex-col mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className={`${experience.pointsColor} sm:text-xs md:text-[14px] pl-1 tracking-wider`}
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;
