"use client";

import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaArrowDownLong } from "react-icons/fa6";
import { IoMdPaper } from "react-icons/io";

const socialData = [
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/kevin.sst/",
    gradient: "hover:text-[#DD2A7B]",
  },
  {
    icon: FaGithub,
    href: "https://github.com/kevinssheva",
    gradient: "hover:text-[#6E5494]",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/kevinsebastianst/",
    gradient: "hover:text-[#0077B5]",
  },
];
const Hero = () => {
  const { ref } = useSectionInView("Home", 0.3);
  const handleDownload = () => {
    const downloadUrl =
      "https://drive.google.com/file/d/1qlhVl7aCrEDPMavczK4yLAnu0KmZUxhx/view?usp=sharing"; // Update the path to your file
    window.open(downloadUrl, "_blank");
  };

  return (
    <div
      className="w-full min-h-screen py-20 flex flex-col gap-3 justify-center relative"
      ref={ref}
      id="Home"
    >
      <div className="absolute w-full bottom-10 flex items-center justify-center text-3xl animate-bounce">
        <Link href="#about">
          <FaArrowDownLong />
        </Link>
      </div>
      <div className="flex gap-4 items-center -mb-3 md:mb-0">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
          Hi! <span className="hidden lg:inline">Im Kevin Sebastian</span>
        </h1>
        <Image
          src="/wave.svg"
          alt="wave"
          width={60}
          height={60}
          quality={100}
          className="-scale-x-100 -rotate-[10deg] w-[3rem] md:w-[4rem] aspect-square"
        />
      </div>
      <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary lg:hidden">
        Im Kevin Sebastian
      </h1>
      <h5>
        A special human with some ability to love learning and working on
        teamwork.
      </h5>
      <div className="gap-10 items-start mt-2 lg:mt-10 flex">
        <div className="hidden lg:block w-40 aspect-square bg-gradient-to-r from-primary to-secondary rounded-full p-1">
          <div className="w-full h-full bg-[#3A3636] rounded-full relative">
            <Image
              src={"/character.svg"}
              alt="character"
              fill={true}
              className="object-contain w-full h-full"
            />
          </div>
        </div>
        <div className="hidden lg:block w-1/2">
          <h4>Biography</h4>
          <p>
            A student at the{" "}
            <span className="font-semibold text-primary">
              Bandung Institute of Technology
            </span>{" "}
            pursuing a degree in{" "}
            <span className="text-secondary font-semibold">
              Information Systems and Technology
            </span>
            . I&apos;m deeply passionate about exploring the realm of{" "}
            <span className="font-bold underline-offset-2 underline">
              software engineering
            </span>
            .
          </p>
          <button
            onClick={handleDownload}
            className="py-3 px-4 bg-white rounded-lg text-black font-semibold mt-4 flex gap-3 items-center"
          >
            <IoMdPaper />
            <span>See Resume</span>
          </button>
        </div>
        <div className="w-full lg:w-1/4 ml-auto">
          <h1 className="font-sora font-bold text-xl mb-3 hidden lg:block">
            Lets Connect
          </h1>
          <div className="flex gap-3 text-3xl">
            {socialData.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`text-white ${item.gradient} transition hover:scale-110 cursor-pointer`}
                target="_blank"
              >
                <item.icon />
              </Link>
            ))}
          </div>
          <button
            onClick={handleDownload}
            className="py-2 text-sm px-3 bg-white rounded-lg text-black font-semibold mt-4 flex lg:hidden gap-3 items-center"
          >
            <IoMdPaper />
            <span>See Resume</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
