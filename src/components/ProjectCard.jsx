"use client";
import { useState } from "react";
import { CardBody, CardContainer, CardItem } from "./3d-card";

export function ProjectCard({ title, description, img, link, details }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <CardContainer className="relative">
      <CardBody
        className={`bg-gray-50 relative group/card  
          dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] 
          bg-gradient-to-b from-indigo to-storm dark:border-white/[0.2] border-black/[0.1] 
          w-full rounded-xl p-9 border
          transition-all duration-300 ease-in-out
          ${expanded ? "h-auto" : "h-auto"}`}
      >
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>

        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>

        {!expanded && (
          <CardItem translateZ="100" className="w-full mt-4">
            <img
              src={img}
              height="1000"
              width="1000"
              className="max-h-96 w-auto object-contain rounded-xl mx-auto group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
        )}

        {expanded && (
          <div className="mt-6 text-neutral-700 dark:text-neutral-200 text-base leading-relaxed">
            <ul className="list-disc list-inside space-y-3">
              {details.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex justify-between items-center mt-10">
          <CardItem
            translateZ={20}
            as="a"
            href={link}
            target="_blank"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Github
          </CardItem>

          <CardItem
            translateZ={20}
            as="button"
            onClick={() => setExpanded(!expanded)}
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            {expanded ? "Show Less" : "Read More"}
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
