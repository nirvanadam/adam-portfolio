import React from "react";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

function TechStack({ title, image }) {
  AOS.init({});

  return (
    <div
      data-aos-offset="800"
      data-aos="zoom-in"
      className="group relative flex h-[350px] w-full flex-col items-center justify-center gap-5 bg-[#2C2C2C] transition duration-500 2xl:h-[400px]"
    >
      <img
        src={image}
        alt=""
        className="w-20 grayscale transition duration-500 group-hover:grayscale-0 lg:w-16"
      />
      <h1 className="text-[8vw] font-semibold sm:text-[4vw] lg:text-[2vw] 2xl:text-[1.5vw]">
        {title}
      </h1>

      <span className="absolute left-0 top-0 h-1 w-0 bg-white opacity-0 transition-all duration-500 group-hover:w-1/4 group-hover:opacity-100"></span>
      <span className="absolute left-0 top-0 h-0 w-1 bg-white opacity-0 transition-all duration-500 group-hover:h-1/4 group-hover:opacity-100"></span>

      <span className="absolute bottom-0 right-0 h-1 w-0 bg-white opacity-0 transition-all duration-500 group-hover:w-1/4 group-hover:opacity-100"></span>
      <span className="absolute bottom-0 right-0 h-0 w-1 bg-white opacity-0 transition-all duration-500 group-hover:h-1/4 group-hover:opacity-100"></span>
    </div>
  );
}

export default TechStack;
