import LazyLoad from "react-lazyload";
import { lazy, Suspense } from "react";
// import Testimonials from "./components/Testimonials";
import ProjectCard from "./components/ProjectCard";
import Testimonials from "./components/Testimonials";
import Experience from "./components/experience/Experience";

const Hero = lazy(() => import("./components/hero/Hero"));
const About = lazy(() => import("./components/About"));
// const Experience = lazy(() => import("./components/experience/Experience"));
// const ProjectCard = lazy(() => import("./components/ProjectCard"));
const Contact = lazy(() => import("./components/Contact"));

export default function Builder() {
  return (
    // <div className="w-full">
    <div className="">
      <Suspense fallback={<div>Loading...</div>}>
        <LazyLoad>
          <section id="home" className="h-screen">
            <Hero />
          </section>
        </LazyLoad>
      </Suspense>
      <section id="about" className="h-full">
        <About />
      </section>

      {/* <Suspense fallback={<div>loading...</div>}>
        <LazyLoad height={"100vh"} offset={-100}> */}
          <section id="experience" className="h-full">
            <Experience />
          </section>
        {/* </LazyLoad>
      </Suspense> */}

      <section id="projects" className="h-full">
        <ProjectCard />
      </section>

      <section id="projects" className="h-full">
        <Testimonials />
      </section>

      <section id="contact" className=" xs:h-full">
        <Contact />
      </section>
    </div>
    // </div>
  );
}
