"use client";

import { useSectionInView } from "@/lib/hooks";
import ActivityCard from "./activity-card";
import { FaEarthAmericas } from "react-icons/fa6";
import { MdHive } from "react-icons/md";
import Image from "next/image";

const WhatIDo = () => {
  const { ref } = useSectionInView("About", 0.6);
  return (
    <div
      className="py-20 w-full flex flex-col lg:flex-row gap-10 items-center lg:min-h-[90vh]"
      id="about"
      ref={ref}
    >
      <div className="w-full lg:w-[40%]">
        <div className="flex gap-3 items-center mb-3">
          <h4>What I do</h4>
          <Image
            src="/doing.svg"
            alt="whatido"
            width={40}
            height={40}
            quality={100}
          />
        </div>
        <p>
          I am currently immersed in the dynamic field of{" "}
          <span className="text-primary font-semibold">
            fullstack web development
          </span>
          , honing my skills to create seamless digital experiences that blend
          aesthetic design with robust functionality. Concurrently, my
          exploration extends into the realms of{" "}
          <span className="font-semibold underline underline-offset-2">
            data-driven
          </span>{" "}
          technologies, including{" "}
          <span className="font-semibold text-secondary">machine learning</span>{" "}
          and artificial intelligence.
        </p>
      </div>
      <div className="lg:flex-1 flex flex-col md:flex-row gap-16 md:gap-5 my-7 md:mt-12 md:my-0">
        <ActivityCard
          icon={FaEarthAmericas}
          title="Web Development"
          description="Involves the creation and maintenance of websites and web applications."
        />
        <ActivityCard
          icon={MdHive}
          title="Artificial Intelligence"
          description="Development of machine to perform tasks that typically require human intelligence"
        />
      </div>
    </div>
  );
};

export default WhatIDo;
