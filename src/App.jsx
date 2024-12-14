import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import ResponsiveNav from "./components/navbar/ResponsiveNav";

const App = () => {
  return (
    <div className="">
      <ResponsiveNav />
      <div className="container">
        <section id="home">
          <Hero />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        {/* <section id="#about">
          <About />
        </section>
        <section id="#testimonials">
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
