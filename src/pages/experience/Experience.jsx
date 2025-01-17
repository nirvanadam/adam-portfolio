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
import { Fade } from "react-reveal";
import { projects } from "../../data/projects";
import ProjectCard from "../../components/pages/experience/ProjectCard";

function Experience() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[92vh] bg-black px-6 py-20 text-textColor-primary md:px-10 lg:h-[90vh] xl:px-20 2xl:px-28">
        <div className="flex flex-col gap-3 place-self-end border-t border-stone-800 py-10 sm:grid sm:grid-cols-[1fr_2fr] lg:w-1/2 2xl:w-[40%]">
          <Fade bottom>
            <h1 className="text-[6vw] font-semibold uppercase sm:text-[3vw] lg:text-[2vw] xl:text-[1.5vw] 2xl:text-[1vw]">
              Experience
            </h1>
          </Fade>

          <Fade bottom>
            <p className="text-[5vw] font-medium text-textColor-secondary sm:text-[3vw] lg:text-[2vw] xl:text-[1.5vw] 2xl:text-[1vw]">
              Explore the milestones that have shaped my career and skills.
            </p>
          </Fade>
        </div>

        <Fade bottom>
          <h1 className="mt-10 self-end text-[11vw] font-medium leading-none lg:absolute lg:bottom-10 lg:w-3/4 lg:text-[9vw]">
            Experiences that build expertise.
          </h1>
        </Fade>

        <Fade bottom>
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
        </Fade>
      </section>
      {/* Hero Section End*/}

      {/* Experience Section */}
      <section
        id="experience"
        className="bg-black px-6 py-20 text-textColor-primary sm:py-40 md:px-10 xl:px-36 2xl:px-72"
      >
        <Fade bottom>
          <div className="mb-16 grid grid-cols-2 border-t border-stone-800 pt-2 text-xs uppercase">
            <h1 className="font-medium text-textColor-secondary">Journey</h1>
            <h1 className="font-medium text-textColor-secondary">Experience</h1>
          </div>
        </Fade>

        <article className="mt-20 gap-12 md:grid md:grid-cols-[1fr_2fr] lg:mt-40 lg:gap-24 2xl:grid-cols-2">
          <Fade bottom>
            <div className="flex flex-col gap-10">
              <h1 className="md:textxl w-[200px] text-4xl font-semibold uppercase md:w-auto md:text-5xl lg:text-6xl 2xl:text-8xl">
                Work Experience
              </h1>

              <p className="text-xl font-medium text-textColor-secondary sm:text-2xl 2xl:w-[500px]">
                I've been fortunate to work with a lot of awesome people on even
                more awesome projects
              </p>
            </div>
          </Fade>

          <div className="mt-10 flex h-fit flex-col gap-16 border-l-2 border-stone-800 pl-5 md:mt-0 xl:pl-10">
            {workExperiences.map((workExperience, index) => (
              <Fade bottom>
                <WorkExperiences
                  key={index}
                  workplace={workExperience.workplace}
                  position={workExperience.position}
                  year={workExperience.year}
                />
              </Fade>
            ))}
          </div>
        </article>

        <article className="mt-20 gap-12 md:mt-32 md:grid md:grid-cols-[2fr_1fr] lg:mt-40 lg:gap-24 xl:mt-52 2xl:mt-72 2xl:grid-cols-2">
          <Fade bottom>
            <div className="flex flex-col gap-10 md:order-2">
              <h1 className="md:textxl w-[200px] hyphens-auto text-4xl font-semibold uppercase md:w-auto md:text-5xl lg:text-6xl 2xl:text-8xl">
                Organiza&shy;tional Experience
              </h1>
              <p className="text-xl font-medium text-textColor-secondary sm:text-2xl 2xl:w-[500px]">
                Driving results and building connections through collaborative
                experiences in amazing organizations
              </p>
            </div>
          </Fade>

          <div className="mt-10 flex h-fit flex-col gap-16 border-l-2 border-stone-800 pl-5 md:order-1 md:mt-0 xl:pl-10">
            {orgExperiences.map((orgExperience, index) => (
              <Fade bottom>
                <OrgExperiences
                  key={index}
                  organization={orgExperience.organization}
                  position={orgExperience.position}
                  year={orgExperience.year}
                />
              </Fade>
            ))}
          </div>
        </article>
      </section>
      {/* Experience Section End */}

      {/* Recent Project Section */}
      <section className="bg-black px-6 py-20 text-textColor-primary sm:py-40 md:px-10 xl:px-36 2xl:px-72">
        <Fade bottom>
          <div className="mb-16 grid grid-cols-2 border-t border-stone-800 pt-2 text-xs uppercase">
            <h1 className="font-medium text-textColor-secondary">
              Projects Overview
            </h1>
            <h1 className="font-medium text-textColor-secondary">Work</h1>
          </div>
        </Fade>

        <article className="mt-20 lg:mt-40">
          <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[1fr_2fr] lg:items-center lg:gap-10">
            <Fade bottom>
              <h1 className="text-4xl font-semibold uppercase sm:text-6xl md:w-[200px] md:text-7xl lg:order-2 lg:text-[9vw] 2xl:text-[8vw]">
                Recent Projects
              </h1>
            </Fade>
            <Fade bottom>
              <h1 className="text-xl font-medium text-textColor-secondary sm:text-2xl lg:order-1 2xl:w-[500px]">
                A showcase of my latest projects and collaborations that I’m
                proud of
              </h1>
            </Fade>
          </div>

          <div className="mt-20 flex flex-col items-center gap-14 md:gap-24 lg:mt-40 lg:gap-28 xl:grid xl:grid-cols-2 xl:gap-20">
            {projects.map((project, index) => (
              <Fade bottom key={index}>
                <ProjectCard
                  key={index}
                  title={project.title}
                  institution={project.institution}
                  description={project.description}
                  image={project.image}
                  link={project.link}
                  github={project.github}
                />
              </Fade>
            ))}
          </div>
        </article>
      </section>
      {/* Recent Project Section End */}

      <Footer />
    </div>
  );
}

export default Experience;
