import { ArrowRight, ArrowUpRight, Github } from "lucide-react";
import React, { useState } from "react";

function ProjectCard({ title, institution, description, image, link, github }) {
  const [showProject, setShowProject] = useState(false);

  return (
    <div className="relative overflow-hidden text-textColor-primary">
      <div className="group relative overflow-hidden rounded-xl">
        <img
          src={image}
          alt=""
          className="rayscale transition duration-500 group-hover:scale-110 group-hover:grayscale-0"
        />
      </div>

      <div className="mt-3 flex flex-col lg:mt-5">
        <div className="flex items-center justify-between border-b border-stone-800 pb-3">
          <h1 className="text-[6vw] font-semibold transition-all lg:text-[5vw] xl:text-[3.5vw] 2xl:text-[2.5vw]">
            {title}
          </h1>
          <h1 className="text-[4vw] font-medium text-textColor-secondary transition-all lg:text-[2vw] xl:text-[1.5vw] 2xl:text-[1vw]">
            {institution}
          </h1>
        </div>
        <p className="mt-3 text-[5vw] font-medium text-textColor-secondary sm:text-[2.5vw] lg:text-[1.8vw] lg:leading-tight xl:text-[1.5vw] 2xl:text-[1vw]">
          {description}
        </p>
      </div>

      <button
        type="button"
        onClick={() => setShowProject(!showProject)}
        className="group relative z-[20] mt-5 flex items-center justify-between gap-3 bg-white px-3 py-2 text-black lg:mt-10"
      >
        <h1 className="font-medium transition-all duration-500">
          View Project
        </h1>

        <div
          className={`${showProject ? "rotate-180" : "rotate-0"} relative flex overflow-hidden transition-all duration-500`}
        >
          <ArrowRight className="size-5 transition-all duration-500 group-hover:translate-x-full" />
          <ArrowRight className="absolute size-5 -translate-x-full transition-all duration-500 group-hover:translate-x-0" />
        </div>
      </button>

      <div
        className={`${showProject ? "translate-x-[210%]" : "translate-x-0"} relative z-[10] flex w-fit -translate-y-[112%] gap-3 transition-all duration-300`}
      >
        <a
          href={github}
          target="_blank"
          className="group relative flex rounded-full bg-white p-2 transition duration-500"
        >
          <Github
            color="#000000"
            className="size-4 transition-all duration-500 group-hover:-translate-y-[150%]"
          />
          <Github
            color="#000000"
            className="absolute size-4 translate-y-[150%] transition-all duration-500 group-hover:translate-y-0"
          />
        </a>

        <a
          href={link}
          target="_blank"
          className="group relative flex rounded-full bg-white p-2 transition duration-500"
        >
          <ArrowUpRight
            color="#000000"
            className="size-4 transition-all duration-500 group-hover:-translate-y-[150%] group-hover:translate-x-[150%]"
          />
          <ArrowUpRight
            color="#000000"
            className="absolute size-4 -translate-x-[150%] translate-y-[150%] transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0"
          />
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
