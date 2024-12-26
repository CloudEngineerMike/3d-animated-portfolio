import LazyLoad from "react-lazyload";
import { lazy, Suspense } from "react";
import Header from "./components/header/Header";

const Home = lazy(() => import("./components/home/Home"));
const WorkEthics = lazy(() => import("./components/ethics/WorkEthics"));
// const About = lazy(() => import("./components/about/About"));
const Skills = lazy(() => import("./components/skills/Skills"));
const Experience = lazy(() => import("./components/experience/Experience"));
const ProjectCard = lazy(() => import("./components/projectcard/ProjectCard"));
const Contact = lazy(() => import("./components/contact/Contact"));
const Footer = lazy(() => import("./components/footer/Footer"));

const App = () => {
  return (
    <div className="">
      <section>
        <Header />
      </section>

      <div className=" ">
        <Suspense fallback={<div>Loading...</div>}>
          <LazyLoad>
            <section id="home" className="h-screen container mx-auto px-4">
              <Home />
            </section>
          </LazyLoad>
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <LazyLoad height={"100vh"} offset={-100}>
            <section className="h-full">
              <WorkEthics />
            </section>
          </LazyLoad>
        </Suspense>

        {/* <Suspense fallback={<div>loading...</div>}>
          <LazyLoad height={"100vh"} offset={-100}>
            <section id="about" className="">
              <About />
            </section>
          </LazyLoad>
        </Suspense> */}

        <Suspense fallback={<div>loading...</div>}>
          <LazyLoad height={"100vh"} offset={-100}>
            <section id="skills" className="">
              <Skills />
            </section>
          </LazyLoad>
        </Suspense>

        <Suspense fallback={<div>loading...</div>}>
          <LazyLoad height={"100vh"} offset={-100}>
            <section id="experience" className="h-full">
              <Experience />
            </section>
          </LazyLoad>
        </Suspense>
        <Suspense fallback={<div>loading...</div>}>
          <LazyLoad height={"100vh"} offset={-100}>
            <section
              id="projects"
              className=" h-full flex justify-center items-center"
            >
              <ProjectCard />
            </section>
          </LazyLoad>
        </Suspense>

        <Suspense fallback={<div>loading...</div>}>
          <LazyLoad height={"100vh"} offset={-100}>
            <section
              id="contact"
              className=" xs:h-screen md:h-[700px] lg:h-screen"
            >
              <Contact />
            </section>
          </LazyLoad>
        </Suspense>
      </div>
      <Suspense fallback={<div>loading...</div>}>
        <LazyLoad height={"100vh"} offset={-100}>
          <section id="contact" className=" h-full">
            <Footer />
          </section>
        </LazyLoad>
      </Suspense>
    </div>
  );
};

export default App;
