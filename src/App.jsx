import LazyLoad from "react-lazyload";
import { lazy, Suspense } from "react";
import Starfield from "react-starfield";

const ResponsiveNav = lazy(() => import("./components/navbar/ResponsiveNav"));
const Home = lazy(() => import("./components/home/Home"));
const WorkEthics = lazy(() => import("./components/ethics/WorkEthics"))
const About = lazy(() => import("./components/about/About"));
const Experience = lazy(() => import("./components/experience/Experience"));
const Tech = lazy(() => import("./components/tech/tech"));
const Services = lazy(() => import("./components/services/Services"));
const Contact = lazy(() => import("./components/contact/Contact"));

const App = () => {
  return (
    <div className="">
      
      {/* <Starfield
        starCount={1000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
        className="z-0"
      /> */}

      <Suspense fallback={<div>Loading...</div>}>
        <LazyLoad>
          <section>
            <ResponsiveNav />
          </section>
        </LazyLoad>
      </Suspense>
      <div className=" container mx-auto px-4">

        <Suspense fallback={<div>Loading...</div>}>
          <LazyLoad>
            <section id="home" className="h-screen">
              <Home />
            </section>
          </LazyLoad>
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <LazyLoad height={"100vh"} offset={-100}>
            <section>
              <WorkEthics />
            </section>
          </LazyLoad>
        </Suspense>


        <Suspense fallback={<div>loading...</div>}>
          <LazyLoad height={"100vh"} offset={-100}>
            <section id="about" className="">
              <About />
            </section>
          </LazyLoad>
        </Suspense>
        <Suspense fallback={<div>loading...</div>}>
          <LazyLoad height={"100vh"} offset={-100}>
            <section
              id="experience"
              className="sm:h-[800px] md:h-[1500px] lg:h-[1900px]"
            >
              <Experience />
            </section>
          </LazyLoad>
        </Suspense>
        <Suspense fallback={<div>loading...</div>}>
          <LazyLoad height={"100vh"} offset={-100}>
            <section>
              <Tech />
            </section>
          </LazyLoad>
        </Suspense>
        <Suspense fallback={<div>loading...</div>}>
          <LazyLoad height={"100vh"} offset={-100}>
            <section id="skills" className="h-[900px]">
              <Services />
            </section>
          </LazyLoad>
        </Suspense>
        <Suspense fallback={<div>loading...</div>}>
          <LazyLoad height={"100vh"} offset={-100}>
            <section id="contact" className="sm:h-[1100px] md:h-screen">
              <Contact />
            </section>
          </LazyLoad>
        </Suspense>
      </div>
    </div>
  );
};

export default App;
