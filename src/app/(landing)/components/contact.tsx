"use client";

import { FaMapLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { useSectionInView } from "@/lib/hooks";

const Contact = () => {
  const { ref } = useSectionInView("Contact", 0.65);
  return (
    <div
      className="w-full py-20 flex flex-col lg:flex-row gap-8 lg:gap-20 items-center lg:min-h-[80vh]"
      id="contact"
      ref={ref}
    >
      <div className="flex-1">
        <div className="flex items-center gap-3">
          <h4 className="mt-2">Dont be shy! Hit me Up!</h4>
          <Image
            src="/pointing-right.svg"
            alt="pointing-right"
            width={50}
            height={50}
            className="hidden lg:block"
          />
        </div>
        <p className="text-white/80 mt-3">
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have question or just want to say hi, I&apos;ll try
          my best to get back to you!
        </p>
      </div>
      <div className="flex flex-col gap-4 lg:w-1/3 w-full">
        <div className="flex-1 flex items-center gap-3">
          <div className="w-16 aspect-square rounded-full glass text-2xl flex justify-center items-center">
            <FaMapLocationDot />
          </div>
          <div>
            <h6>Location</h6>
            <span className="text-white/80 hover:text-primary transition cursor-default text-base">
              Bandung, Indonesia
            </span>
          </div>
        </div>
        <div className="flex-1 flex items-center gap-3">
          <div className="w-16 aspect-square rounded-full glass text-2xl flex justify-center items-center">
            <IoMail />
          </div>
          <div>
            <h6>Mail</h6>
            <Link
              href={"mailto:kevinssheva@gmail.com"}
              className="text-white/80 hover:text-primary transition"
              target="_blank"
            >
              kevinssheva@gmail.com
            </Link>
          </div>
        </div>
        <div className="flex-1 flex items-center gap-3">
          <div className="w-16 aspect-square rounded-full glass text-2xl flex justify-center items-center">
            <FaLinkedin />
          </div>
          <div>
            <h6>LinkedIn</h6>
            <Link
              href="https://www.linkedin.com/in/kevinsebastianst/"
              className="text-white/80 hover:text-primary transition"
              target="_blank"
            >
              Kevin Sebastian
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
