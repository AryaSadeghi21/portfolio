import React from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";

const Background = () => {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { damping: 50 });
  const y1 = useTransform(x, [0, 0.5], ["0%", "-20%"]);
  const y2 = useTransform(x, [0, 0.5], ["0%", "-3%"]);
  const y3 = useTransform(x, [0, 0.5], ["0%", "90%"]);
  return (
    <section className="absolute inset-0 bg-black/40">
      <div className="relative h-screen overflow-y-hidden">
        <div
          className="absolute inset-0 w-full h-screen -z-50"
          style={{
            backgroundImage: "url(/assets/sky.webp)",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
          }}
        />
        <motion.div
          className="absolute inset-0 -z-40"
          style={{
            backgroundImage: "url(/assets/mountains2.webp)",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            y: y2,
          }}
        />
        <motion.div
          className="absolute inset-0 -z-30"
          style={{
            backgroundImage: "url(/assets/foreground.webp)",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            y: y1,
          }}
        />
      </div>
    </section>
  );
};

export default Background;
