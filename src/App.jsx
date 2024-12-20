import Home from "./components/home/Home";
import Services from "./components/services/Services";
// import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import ResponsiveNav from "./components/navbar/ResponsiveNav";
import About from "./components/about/About";
import AnimatedCursor from "react-animated-cursor";
import Experience from "./components/experience/Experience";
import Tech from "./components/tech/tech";

const App = () => {
  return (
    <div className="sm:cursor-none">
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={2}
        outerScale={2}
        outerAlpha={0}
        innerStyle={{ backgroundColor: "gold" }}
        outerStyle={{
          border: "3px solid gold",
        }}
      />

      <ResponsiveNav />
      <div className=" container mx-auto px-4">
        <section id="home" className="h-screen">
          <Home />
        </section>
        <section id="home" className="h-screen">
          <About />
        </section>
        <section id="skills" className="h-[900px]">
          <Services />
        </section>
        <section id="experience" className="sm:h-[800px] md:h-[1500px] lg:h-[1900px]">
          <Experience />
        </section>
        <section>
          <Tech/>
        </section>
         {/*<section id="portfolio" className="h-screen">
          <Portfolio />
        </section> */}


        {/* <section id="about" className="h-screen snap-center">
          <About />
        </section> */}
        {/* <section id="portfolio"> */}
        {/* <Portfolio /> */}
        {/* </section> */}
        {/* <section id="#testimonials">
          <Testimonials />
        </section> */}
        <section id="contact" className="sm:h-[1100px] md:h-screen">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default App;
