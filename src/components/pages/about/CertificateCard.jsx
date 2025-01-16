import React from "react";

import { ArrowRight } from "lucide-react";

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
      <div className="overflow-hidden bg-background-secondary p-6 sm:p-10 md:p-7 lg:p-10 xl:p-12 2xl:p-16">
        <img
          src={image}
          alt=""
          className="grayscale transition-all duration-500 hover:scale-110 hover:grayscale-0"
        />
      </div>

      <div className="mt-10 flex flex-col gap-5 md:mt-0 lg:gap-10">
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-medium lg:text-4xl 2xl:text-5xl">
            {title}
          </h1>
          <h2 className="text-lg font-medium text-textColor-secondary lg:text-xl">
            {year}
          </h2>
        </div>

        <div className="flex flex-col gap-3 lg:gap-8">
          <div className="flex flex-col border-b border-stone-800 py-4 font-medium lg:flex-row lg:justify-between 2xl:text-lg">
            <h1 className="uppercase text-textColor-secondary">Institution</h1>
            <h1 className="">{institution}</h1>
          </div>

          <div className="flex flex-col border-b border-stone-800 py-4 font-medium lg:flex-row lg:justify-between 2xl:text-lg">
            <h1 className="uppercase text-textColor-secondary">
              Credential ID
            </h1>
            <h1 className="">{credentialId}</h1>
          </div>
        </div>

        <button
          onClick={() => {
            window.open(`/files/certificate/${file}`, "_blank");
          }}
          href={file}
          className="group mt-5 flex w-fit items-center justify-between gap-5 overflow-hidden bg-white px-4 py-3 text-black"
        >
          <div className="relative flex font-medium uppercase">
            <h1 className="transition-all duration-500 group-hover:-translate-y-[150%]">
              View Certificate
            </h1>
            <h1 className="absolute translate-y-[150%] transition-all duration-500 group-hover:translate-y-0">
              View Certificate
            </h1>
          </div>
          <div className="relative flex overflow-hidden">
            <ArrowRight className="transition-all duration-500 group-hover:translate-x-full" />
            <ArrowRight className="absolute -translate-x-full transition-all duration-500 group-hover:translate-x-0" />
          </div>
        </button>
      </div>
    </div>
  );
}

export default CertificateCard;
