"use client";
import { Fragment } from "react";
import { motion } from "framer-motion";
import lee from "../assets/leeAvatar.jpeg";
import vincent from "../assets/vincentAvatar.jpeg";
import gamaal from "../assets/gamaalAvatar.jpeg";
import demarcus from "../assets/demarcusAvatar.jpeg";

const testimonials = [
  {
    id: 0,
    text: " ''Michael Smith consistently displays a willingness to learn and to quickly put into practice what he's learning. He is very detailed oriented, accurate and punctual.'' ",
    imageSrc: vincent,
    userName: "Vincent Mouzon",
    jobTitle: "I.T. Analyst",
  },
  {
    id: 1,
    text: " ''Michael is persistent and studious, and he adapts to changes very quickly. After a couple of roadblocks in his YearUp internship at GE Digital, I helped steer Michael in a new direction that would ensure his success. His interest was so great that he took off and ran with it. An amazing young professional that will go far in his newly-found specialty!'' ",
    imageSrc: lee,
    userName: "Lee Menor",
    jobTitle: "Senior Systems Administration Engineer",
  },
  {
    id: 2,
    text: " ''It has been and still is a pleasure to work with Michael. He's one of most motivated and dedicated individuals I've met. Very helpful and knowledgeable when it comes to hardware and especially Cisco and LAN networks. He's definitely someone you'd need on your team!'' ",
    imageSrc: gamaal,
    userName: "Gamaal Kareem",
    jobTitle: "I.T. Office Lead/Supoort Specialist",
  },
  {
    id: 3,
    text: " ''I am glad to have the opportunity to interact with Michael Smith and learn from him during my time in Year Up. He has showed superior characteristics that I know that will empower him to reach his full potential at any company he works for. He is very tech savvy when it comes to computer hardware and software material. The progress he has made shows just how much possibilities he could have in any company he is employed into. Looking back at the moments we shared during L&D, I don’t regret a thing.'' ",
    imageSrc: demarcus,
    userName: "DeMarcus Reaves",
    jobTitle: "Analytics Developer",
  },
  {
    id: 4,
    text: " ''Michael Smith consistently displays a willingness to learn and to quickly put into practice what he's learning. He is very detailed oriented, accurate and punctual.'' ",
    imageSrc: vincent,
    userName: "Vincent Mouzon",
    jobTitle: "I.T. Analyst",
  },
  {
    id: 5,
    text: " ''Michael is persistent and studious, and he adapts to changes very quickly. After a couple of roadblocks in his YearUp internship at GE Digital, I helped steer Michael in a new direction that would ensure his success. His interest was so great that he took off and ran with it. An amazing young professional that will go far in his newly-found specialty!'' ",
    imageSrc: lee,
    userName: "Lee Menor",
    jobTitle: "Senior Systems Administration Engineer",
  },
];

const firstColumn = testimonials.slice(0, 2);
const secondColumn = testimonials.slice(2, 4);
const thirdColumn = testimonials.slice(4, 6);
const mobileColumn = testimonials.slice(0, 4);

const TestimonialsColumn = (props) => (
  <div className={props.className}>
    <motion.div
      animate={{
        translateY: "-50%",
      }}
      transition={{
        duration: props.duration || 50,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      }}
      className="flex items-center flex-col gap-6 pb-6"
    >
      {[...new Array(2)].fill(0).map((_, index) => (
        <Fragment key={index}>
          {props.testimonials.map(({ id, text, imageSrc, userName, jobTitle }) => (
            <div key={id} className="card lg:my-2 shadow-lg">
              <div className="xs:text-sm lg:text-base">{text}</div>
              <div className="flex items-center gap-2 mt-5">
                <img
                  src={imageSrc}
                  alt={userName}
                  className="h-10 w-10 rounded-full"
                />
                <div className="flex flex-col">
                  <div className="xs:font-medium tracking-tight leading-5">
                    {userName}
                  </div>
                  <div className="xs:text-xs leading-5 tracking-tight">
                    {jobTitle}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Fragment>
      ))}
    </motion.div>
  </div>
);

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-white xs:pt-12 lg:py-24">
      <div className="container w-full m-auto">
        <div className="flex flex-col justify-center">
          <h2 className="section-title text-black">Testimonials</h2>
          <p className="section-description xs:mt-2 md:mt-0 lg:mt-2 xs:px-4 md:mx-32 text-black">
            Take a look to see what others have to say about my work ethic and
            skills.
          </p>
        </div>
        <div className="xs:block md:hidden justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
          <TestimonialsColumn testimonials={mobileColumn} />
        </div>
        <div className="xs:hidden md:flex justify-center md:gap-6 mt-10 lg:gap-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} />
          <TestimonialsColumn testimonials={secondColumn} />
          <TestimonialsColumn testimonials={thirdColumn} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
