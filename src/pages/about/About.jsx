import React, { useEffect, useContext } from "react";
import { AppContext } from "../../context/AppContext";

// Icons
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Download,
  DownloadIcon,
  Eye,
  FileText,
  FileUser,
} from "lucide-react";
import indonesia from "../../assets/icons/indonesia.png";
import usa from "../../assets/icons/usa.png";

// Images
import profile from "../../assets/images/profile.png";
import cv_en from "../../assets/images/cv_en.jpg";
import cv_id from "../../assets/images/cv_id.jpg";

// Data
import { certificates } from "../../data/certificates";
import { techStack } from "../../data/techStack";

// Component
import Navbar from "../../components/navbar/Navbar";
import TechStack from "../../components/pages/about/TechStack";
import Footer from "../../components/footer/Footer";
import CertificateCard from "../../components/pages/about/CertificateCard";

function About() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[92vh] bg-black px-6 py-20 text-textColor-primary md:px-10 lg:h-[90vh] xl:px-20 2xl:px-28">
        <div className="flex flex-col gap-3 place-self-end border-t border-stone-800 py-10 sm:grid sm:grid-cols-[1fr_2fr] lg:w-1/2 2xl:w-[40%]">
          <h1 className="text-[6vw] font-semibold uppercase sm:text-[3vw] lg:text-[2vw] xl:text-[1.5vw] 2xl:text-[1vw]">
            About
          </h1>
          <p className="text-[6.5vw] font-medium text-textColor-secondary sm:text-[3vw] lg:text-[2vw] xl:text-[1.5vw] 2xl:text-[1vw]">
            Discover my journey, skills, and the values that drive my work.
          </p>
        </div>

        <h1 className="mt-10 self-end text-[11vw] font-medium leading-none lg:absolute lg:bottom-10 lg:w-3/4 lg:text-[10vw]">
          The journey that shapes passion.
        </h1>

        <a
          href="#intro"
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

      {/* Profile Section */}

      {/* Profile Section End */}

      {/* Intro Section */}
      <section
        id="intro"
        className="bg-black px-6 py-20 text-textColor-primary sm:py-60 md:px-10 xl:px-20 2xl:px-72"
      >
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[1fr_1fr_3fr]">
          <h1 className="text-sm font-medium uppercase text-textColor-secondary lg:place-self-center">
            Who I Am
          </h1>
          <img
            src={profile}
            alt=""
            className="w-full bg-white grayscale sm:w-1/4 lg:w-full"
          />
          <h1 className="text-[8vw] font-semibold uppercase leading-none sm:w-[400px] sm:text-5xl md:w-auto md:text-6xl xl:text-[5vw]">
            I'm a Frontend Developer and IT Enthusiast
          </h1>
        </div>

        <div className="mt-20 flex flex-col gap-14 lg:mt-40 lg:grid lg:grid-cols-[0.5fr_2fr]">
          <h1 className="text-lg font-medium text-textColor-secondary sm:text-xl">
            In short
          </h1>

          <p className="text-[7vw] font-medium leading-tight sm:text-[5vw] md:text-[5vw] xl:text-[4vw] 2xl:text-[3vw]">
            A frontend developer with a love for clean design and efficient
            solutions. I enjoy turning complex challenges into user-friendly
            digital experiences.
          </p>
        </div>
      </section>
      {/* Intro Section End */}

      {/* Education Section */}
      <section className="bg-black px-6 py-20 text-textColor-primary sm:py-40 md:px-10 xl:px-36 2xl:px-72">
        <div className="grid grid-cols-2 border-t border-stone-800 pt-2 text-xs uppercase">
          <h1 className="font-medium text-textColor-secondary">01</h1>
          <h1 className="font-medium text-textColor-secondary">Education</h1>
        </div>

        <div className="mt-20 flex flex-col gap-5 lg:mt-40 lg:grid lg:grid-cols-[1fr_2fr] lg:items-end">
          <h1 className="text-[12vw] font-medium uppercase lg:order-2 lg:leading-none 2xl:text-[10vw]">
            Education
          </h1>
          <h2 className="w-[150px] text-[4vw] font-medium text-textColor-secondary sm:text-[3vw] lg:order-1 lg:text-[2vw] xl:text-[1.5vw] 2xl:text-[1vw]">
            Academic Background
          </h2>
        </div>

        <article className="mt-16 lg:mt-40">
          <a
            href="https://dinus.ac.id/"
            target="_blank"
            className="group relative flex flex-col gap-5 border-b border-stone-800 pb-16 pt-3 lg:grid lg:grid-cols-[0.3fr_4fr_2.5fr_0.2fr] lg:pb-14 lg:pt-14"
          >
            <h1 className="font-medium text-textColor-secondary lg:self-center">
              01
            </h1>

            <div className="flex flex-col gap-3 transition-all duration-500 group-hover:translate-x-10">
              <h1 className="mt-2 font-medium text-textColor-secondary lg:mt-0 2xl:text-xl">
                2020 - 2024
              </h1>
              <h1 className="text-[8vw] font-medium leading-none lg:mt-0 lg:w-[400px] lg:text-[4vw] xl:w-[500px] xl:text-6xl">
                Dian Nuswantoro University
              </h1>
            </div>

            <div className="mt-5 flex flex-col gap-3 font-medium text-textColor-secondary transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:text-lg lg:mt-0 lg:translate-y-2 lg:self-center lg:opacity-0">
              <h1 className="2xl:text-xl">
                Bachelor of Information Technology
              </h1>
              <h1 className="2xl:text-xl">Faculty of Computer Science</h1>
              <h1 className="2xl:text-xl">GPA: 3.76 / 4.00</h1>
            </div>

            <div className="absolute right-0 top-3 flex h-fit w-fit overflow-hidden lg:relative">
              <ArrowUpRight className="size-5 self-center transition-all duration-500 lg:group-hover:-translate-y-full lg:group-hover:translate-x-full" />
              <ArrowUpRight className="hidden size-5 -translate-x-full translate-y-full self-center transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0 lg:absolute lg:block" />
            </div>
          </a>

          <a
            href="https://www.binar.co.id/"
            target="_blank"
            className="group relative flex flex-col gap-5 border-b border-stone-800 pb-16 pt-3 lg:grid lg:grid-cols-[0.3fr_4fr_2.5fr_0.2fr] lg:pb-14 lg:pt-14"
          >
            <h1 className="font-medium text-textColor-secondary lg:self-center">
              02
            </h1>

            <div className="flex flex-col gap-3 transition-all duration-500 group-hover:translate-x-10">
              <h1 className="mt-2 font-medium text-textColor-secondary lg:mt-0 2xl:text-xl">
                Feb - Jun 2023
              </h1>
              <h1 className="text-[8vw] font-medium leading-none lg:mt-0 lg:w-[400px] lg:text-[4vw] xl:w-[500px] xl:text-6xl">
                Binar Academy
              </h1>
            </div>

            <div className="mt-5 flex flex-col gap-3 font-medium text-textColor-secondary transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:text-lg lg:mt-0 lg:translate-y-2 lg:self-center lg:opacity-0">
              <h1 className="2xl:text-xl">Bootcamp: Frontend Javascript</h1>

              <h1 className="2xl:text-xl">
                Grade: Hard Skill: 4.6 / 5.00 | Soft Skill: 4.7 / 5.00
              </h1>
            </div>

            <div className="absolute right-0 top-3 flex h-fit w-fit overflow-hidden lg:relative">
              <ArrowUpRight className="size-5 self-center transition-all duration-500 lg:group-hover:-translate-y-full lg:group-hover:translate-x-full" />
              <ArrowUpRight className="hidden size-5 -translate-x-full translate-y-full self-center transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0 lg:absolute lg:block" />
            </div>
          </a>
        </article>
      </section>
      {/* Education Section End */}

      {/* Personal Skill Section */}
      <section className="bg-black px-6 py-20 text-textColor-primary sm:py-40 md:px-10 lg:px-32 xl:px-36 2xl:px-72">
        <div className="grid grid-cols-2 border-t border-stone-800 pt-2 text-xs uppercase">
          <h1 className="font-medium text-textColor-secondary">02</h1>
          <h1 className="font-medium text-textColor-secondary">
            Personal Skill
          </h1>
        </div>

        <div className="mt-20 lg:mt-40 lg:grid lg:grid-cols-[1fr_2fr] xl:grid-cols-2">
          <h1 className="font-semibold uppercase sm:text-2xl">
            Personal Skill
          </h1>
          <article className="mt-10 flex flex-col gap-10 lg:mt-0">
            <div className="flex flex-col gap-3 border-b border-stone-800 pb-5 sm:grid sm:grid-cols-[1fr_2fr] sm:pb-10 lg:gap-10">
              <h1 className="text-lg font-medium sm:text-xl 2xl:text-2xl">
                Problem Solving
              </h1>
              <p className="font-medium text-textColor-secondary sm:text-lg 2xl:text-xl">
                Skilled at analyzing technical challenges and providing creative
                solutions to deliver optimal user experiences.
              </p>
            </div>

            <div className="flex flex-col gap-3 border-b border-stone-800 pb-5 sm:grid sm:grid-cols-[1fr_2fr] sm:pb-10 lg:gap-10">
              <h1 className="text-lg font-medium sm:text-xl 2xl:text-2xl">
                Adaptability
              </h1>
              <p className="font-medium text-textColor-secondary sm:text-lg 2xl:text-xl">
                Quick to adapt to new technologies and industry trends,
                continuously improving the quality of web development.
              </p>
            </div>

            <div className="flex flex-col gap-3 border-b border-stone-800 pb-5 sm:grid sm:grid-cols-[1fr_2fr] sm:pb-10 lg:gap-10">
              <h1 className="text-lg font-medium sm:text-xl 2xl:text-2xl">
                Collaboration
              </h1>
              <p className="font-medium text-textColor-secondary sm:text-lg 2xl:text-xl">
                Proficient in working with cross-functional teams to integrate
                ideas, solve problems, and achieve shared goals efficiently.
              </p>
            </div>

            <div className="flex flex-col gap-3 border-b border-stone-800 pb-5 sm:grid sm:grid-cols-[1fr_2fr] sm:pb-10 lg:gap-10">
              <h1 className="text-lg font-medium sm:text-xl 2xl:text-2xl">
                Attention to Detail
              </h1>
              <p className="font-medium text-textColor-secondary sm:text-lg 2xl:text-xl">
                Ensures every interface element is precisely crafted to create
                consistent, intuitive, and high-quality applications.
              </p>
            </div>
          </article>
        </div>
      </section>
      {/* Personal Skill Section End */}

      {/* Certificate Section */}
      <section className="bg-black px-6 py-20 text-textColor-primary sm:py-40 md:px-10 xl:px-36 2xl:px-72">
        <div className="mb-16 grid grid-cols-2 border-t border-stone-800 pt-2 text-xs uppercase">
          <h1 className="font-medium text-textColor-secondary">
            Accomplishments
          </h1>
          <h1 className="font-medium text-textColor-secondary">Certificate</h1>
        </div>

        <div className="mt-20 flex flex-col gap-5 lg:mt-40 lg:grid lg:grid-cols-[1fr_2fr] lg:items-end">
          <h1 className="text-[12vw] font-medium uppercase lg:order-2 lg:leading-none 2xl:text-[10vw]">
            Certificate
          </h1>
          <h2 className="text-[4vw] font-medium text-textColor-secondary sm:text-[3vw] lg:order-1 lg:text-[2vw] xl:text-[1.5vw] 2xl:text-[1vw]">
            Recent Certificate
          </h2>
        </div>

        <article className="mt-10 flex flex-col gap-20 md:mt-20 lg:mt-40">
          {certificates.map((certificate, index) => (
            <CertificateCard
              key={index}
              title={certificate.title}
              institution={certificate.institution}
              credentialId={certificate.credentialId}
              year={certificate.year}
              image={certificate.image}
              file={certificate.file}
            />
          ))}
        </article>
      </section>
      {/* Certificate Section End */}

      {/* Technical Skill Section */}
      <section className="bg-black px-6 py-20 text-textColor-primary sm:py-40 md:px-10 xl:px-20 2xl:px-28">
        <article className="mt-20">
          <h1 className="place-self-center text-center text-4xl font-semibold uppercase sm:text-6xl md:text-7xl lg:text-[9vw] 2xl:w-[900px] 2xl:text-[8vw]">
            Areas of Expertise
          </h1>

          <div className="mt-10 flex w-full flex-col gap-2 place-self-center uppercase sm:grid sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 2xl:w-3/4">
            {techStack.map((tech, index) => (
              <TechStack key={index} title={tech.title} image={tech.image} />
            ))}
          </div>
        </article>
      </section>
      {/* Technical Skill Section End */}

      {/* Resume Section */}
      <section className="bg-black px-6 py-20 text-textColor-primary sm:py-40 md:px-10 lg:px-32 xl:px-36 2xl:px-72">
        <div className="mb-16 grid grid-cols-2 border-t border-stone-800 pt-2 text-xs uppercase">
          <h1 className="font-medium text-textColor-secondary">Overview</h1>
          <h1 className="font-medium text-textColor-secondary">Resume</h1>
        </div>

        <div className="mt-20 gap-10 md:grid md:grid-cols-[1fr_2fr] lg:mt-40">
          <h1 className="font-semibold uppercase sm:text-2xl">Resume</h1>

          <article className="mt-10 flex flex-col gap-10 md:mt-0 md:grid md:grid-cols-[1fr_auto_1fr]">
            <button
              onClick={() => {
                window.open("/files/Nirvan Adam_Professional CV.pdf", "_blank");
              }}
              className="group relative overflow-hidden transition-all duration-500 lg:hover:-translate-y-5"
            >
              <div className="relative">
                <img
                  src={cv_en}
                  alt=""
                  className="group-hover:blur-s transition-all duration-500"
                />
                <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-background-secondary transition-all duration-300 group-hover:-translate-y-full">
                  <FileText className="size-[18vw] md:size-[7vw] lg:size-[5vw]" />
                </div>
              </div>

              <div className="absolute left-1/2 top-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-background-secondary opacity-0 shadow-2xl transition-all duration-500 group-hover:-translate-y-1/2 group-hover:opacity-100 sm:scale-150 md:scale-90 lg:-translate-y-[45%] lg:scale-100">
                <DownloadIcon className="" />
              </div>

              <div className="mt-5 flex w-full items-center justify-between gap-3 uppercase lg:w-fit">
                <div className="flex items-center gap-3">
                  <img
                    src={usa}
                    alt=""
                    className="size-6 sm:size-6 lg:size-6"
                  />
                  <h1 className="font-medium sm:text-xl md:text-lg">
                    EN Version
                  </h1>
                </div>
                <DownloadIcon className="lg:hidden" />
              </div>
            </button>

            <span className="h-[2px] w-full bg-stone-800 md:h-full md:w-[2px]" />

            <button
              onClick={() => {
                window.open("/files/Nirvan Adam_Professional CV.pdf", "_blank");
              }}
              className="group relative overflow-hidden transition-all duration-500 lg:hover:-translate-y-5"
            >
              <div className="relative">
                <img
                  src={cv_en}
                  alt=""
                  className="group-hover:blur-s transition-all duration-500"
                />
                <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-background-secondary transition-all duration-300 group-hover:-translate-y-full">
                  <FileText className="size-[18vw] md:size-[7vw] lg:size-[5vw]" />
                </div>
              </div>

              <div className="absolute left-1/2 top-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-background-secondary opacity-0 shadow-2xl transition-all duration-500 group-hover:-translate-y-1/2 group-hover:opacity-100 sm:scale-150 md:scale-90 lg:-translate-y-[45%] lg:scale-100">
                <DownloadIcon className="" />
              </div>

              <div className="mt-5 flex w-full items-center justify-between gap-3 uppercase lg:w-fit">
                <div className="flex items-center gap-3">
                  <img
                    src={indonesia}
                    alt=""
                    className="size-6 sm:size-6 lg:size-6"
                  />
                  <h1 className="font-medium sm:text-xl md:text-lg">
                    ID Version
                  </h1>
                </div>
                <DownloadIcon className="lg:hidden" />
              </div>
            </button>
          </article>
        </div>
      </section>
      {/* Resume Section End */}

      {/* Footer  */}
      <Footer />
      {/* Footer End */}
    </div>
  );
}

export default About;
