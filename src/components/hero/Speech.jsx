import { TypeAnimation } from "react-type-animation";

const Speech = () => {
  return (
    <div className=" leading-2 font-semibold text-[25px]">
      <TypeAnimation
        sequence={[
          1500, 
          "Sr. Software Engineer_",
          1500,
          "Backend Developer_",
          1500,
          "Frontend Developer_",
          1500,
          "Cloud Engineer_",
          1500,
        ]}
        wrapper="span"
        speed={50}
        deletionSpeed={20}
        repeat={Infinity}
      />
    </div>
  );
};

export default Speech;
