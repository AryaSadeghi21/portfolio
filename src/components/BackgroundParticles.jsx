import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
const BackgroundParticles = () => {
  const init = useCallback(async (engine) => {
    await loadSlim(engine); // slim instead of full
  }, []);
  const options = {
    fullScreen: { enable: true },
    background: { color: { value: "transparent" } },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "parallax",
          parallax: {
            enable: true,
            force: 30,
            smooth: 20,
          },
        },
      },
    },
    particles: {
      number: { value: 100 },
      move: { enable: true, speed: 0.5 },
      size: { value: { min: 1, max: 3 } },
      color: { value: "#ffffff" },
    },
  };
  return (
    <Particles
      id="tsparticles"
      init={init}
      options={options}
      className="absolute inset-0 -z-60"
    />
  );
};
export default BackgroundParticles;
