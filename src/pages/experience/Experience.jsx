import React from "react";
import Navbar from "../../components/navbar/Navbar";

// Images
import sampelpic from "../../assets/images/samplepic.jpg";

// Icons
import { ArrowDown, ArrowUpRight } from "lucide-react";

// Data
import { workExperiences } from "../../data/workExperiences";
import { orgExperiences } from "../../data/orgExperiences";

// Component
import WorkExperiences from "../../components/pages/experience/WorkExperiences";
import OrgExperiences from "../../components/pages/experience/OrgExperiences";
import Footer from "../../components/footer/Footer";

function Experience() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[92vh] bg-black px-6 py-20 text-textColor-primary md:px-10 lg:h-[90vh] xl:px-20 2xl:px-28">
        <div className="flex flex-col gap-3 place-self-end border-t border-stone-800 py-10 sm:grid sm:grid-cols-[1fr_2fr] lg:w-1/2 2xl:w-[40%]">
          <h1 className="text-[6vw] font-semibold uppercase sm:text-[3vw] lg:text-[2vw] xl:text-[1.5vw] 2xl:text-[1vw]">
            Experience
          </h1>
          <p className="text-[6.5vw] font-medium text-textColor-secondary sm:text-[3vw] lg:text-[2vw] xl:text-[1.5vw] 2xl:text-[1vw]">
            Explore the milestones that have shaped my career and skills.
          </p>
        </div>

        <h1 className="mt-10 self-end text-[11vw] font-medium leading-none lg:absolute lg:bottom-10 lg:w-3/4 lg:text-[9vw]">
          Experiences that build expertise.
        </h1>

        <a
          href="#experience"
          className="group absolute bottom-10 right-10 flex items-center justify-center overflow-hidden"
        >
          <span className="text-5xl font-medium">[</span>
          <ArrowDown
            size={50}
            className="absolute -translate-y-full transition-all duration-500 group-hover:translate-y-0"
          />
          <ArrowDown
            size={50}
            className="transition-all duration-500 group-hover:translate-y-full"
          />
          <span className="text-5xl font-medium">]</span>
        </a>
      </section>
      {/* Hero Section End*/}

      {/* Experience Section */}
      <section
        id="experience"
        className="bg-black px-6 py-20 text-textColor-primary sm:py-40 md:px-10 xl:px-36 2xl:px-72"
      >
        <div className="mb-16 grid grid-cols-2 border-t border-stone-800 pt-2 text-xs uppercase">
          <h1 className="font-medium text-textColor-secondary">Journey</h1>
          <h1 className="font-medium text-textColor-secondary">Experience</h1>
        </div>

        <article className="mt-20 gap-12 md:grid md:grid-cols-[1fr_2fr] lg:mt-40 lg:gap-24 2xl:grid-cols-2">
          <div className="flex flex-col gap-10">
            <h1 className="md:textxl w-[200px] text-4xl font-semibold uppercase md:w-auto md:text-5xl lg:text-6xl 2xl:text-8xl">
              Work Experience
            </h1>
            <p className="text-xl font-medium text-textColor-secondary sm:text-2xl 2xl:w-[500px]">
              I've been fortunate to work with a lot of awesome people on even
              more awesome projects
            </p>
          </div>

          <div className="mt-10 flex h-fit flex-col gap-16 border-l-2 border-stone-800 pl-5 md:mt-0 xl:pl-10">
            {workExperiences.map((workExperience, index) => (
              <WorkExperiences
                key={index}
                workplace={workExperience.workplace}
                position={workExperience.position}
                year={workExperience.year}
              />
            ))}
          </div>
        </article>

        <article className="mt-20 gap-12 md:mt-32 md:grid md:grid-cols-[2fr_1fr] lg:mt-40 lg:gap-24 xl:mt-52 2xl:mt-72 2xl:grid-cols-2">
          <div className="flex flex-col gap-10 md:order-2">
            <h1 className="md:textxl w-[200px] hyphens-auto text-4xl font-semibold uppercase md:w-auto md:text-5xl lg:text-6xl 2xl:text-8xl">
              Organiza&shy;tional Experience
            </h1>
            <p className="text-xl font-medium text-textColor-secondary sm:text-2xl 2xl:w-[500px]">
              Driving results and building connections through collaborative
              experiences in amazing organizations
            </p>
          </div>

          <div className="mt-10 flex h-fit flex-col gap-16 border-l-2 border-stone-800 pl-5 md:order-1 md:mt-0 xl:pl-10">
            {orgExperiences.map((orgExperience, index) => (
              <OrgExperiences
                key={index}
                organization={orgExperience.organization}
                position={orgExperience.position}
                year={orgExperience.year}
              />
            ))}
          </div>
        </article>
      </section>
      {/* Experience Section End */}

      {/* Recent Project Section */}
      <section className="bg-black px-6 py-20 text-textColor-primary sm:py-40 md:px-10 xl:px-36 2xl:px-72">
        <div className="mb-16 grid grid-cols-2 border-t border-stone-800 pt-2 text-xs uppercase">
          <h1 className="font-medium text-textColor-secondary">
            Projects Overview
          </h1>
          <h1 className="font-medium text-textColor-secondary">Work</h1>
        </div>

        <article className="mt-20 lg:mt-40">
          <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[1fr_2fr] lg:items-center lg:gap-10">
            <h1 className="text-4xl font-semibold uppercase sm:text-6xl md:w-[200px] md:text-7xl lg:order-2 lg:text-[9vw] 2xl:text-[8vw]">
              Recent Projects
            </h1>
            <h1 className="text-xl font-medium text-textColor-secondary sm:text-2xl lg:order-1 2xl:w-[500px]">
              A showcase of my latest projects and collaborations that I’m proud
              of
            </h1>
          </div>

          <div className="mt-20 flex flex-col items-center gap-14 md:gap-24 lg:mt-40 lg:gap-28">
            <a href="#" className="group relative overflow-hidden lg:w-3/4">
              <img
                src={sampelpic}
                alt=""
                className="grayscale transition duration-500 group-hover:scale-125"
              />
              <h1 className="absolute left-3 top-3 z-10 text-[2vw] font-bold uppercase text-black transition lg:left-10 lg:top-7 lg:text-[1.5vw] lg:opacity-0 lg:group-hover:opacity-100">
                QuickTix
              </h1>

              <h1 className="lg: absolute right-3 top-3 z-10 text-[2vw] font-bold uppercase text-black transition lg:right-10 lg:top-7 lg:text-[1.5vw] lg:opacity-0 lg:group-hover:opacity-100">
                Binar Academy • 2023
              </h1>

              <div className="absolute bottom-5 right-5 z-10 rounded-full bg-white p-5 shadow-2xl transition duration-500 lg:bottom-1/2 lg:right-1/2 lg:translate-x-1/2 lg:opacity-0 lg:group-hover:opacity-100">
                <ArrowUpRight color="#000000" />
              </div>
              <div className="absolute left-0 top-0 h-full w-full bg-black opacity-0 transition duration-500 lg:group-hover:opacity-30"></div>
            </a>

            <a href="#" className="group relative overflow-hidden lg:w-3/4">
              <img
                src={sampelpic}
                alt=""
                className="grayscale transition duration-500 group-hover:scale-125"
              />
              <h1 className="absolute left-3 top-3 z-10 text-[2vw] font-bold uppercase text-black transition lg:left-10 lg:top-7 lg:text-[1.5vw] lg:opacity-0 lg:group-hover:opacity-100">
                QuickTix
              </h1>

              <h1 className="lg: absolute right-3 top-3 z-10 text-[2vw] font-bold uppercase text-black transition lg:right-10 lg:top-7 lg:text-[1.5vw] lg:opacity-0 lg:group-hover:opacity-100">
                Binar Academy • 2023
              </h1>

              <div className="absolute bottom-5 right-5 z-10 rounded-full bg-white p-5 shadow-2xl transition duration-500 lg:bottom-1/2 lg:right-1/2 lg:translate-x-1/2 lg:opacity-0 lg:group-hover:opacity-100">
                <ArrowUpRight color="#000000" />
              </div>
              <div className="absolute left-0 top-0 h-full w-full bg-black opacity-0 transition duration-500 lg:group-hover:opacity-30"></div>
            </a>
          </div>
        </article>
      </section>
      {/* Recent Project Section End */}

      <Footer />
    </div>
  );
}

export default Experience;
