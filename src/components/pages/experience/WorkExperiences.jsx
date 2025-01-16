import React from "react";

function WorkExperiences({ workplace, position, year }) {
  return (
    <button
      type="button"
      className="group relative flex flex-col gap-2 border-b border-gray-600 pb-5"
    >
      <div className="flex flex-col gap-1 transition duration-300 ease-in group-hover:translate-x-7">
        <h2 className="font w-fit text-sm font-medium uppercase text-textColor-secondary xl:text-base">
          {workplace}
        </h2>
        <h1 className="text-left text-xl font-medium xl:text-3xl">
          {position}
        </h1>
      </div>
      <h1 className="transition duration-300 ease-in group-hover:translate-x-7">
        {year}
      </h1>

      <span className="absolute -left-[29px] top-0 size-4 rounded-full border-2 border-white bg-white transition-all duration-500 group-hover:scale-150 group-hover:bg-background-accent xl:-left-[49px]" />
      <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-white transition-all duration-300 ease-in group-hover:w-full" />
    </button>
  );
}

export default WorkExperiences;
