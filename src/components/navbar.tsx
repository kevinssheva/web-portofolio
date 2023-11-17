"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useActiveSectionContext } from "@/context/active-section-context";
import { links } from "@/lib/data";

const Navbar = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [active, setActive] = useState(3);
  const style = (name: string) => {
    switch (name) {
      case "Home":
        return "-2%";
      case "About":
        return "22.5%";
      case "Projects":
        return "47.5%";
      case "Contact":
        return "72%";
    }
  };
  return (
    <div className="fixed left-0 z-50 rounded-r-3xl h-[30rem] top-1/2 -translate-y-1/2 overflow-hidden">
      <div className="flex flex-col justify-around px-3 rounded-r-3xl w-full h-full relative glass">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className={`font-semibold opacity-100 text-3xl p-2 z-10 transition duration-300 rounded-full ${
              activeSection === link.name
                ? "translate-x-3 bg-white text-black"
                : ""
            }`}
            onClick={() => {
              setActiveSection(link.name);
              setTimeOfLastClick(Date.now());
            }}
          >
            <link.icon />
          </Link>
        ))}
        <div
          className="h-1/3 w-full absolute -right-[1px] transition-all duration-500 ease-in-out"
          style={{
            top: style(activeSection),
          }}
        >
          <Image
            src={"/subtract.svg"}
            alt="navbar"
            fill={true}
            className="object-contain h-full object-right"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
