import { useRef } from "react";
import Card from "../components/Card";
import { Frameworks } from "../components/FrameWorks";
import BackgroundParticles from "../components/BackgroundParticles";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing pt-0" id="about">
      <BackgroundParticles />
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="relative flex items-end grid-default-color grid-1 h-64">
          <img
            src="assets/me.jpeg"
            className="z-10 absolute scale-[0.2]
            scale-[1.4] right-[-4rem] top-[-8rem]
            lg:right-[4.5rem] lg:top-[-2rem]
            md:right-[3rem] md:top[-2rem]
            sm:scale-[2] sm:right-[1rem] sm:top-[-1rem]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Arya Sadeghi</p>
            <p className="subtext !text-white">
              I'm a Computer Science student at UCSB with a focus on AI,
              systems, and math. I enjoy building projects that explore new
              technologies and have the potential to grow into real products.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2 flex flex-col items-center justify-center text-center p-6">
          <h3 className="text-2xl font-bold mb-4">Connect With Me</h3>
          <div className="flex gap-6 mb-4">
            <a
              href="https://github.com/AryaSadeghi21"
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-80"
            >
              <img
                src="assets/logos/github.svg"
                alt="GitHub"
                className="w-20 h-20"
              />
            </a>
            <a
              href="https://linkedin.com/in/arya-sadeghi-cs"
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-80"
            >
              <img
                src="assets/logos/linkedin.svg"
                alt="LinkedIn"
                className="w-20 h-20"
              />
            </a>
          </div>
          <a
            href="/assets/Arya_Sadeghi_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-md bg-primary text-white hover:bg-storm transition"
          >
            View Resume
          </a>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-2">
          <div className="z-10 w-50%]">
            <p className="headText">Tech Stack</p>
            <p className="subtext">
              I specialize in a variety of languages, frameworks, and tools that
              allow me to build robust and scalable applications
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
