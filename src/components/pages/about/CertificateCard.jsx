import React from "react";

import { ArrowRight } from "lucide-react";
import { Fade } from "react-reveal";

function CertificateCard({
  title,
  institution,
  credentialId,
  year,
  image,
  file,
}) {
  return (
    <div className="md:grid md:grid-cols-2 md:gap-10 lg:gap-16">
      <Fade bottom>
        <div className="h-fit overflow-hidden bg-background-secondary p-6 sm:p-10 md:p-7 lg:p-10 xl:p-12 2xl:p-16">
          <img
            src={image}
            alt=""
            className="grayscale transition-all duration-500 hover:scale-110 hover:grayscale-0"
          />
        </div>
      </Fade>

      <div className="mt-10 flex flex-col gap-5 md:mt-0 lg:gap-10">
        <Fade bottom>
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-medium lg:text-4xl 2xl:text-5xl">
              {title}
            </h1>

            <h2 className="text-lg font-medium text-textColor-secondary lg:text-xl">
              {year}
            </h2>
          </div>
        </Fade>

        <div className="flex flex-col gap-3 lg:gap-8">
          <Fade bottom>
            <div className="flex flex-col border-b border-stone-800 py-4 font-medium lg:flex-row lg:justify-between 2xl:text-lg">
              <h1 className="uppercase text-textColor-secondary">
                Institution
              </h1>

              <h1 className="">{institution}</h1>
            </div>
          </Fade>

          <Fade bottom>
            <div className="flex flex-col border-b border-stone-800 py-4 font-medium lg:flex-row lg:justify-between 2xl:text-lg">
              <h1 className="uppercase text-textColor-secondary">
                Credential ID
              </h1>
              <h1 className="">{credentialId}</h1>
            </div>
          </Fade>
        </div>

        <Fade bottom>
          <button
            onClick={() => {
              window.open(`/files/certificate/${file}`, "_blank");
            }}
            href={file}
            className="group mt-5 flex w-fit items-center justify-between gap-3 overflow-hidden bg-white px-4 py-3 text-black"
          >
            <h1 className="font-medium transition-all duration-500">
              View Certificate
            </h1>

            <div className="relative flex overflow-hidden">
              <ArrowRight className="transition-all duration-500 group-hover:translate-x-full" />
              <ArrowRight className="absolute -translate-x-full transition-all duration-500 group-hover:translate-x-0" />
            </div>
          </button>
        </Fade>
      </div>
    </div>
  );
}

export default CertificateCard;
