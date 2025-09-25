import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import BackgroundParticles from "./components/BackgroundParticles";
import Projects from "./sections/Projects";
const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />

      <Hero />
      <section className="relative">
        <BackgroundParticles />
        <About />
        <Projects />
      </section>

      {/* projects */}
      {/* experience */}
      {/* skills */}
      {/* contact */}
      {/* footer */}
    </div>
  );
};

export default App;
