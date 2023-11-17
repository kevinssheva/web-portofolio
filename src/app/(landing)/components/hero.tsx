"use client";

import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaArrowDownLong } from "react-icons/fa6";

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
  return (
    <div
      className="w-full min-h-screen py-20 flex flex-col gap-3 justify-center relative"
      ref={ref}
      id="Home"
    >
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 animate-bounce text-3xl">
        <FaArrowDownLong />
      </div>
      <div className="flex gap-4">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
          Hi! Im Kevin Sebastian
        </h1>
        <Image
          src="/wave.svg"
          alt="wave"
          width={60}
          height={60}
          quality={100}
          className="-scale-x-100 -rotate-[10deg]"
        />
      </div>
      <h5>
        A special human with some ability to love learning and working on
        teamwork.
      </h5>
      <div className="flex gap-10 items-start mt-10">
        <div className="w-40 aspect-square bg-gradient-to-r from-primary to-secondary rounded-full p-1">
          <div className="w-full h-full bg-[#3A3636] rounded-full relative">
            <Image
              src={"/character.svg"}
              alt="character"
              fill={true}
              className="object-contain w-full h-full"
            />
          </div>
        </div>
        <div className="w-1/2">
          <h1 className="font-sora font-bold text-xl mb-3">Biography</h1>
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
        </div>
        <div className="w-1/4 ml-auto">
          <h1 className="font-sora font-bold text-xl mb-3">Lets Connect</h1>
          <div className="flex gap-3 text-3xl">
            {socialData.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`text-white ${item.gradient} transition hover:scale-110 cursor-alias`}
                target="_blank"
              >
                <item.icon />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
