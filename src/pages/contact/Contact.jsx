import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { ArrowDown, ArrowUp, ArrowUpRight } from "lucide-react";
import Footer from "../../components/footer/Footer";

function Contact() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[92vh] bg-black px-6 py-20 text-textColor-primary md:px-10 lg:h-[90vh] xl:px-20 2xl:px-28">
        <div className="flex flex-col gap-3 place-self-end border-t border-gray-600 py-10 sm:grid sm:grid-cols-[1fr_2fr] lg:w-1/2 2xl:w-[40%]">
          <h1 className="text-[6vw] font-semibold uppercase sm:text-[3vw] lg:text-[2vw] xl:text-[1.5vw] 2xl:text-[1vw]">
            Contact
          </h1>
          <p className="text-[6.5vw] font-medium text-textColor-secondary sm:text-[3vw] lg:text-[2vw] xl:text-[1.5vw] 2xl:text-[1vw]">
            Looking forward to hearing from you. Feel free to get in touch.
          </p>
        </div>

        <h1 className="mt-10 self-end text-[11vw] font-medium leading-none lg:absolute lg:bottom-10 lg:w-3/4 lg:text-[9vw]">
          Ready to collaborate? Reach out!
        </h1>

        <a
          href="#contact"
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

      {/* Contact Section */}
      <section
        id="contact"
        className="bg-black px-6 py-20 text-textColor-primary sm:py-40 md:px-10 lg:px-32 xl:px-36 2xl:px-72"
      >
        <article className="mt-10 flex flex-col gap-20 lg:mt-0 xl:gap-56">
          <div className="border- flex flex-col gap-10 border-gray-600 py-5 text-lg font-medium sm:grid sm:grid-cols-[1fr_2fr] sm:gap-20 sm:py-10 sm:text-xl lg:gap-40">
            <h1 className="text-4xl font-semibold uppercase md:text-5xl lg:text-7xl">
              Direct
            </h1>
            <div className="flex flex-col gap-5 text-textColor-secondary lg:gap-10">
              <a
                href="mailto:nirvan.pramudhyta@gmail.com"
                className="group flex gap-2 font-medium md:text-2xl xl:text-4xl"
              >
                <h1 className="transition-all duration-300 group-hover:text-white">
                  nirvan.pramudhyta@gmail.com
                </h1>
                <div className="relative flex overflow-hidden md:w-5 xl:w-7">
                  <ArrowUpRight className="size-full transition-all duration-300 group-hover:-translate-y-full group-hover:translate-x-full group-hover:text-white" />
                  <ArrowUpRight className="absolute size-full -translate-x-full translate-y-full transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-white" />
                </div>
              </a>
              <span className="h-[1px] w-full bg-stone-800" />
              <h1 className="font-medium transition-all duration-300 hover:text-white md:text-2xl xl:text-4xl">
                +62 812 1524 4015
              </h1>
            </div>
          </div>

          <div className="border- flex flex-col gap-10 border-gray-600 py-5 text-lg font-medium sm:grid sm:grid-cols-[1fr_2fr] sm:gap-20 sm:py-10 sm:text-xl lg:gap-40">
            <h1 className="text-4xl font-semibold uppercase sm:order-2 md:text-5xl lg:text-7xl">
              Social Media
            </h1>
            <div className="flex flex-col gap-5 text-textColor-secondary sm:order-1 lg:gap-10">
              <a
                href="https://www.linkedin.com/in/nirvanadam/"
                target="_blank"
                className="w-fit text-xl font-medium transition-all duration-300 hover:translate-x-3 hover:text-white md:text-2xl xl:text-4xl"
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/nirvanadm/"
                target="_blank"
                className="w-fit text-xl font-medium transition-all duration-300 hover:translate-x-3 hover:text-white md:text-2xl xl:text-4xl"
              >
                Instagram
              </a>
              <a
                href="https://github.com/nirvanadam"
                target="_blank"
                className="w-fit text-xl font-medium transition-all duration-300 hover:translate-x-3 hover:text-white md:text-2xl xl:text-4xl"
              >
                GitHub
              </a>
            </div>
          </div>
        </article>
      </section>
      {/* Contact Section End */}

      <section className="flex flex-col gap-10 bg-black px-6 py-20 text-textColor-primary sm:py-40 md:px-10 lg:grid lg:grid-cols-[1fr_2fr] xl:px-20 2xl:px-72">
        <h1 className="text-lg font-medium text-textColor-secondary sm:text-xl">
          Get in touch
        </h1>

        <p className="text-[7vw] font-medium leading-tight sm:text-[6vw] md:text-5xl lg:text-6xl">
          Feel free to drop a message or follow me on social media for updates.
        </p>
      </section>

      <Footer />
    </div>
  );
}

export default Contact;
