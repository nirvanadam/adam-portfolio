import React from "react";

// Icons
import { Instagram } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black px-6 py-10 text-textColor-primary md:px-10 xl:px-20 2xl:px-28">
      <div className="flex flex-col items-center gap-10 border-t border-stone-800 py-20">
        <div className="flex flex-col items-center gap-1">
          <h1 className="text-[9vw] font-semibold uppercase lg:leading-tight">
            Adam<span className="text-textColor-accent">.</span>
          </h1>
          <h2 className="font-medium uppercase text-textColor-secondary md:text-lg lg:text-xl xl:text-2xl">
            Turning ideas into digital reality
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-5 uppercase">
          <a href="" className="font-medium">
            Home
          </a>
          <a href="" className="font-medium">
            About
          </a>
          <a href="" className="font-medium">
            Experience
          </a>
          <a href="" className="font-medium">
            Contact
          </a>
        </div>

        <div className="flex w-full justify-center gap-10">
          <a
            href="https://www.linkedin.com/in/nirvanadam/"
            target="_blank"
            className="group relative flex flex-col items-center overflow-hidden rounded-full border border-stone-800 p-3 transition-all duration-300 hover:border-white"
          >
            <Linkedin
              size={20}
              className="transition-all duration-300 group-hover:-translate-y-[200%]"
            />
            <Linkedin
              size={20}
              className="absolute translate-y-[200%] transition-all duration-300 group-hover:translate-y-0"
            />
          </a>
          <a
            href="https://www.instagram.com/nirvanadm/"
            target="_blank"
            className="group relative flex flex-col items-center overflow-hidden rounded-full border border-stone-800 p-3 transition-all duration-300 hover:border-white"
          >
            <Instagram
              size={20}
              className="transition-all duration-300 group-hover:-translate-y-[200%]"
            />
            <Instagram
              size={20}
              className="absolute translate-y-[200%] transition-all duration-300 group-hover:translate-y-0"
            />
          </a>
          <a
            href="https://github.com/nirvanadam"
            target="_blank"
            className="group relative flex flex-col items-center overflow-hidden rounded-full border border-stone-800 p-3 transition-all duration-300 hover:border-white"
          >
            <Github
              size={20}
              className="transition-all duration-300 group-hover:-translate-y-[200%]"
            />
            <Github
              size={20}
              className="absolute translate-y-[200%] transition-all duration-300 group-hover:translate-y-0"
            />
          </a>
        </div>

        <div className="mt-10 flex flex-col items-center uppercase md:mt-20">
          <h2 className="font-medium text-textColor-secondary md:text-lg lg:text-xl xl:text-2xl">
            Interested in working with me?
          </h2>
          <h1 className="text-[15vw] font-semibold xl:leading-tight">
            Let's Talk
          </h1>

          <Link
            to="/contact"
            className="group relative mt-10 flex scale-90 items-start justify-between gap-5 px-7 py-5 uppercase md:mt-5 md:scale-100"
          >
            <div className="relative flex overflow-hidden text-sm sm:text-base">
              <h1 className="font-medium transition-all duration-500 group-hover:-translate-y-full">
                Get In Touch
              </h1>
              <h1 className="absolute translate-y-full font-medium transition-all duration-500 group-hover:translate-y-0">
                Get In Touch
              </h1>
            </div>

            <div className="relative flex overflow-hidden">
              <ArrowUpRight className="transition-all duration-500 group-hover:-translate-y-full group-hover:translate-x-full" />
              <ArrowUpRight className="absolute -translate-x-full translate-y-full transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0" />
            </div>

            <span className="absolute left-0 top-0 h-1 w-1/4 bg-white transition-all duration-500"></span>
            <span className="absolute left-0 top-0 h-1/4 w-1 bg-white transition-all duration-500"></span>

            <span className="absolute bottom-0 right-0 h-1 w-1/4 bg-white transition-all duration-500"></span>
            <span className="absolute bottom-0 right-0 h-1/4 w-1 bg-white transition-all duration-500"></span>
          </Link>
        </div>

        <a
          href="#"
          className="group relative mt-10 flex flex-col items-center self-end overflow-hidden"
        >
          <div className="flex items-center">
            <h1 className="text-6xl font-medium">[</h1>
            <ArrowUp
              size={65}
              className="transition-all duration-500 group-hover:-translate-y-full"
            />
            <h1 className="text-6xl font-medium">]</h1>
          </div>
          <ArrowUp
            size={65}
            className="absolute translate-y-full transition-all duration-500 group-hover:-translate-y-0"
          />
        </a>
      </div>

      <div className="flex flex-col items-center gap-3 border-t border-stone-800 py-16 uppercase lg:flex-row lg:justify-between lg:py-10">
        <h1 className="font-medium text-textColor-secondary">
          © 2025 Copyright -{" "}
          <span className="text-textColor-primary">Adam.</span>
        </h1>
        <h1 className="font-medium text-textColor-secondary">
          Developed by{" "}
          <span className="text-textColor-primary">Nirvan Adam</span>
        </h1>
      </div>
    </footer>
  );
}

export default Footer;
