// import Hero from "./components/hero/Hero";
import BlobQuestor from "./pages/BlobQuestor";
import CloudIndexAuth from "./pages/CloudIndexAuth";
import OnboardingPipeline from "./pages/OnboardingPipeline";
import CaaptiveSolutions from "./pages/CaaptiveSolutions";
// import About from "./components/About";
// import Experience from "./components/experience/Experience";
// import ProjectCard from "./components/ProjectCard";
// import Testimonials from "./components/Testimonials";
// import Contact from "./components/Contact";
import PageBuilder from "./PageBuilder";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<PageBuilder />} />
        {/* <Route path="about" element={<About />} />
        <Route path="experience" element={<Experience />} />
        <Route index element={<ProjectCard />} /> */}
        {/* <Route path="testimonials" element={<Testimonials />} /> */}
        {/* <Route path="contact" element={<Contact />} /> */}
        <Route path="blob-questor" element={<BlobQuestor />} />
        <Route path="cloud-index-auth" element={<CloudIndexAuth />} />
        <Route path="onboarding-pipeline" element={<OnboardingPipeline />} />
        <Route
          path="caaptive-solutions"
          element={<CaaptiveSolutions />}
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
