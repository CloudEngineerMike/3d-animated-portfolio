import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import ResponsiveNav from "./components/navbar/ResponsiveNav";
import About from "./components/about/About";
// import AnimatedCursor from "react-animated-cursor";

const App = () => {
  return (
      <div className="">
              {/* <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={2}
        outerScale={2}
        outerAlpha={0}
        innerStyle={{ backgroundColor: "white" }}
        outerStyle={{
          border: "3px solid white",
        }}
      /> */}

        <ResponsiveNav />
        <div className="container">
          <section id="home">
            <Hero />
          </section>
          <section id="expertise">
            <Services />
          </section>

          <section id="about">
          <About />
        </section>
          {/* <section id="portfolio"> */}
            <Portfolio />
          {/* </section> */}
        {/* <section id="#testimonials">
          <Testimonials />
        </section> */}
          <section id="contact">
            <Contact />
          </section>
        </div>
      </div>
  );
};

export default App;
