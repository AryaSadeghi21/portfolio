import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    "cplusplus",
    "css3",
    "git",
    "github",
    "html5",
    "javascript",
    "python",
    "react",
    "Rlogo",
    "sql",
    "tailwindcss",
    "threejs",
  ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={30}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);
