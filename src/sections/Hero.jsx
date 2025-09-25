import Background from "../components/Background";
import HeroText from "../components/HeroText";
import { Canvas, useFrame } from "@react-three/fiber";
import { Ship } from "../components/Ship";
import { Environment } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { Float } from "@react-three/drei";
import { easing } from "maath";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { Suspense, useRef } from "react";
import Loader from "../components/Loader";

function ShipWithScroll(props) {
  const ref = useRef();
  const { scrollYProgress } = useScroll();
  const ySpring = useSpring(scrollYProgress, { damping: 30, stiffness: 100 });

  useFrame(() => {
    if (ref.current) {
      ref.current.position.y = 500 * ySpring.get();
    }
  });

  return (
    <group ref={ref}>
      <Ship {...props} />
    </group>
  );
}

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });

  return (
    <section
      className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space"
      id="Home"
    >
      <HeroText />
      <Background />
      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas shadows camera={{ position: [0, 0, 20], fov: 45 }}>
          <Suspense fallback={<Loader />}>
            <ambientLight intensity={0} />
            <directionalLight
              position={[5, 10, 5]}
              intensity={0.2}
              castShadow
            />
            <directionalLight position={[-5, -5, -5]} intensity={0.5} />
            <spotLight
              position={[15, 20, 5]}
              angle={0.3}
              penumbra={0.5}
              intensity={0.5}
              castShadow
            />
            <Environment preset="sunset" />
            <ShipWithScroll
              scale={isMobile && 2}
              position={isMobile && [0, 9, -50]}
              rotation={isMobile && [0, -1.75, 0]}
            />
          </Suspense>
        </Canvas>
      </figure>
    </section>
  );
};

export default Hero;
