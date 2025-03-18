import React, { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { Typewriter } from "react-simple-typewriter";

// Images
import profile from "../../assets/images/profile.png";

// Icons
import { ArrowDown } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { Download } from "lucide-react";
import indo from "../../assets/icons/indonesia.png";
import usa from "../../assets/icons/usa.png";

// Data
import { workExperiences } from "../../data/workExperiences";
import { orgExperiences } from "../../data/orgExperiences";
import { techStack } from "../../data/techStack";
import { projects } from "../../data/projects";

// Component
import WorkExperiences from "../../components/pages/experience/WorkExperiences";
import OrgExperiences from "../../components/pages/experience/OrgExperiences";
import Footer from "../../components/footer/Footer";
import TechStack from "../../components/pages/about/TechStack";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";
import ProjectCard from "../../components/pages/experience/ProjectCard";

// Amimate.css
import "animate.css";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

import Marquee from "react-fast-marquee";

function Home() {
  const { showResumeMenu, setShowMenu, toggleShowResumeMenu } =
    useContext(AppContext);

  AOS.init({
    offset: 180,
    duration: 700,
  });

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[92vh] bg-black px-6 pt-20 text-textColor-primary sm:flex sm:flex-col md:px-10 lg:h-[90vh] lg:justify-between lg:pt-0 xl:justify-end xl:gap-20 xl:px-20 2xl:px-28">
        <h1 className="animate__animated animate__fadeInUp border-t border-stone-800 text-[18vw] font-semibold uppercase leading-tight sm:order-3 sm:mt-20 sm:border-t sm:pt-1 lg:mt-0 lg:leading-none">
          Adam
          <span className="text-textColor-accent">.</span>
        </h1>

        <div className="flex flex-col sm:order-2 sm:gap-8 md:mt-16 md:grid md:grid-cols-3 md:gap-0 lg:mt-0 lg:grid-cols-[2fr_1fr_1fr] lg:items-center lg:gap-5">
          <h1 className="animate__animated animate__fadeInUp relative mt-10 hidden w-fit items-center gap-2 text-xl font-semibold uppercase md:mt-0 md:flex lg:gap-3 lg:place-self-center lg:text-5xl xl:text-6xl">
            <span className="text-xl font-medium lg:text-5xl xl:text-6xl">
              [
            </span>
            <Typewriter
              words={["Frontend Dev.", "IT Enthusiast"]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={150}
              deleteSpeed={50}
              delaySpeed={1500}
            />
            <span className="text-xl font-medium lg:text-5xl xl:text-6xl">
              ]
            </span>
          </h1>

          <div className="font- col-span-2 mt-14 flex flex-col gap-3 sm:w-[400px] md:mt-0 xl:w-[550px]">
            <h1 className="animate__animated animate__fadeInUp flex gap-1 text-lg font-medium text-textColor-secondary sm:text-2xl">
              <span className="text-lg text-textColor-secondary sm:text-2xl md:hidden">
                [
              </span>
              <Typewriter
                words={[
                  "Hello there!",
                  "Welcome to my portfolio",
                  "Discover my creations!",
                ]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={150}
                deleteSpeed={50}
                delaySpeed={1500}
              />
              <span className="text-lg text-textColor-secondary sm:text-2xl md:hidden">
                ]
              </span>
            </h1>
            <p className="animate__animated animate__fadeInUp text-xl font-medium leading-tight sm:text-2xl lg:text-3xl">
              I’m Nirvan Adam, a passionate Frontend Developer and IT
              enthusiast, dedicated to crafting seamless and innovative digital
              experiences.
            </p>
          </div>
        </div>

        <div className="animate__animated animate__fadeInUp mt-14 flex flex-col gap-5 border-t border-stone-800 pt-2 text-xs uppercase sm:order-1 sm:grid sm:grid-cols-3 md:gap-0 lg:grid-cols-[2fr_1fr_1fr] lg:text-sm">
          <h1 className="">Hi There!</h1>
          <h1>Available for work</h1>
          <h1>Let’s Create Together</h1>
        </div>

        <a
          href="#about"
          className="animate__animated animate__fadeInUp group absolute bottom-10 right-10 flex items-center justify-center overflow-hidden"
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
      {/* Hero Section End */}

      {/* About Section */}
      <section
        id="about"
        className="bg-black px-6 py-20 text-textColor-primary sm:py-40 md:px-10 xl:px-36 2xl:px-72"
      >
        <div
          data-aos="fade-up"
          className="mb-16 grid grid-cols-2 border-t border-stone-800 pt-2 text-xs uppercase"
        >
          <h1 className="font-medium text-textColor-secondary">
            Get to Know Me
          </h1>
          <h1 className="font-medium text-textColor-secondary">About</h1>
        </div>

        <article className="mt-20 lg:mt-40">
          <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[1fr_1fr_3fr]">
            <h1
              data-aos="fade-up"
              className="text-sm font-medium uppercase text-textColor-secondary lg:place-self-center"
            >
              Who I Am
            </h1>

            <img
              data-aos="fade-up"
              src={profile}
              alt=""
              className="w-full bg-white grayscale sm:w-1/4 lg:w-full"
            />

            <h1
              data-aos="fade-up"
              className="w-[200px] text-2xl font-semibold uppercase leading-none sm:w-[400px] sm:text-5xl md:w-auto md:text-6xl xl:text-[5vw]"
            >
              I'm a Frontend Developer and IT Enthusiast
            </h1>
          </div>

          <div className="mt-10 lg:mt-40 lg:grid lg:grid-cols-[2fr_4fr_2fr] xl:gap-10">
            <div className="flex flex-col">
              <p
                data-aos="fade-up"
                className="text-lg font-medium sm:w-[70%] sm:text-2xl lg:text-lg lg:leading-tight"
              >
                Partnering with passionate professionals to turn visions into
                reality.
              </p>
            </div>

            <div className="mt-20 flex flex-col gap-16 lg:mt-0">
              <div
                data-aos="fade-up"
                className="flex flex-col gap-3 sm:flex-row sm:gap-28 lg:gap-12 xl:gap-20"
              >
                <h1 className="text-sm font-medium">01</h1>

                <div className="flex flex-col gap-3">
                  <h1 className="text-2xl font-semibold uppercase">
                    Problem Solving
                  </h1>
                  <p className="font-medium text-textColor-secondary sm:text-lg md:leading-tight lg:w-3/4">
                    Skilled at analyzing technical challenges and providing
                    creative solutions to deliver optimal user experiences.
                  </p>
                </div>
              </div>

              <div
                data-aos="fade-up"
                className="flex flex-col gap-3 sm:flex-row sm:gap-28 lg:gap-12 xl:gap-20"
              >
                <h1 className="text-sm font-medium">02</h1>

                <div className="flex flex-col gap-3">
                  <h1 className="text-2xl font-semibold uppercase">
                    Adaptability
                  </h1>
                  <p className="font-medium text-textColor-secondary sm:text-lg md:leading-tight lg:w-3/4">
                    Quick to adapt to new technologies and industry trends,
                    continuously improving the quality of web development.
                  </p>
                </div>
              </div>

              <div
                data-aos="fade-up"
                className="flex flex-col gap-3 sm:flex-row sm:gap-28 lg:gap-12 xl:gap-20"
              >
                <h1 className="text-sm font-medium">03</h1>

                <div className="flex flex-col gap-3">
                  <h1 className="text-2xl font-semibold uppercase">
                    Collaboration
                  </h1>
                  <p className="font-medium text-textColor-secondary sm:text-lg md:leading-tight lg:w-3/4">
                    Proficient in working with cross-functional teams to
                    integrate ideas, solve problems, and achieve shared goals
                    efficiently.
                  </p>
                </div>
              </div>

              <div
                data-aos="fade-up"
                className="flex flex-col gap-3 sm:flex-row sm:gap-28 lg:gap-12 xl:gap-20"
              >
                <h1 className="text-sm font-medium">04</h1>

                <div className="flex flex-col gap-3">
                  <h1 className="text-2xl font-semibold uppercase">
                    Attention to Detail
                  </h1>
                  <p className="font-medium text-textColor-secondary sm:text-lg md:leading-tight lg:w-3/4">
                    Ensures every interface element is precisely crafted to
                    create consistent, intuitive, and high-quality applications.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 flex flex-col items-center gap-3 md:items-start lg:mt-0 lg:gap-5">
              <a
                data-aos="fade-up"
                href="/about"
                className="group relative flex w-fit items-center gap-3 bg-background-secondary px-4 py-3 text-textColor-primary"
              >
                <h1 className="font-medium transition-all duration-500">
                  More About Me
                </h1>

                <div className="relative flex overflow-hidden">
                  <ArrowUpRight className="transition-all duration-500 group-hover:-translate-y-full group-hover:translate-x-full" />
                  <ArrowUpRight className="absolute -translate-x-full translate-y-full transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0" />
                </div>
              </a>

              <div
                data-aos="fade-up"
                className="flex h-[150%] flex-col overflow-hidden"
              >
                <button
                  type="button"
                  onClick={toggleShowResumeMenu}
                  className="group relative z-20 flex w-fit items-center gap-3 bg-white px-4 py-3 font-medium text-black"
                >
                  <h1 className="font-medium transition-all duration-500">
                    Download Resume
                  </h1>

                  <div
                    className={`${showResumeMenu ? "rotate-180" : "rotate-0"} relative flex overflow-hidden transition-all duration-500`}
                  >
                    <ChevronDown className="absolute -translate-y-[150%] transition-all duration-500 group-hover:translate-y-0" />
                    <ChevronDown className="transition-all duration-500 group-hover:translate-y-[150%]" />
                  </div>
                </button>

                <div
                  className={`${showResumeMenu ? "translate-y-0" : "-translate-y-[140%]"} relative z-10 mt-3 flex flex-col gap-3 bg-white px-5 py-6 transition-all duration-700`}
                >
                  <button
                    type="button"
                    onClick={() => {
                      window.open(
                        "/files/Nirvan Adam_Professional CV_EN.pdf",
                        "_blank",
                      );
                    }}
                    className="group flex items-center justify-between font-medium uppercase text-black"
                  >
                    <img src={usa} alt="" className="size-5" />
                    <div className="relative flex overflow-hidden">
                      <h1 className="font-medium uppercase transition-all duration-500 group-hover:-translate-y-full">
                        EN Version
                      </h1>
                      <h1 className="absolute translate-y-full font-medium uppercase transition-all duration-500 group-hover:translate-y-0">
                        EN Version
                      </h1>
                    </div>
                    <Download color="#000000" />
                  </button>

                  <span className="my-1 h-[1px] w-full bg-stone-800" />

                  <button
                    type="button"
                    onClick={() => {
                      window.open(
                        "/files/Nirvan Adam_Professional CV.pdf",
                        "_blank",
                      );
                    }}
                    className="group flex items-center justify-between font-medium uppercase text-black"
                  >
                    <img src={indo} alt="" className="size-5" />
                    <div className="relative flex overflow-hidden">
                      <h1 className="font-medium uppercase transition-all duration-500 group-hover:-translate-y-full">
                        ID Version
                      </h1>
                      <h1 className="absolute translate-y-full font-medium uppercase transition-all duration-500 group-hover:translate-y-0">
                        ID Version
                      </h1>
                    </div>
                    <Download color="#000000" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
      {/* About Section End */}

      {/* Experience Section */}
      <section
        id="about"
        className="bg-black px-6 py-20 text-textColor-primary sm:py-40 md:px-10 xl:px-36 2xl:px-72"
      >
        <div
          data-aos="fade-right"
          className="mb-16 grid grid-cols-2 border-t border-stone-800 pt-2 text-xs uppercase"
        >
          <h1 className="font-medium text-textColor-secondary">Journey</h1>
          <h1 className="font-medium text-textColor-secondary">Experience</h1>
        </div>

        <article className="mt-20 gap-12 md:grid md:grid-cols-[1fr_2fr] lg:mt-40 lg:gap-24 2xl:grid-cols-2">
          <div className="flex flex-col gap-10">
            <h1
              data-aos="fade-up"
              className="md:textxl w-[200px] text-4xl font-semibold uppercase md:w-auto md:text-5xl lg:text-6xl 2xl:text-8xl"
            >
              Work Experience
            </h1>
            <p
              data-aos="fade-up"
              className="text-lg font-medium text-textColor-secondary sm:text-xl 2xl:w-[500px]"
            >
              I've been fortunate to work with a lot of awesome people on even
              more awesome projects
            </p>
          </div>

          <div
            data-aos="fade-up"
            className="mt-10 flex h-fit flex-col gap-16 border-l-2 border-stone-800 pl-5 md:mt-0 xl:pl-10"
          >
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
            <h1
              data-aos="fade-up"
              className="md:textxl w-[200px] hyphens-auto text-4xl font-semibold uppercase md:w-auto md:text-5xl lg:text-6xl 2xl:text-8xl"
            >
              Organiza&shy;tional Experience
            </h1>
            <p
              data-aos="fade-up"
              className="text-xl font-medium text-textColor-secondary sm:text-xl 2xl:w-[500px]"
            >
              Driving results and building connections through collaborative
              experiences in amazing organizations
            </p>
          </div>

          <div
            data-aos="fade-up"
            className="mt-10 flex h-fit flex-col gap-16 border-l-2 border-stone-800 pl-5 md:order-1 md:mt-0 xl:pl-10"
          >
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
        <div
          data-aos="fade-right"
          className="mb-16 grid grid-cols-2 border-t border-stone-800 pt-2 text-xs uppercase"
        >
          <h1 className="font-medium text-textColor-secondary">
            Projects Overview
          </h1>

          <h1 className="font-medium text-textColor-secondary">Work</h1>
        </div>

        <article className="mt-20 md:mt-40">
          <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[1fr_2fr] lg:flex-row lg:items-center lg:justify-between lg:gap-0">
            <h1
              data-aos="fade-up"
              className="text-4xl font-semibold uppercase sm:text-6xl md:w-[200px] md:text-7xl lg:order-2 lg:text-[9vw] 2xl:text-[8vw]"
            >
              Recent Projects
            </h1>

            <h1
              data-aos="fade-up"
              className="text-xl font-medium text-textColor-secondary lg:order-1 lg:w-[200px] 2xl:w-[250px]"
            >
              A showcase of my latest projects and collaborations that I’m proud
              of
            </h1>
          </div>

          <div className="mt-20 flex flex-col items-center gap-14 md:gap-24 lg:mt-40 lg:gap-28 xl:grid xl:grid-cols-2 xl:gap-20">
            {projects.map((project, index) => (
              <div key={index}>
                <ProjectCard
                  key={index}
                  title={project.title}
                  institution={project.institution}
                  description={project.description}
                  image={project.image}
                  link={project.link}
                  github={project.github}
                />
              </div>
            ))}
          </div>
        </article>
      </section>
      {/* Recent Project Section End */}

      {/* Skill Section */}
      <section className="bg-black px-6 py-20 text-textColor-primary sm:py-40 md:px-10 xl:px-36 2xl:px-72">
        <div
          data-aos="fade-right"
          className="mb-16 grid grid-cols-2 border-t border-stone-800 pt-2 text-xs uppercase"
        >
          <h1 className="font-medium text-textColor-secondary">Expertise </h1>

          <h1 className="font-medium text-textColor-secondary">
            Technical Skill
          </h1>
        </div>

        <article className="mt-20 md:mt-40">
          <h1
            data-aos="fade-up"
            className="place-self-center text-center text-4xl font-semibold uppercase sm:text-6xl md:text-7xl lg:text-[9vw] 2xl:w-[900px] 2xl:text-[8vw]"
          >
            Areas of Expertise
          </h1>

          <div className="mt-10 flex w-full flex-col gap-2 place-self-center uppercase sm:grid sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
            {techStack.map((tech, index) => (
              <TechStack key={index} title={tech.title} image={tech.image} />
            ))}
          </div>
        </article>
      </section>
      {/* Skill Section End */}

      {/* <Marquee className="h-[300px] bg-black">
        <div className="flex gap-5">
          {techStack.map((tech, index) => (
            <TechStack key={index} title={tech.title} image={tech.image} />
          ))}
        </div>
      </Marquee> */}

      {/* Footer */}
      <Footer />
      {/* Footer End */}
    </div>
  );
}

export default Home;
