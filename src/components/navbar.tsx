"use client";

import Link from "next/link";
import { HiOutlineHome } from "react-icons/hi";
import { IoPersonCircleOutline } from "react-icons/io5";
import { AiOutlineProject } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import Image from "next/image";
import { useState } from "react";

const navbarData = [
  {
    icon: HiOutlineHome,
    href: "/",
  },
  {
    icon: IoPersonCircleOutline,
    href: "#about",
  },
  {
    icon: AiOutlineProject,
    href: "#projects",
  },
  {
    icon: BsTelephone,
    href: "#contact",
  },
];

const Navbar = () => {
  const [active, setActive] = useState(3);
  const style = (index: number) => {
    switch (index) {
      case 0:
        return "-2%";
      case 1:
        return "22.5%";
      case 2:
        return "47.5%";
      case 3:
        return "72%";
    }
  };
  return (
    <div className="fixed left-0 z-50 rounded-r-3xl h-[30rem] top-1/2 -translate-y-1/2 overflow-hidden">
      <div className="flex flex-col justify-around px-3 rounded-r-3xl w-full h-full relative glass">
        {navbarData.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={`font-semibold opacity-100 text-3xl p-2 z-10 transition duration-300 rounded-full ${
              active === index ? "translate-x-3 bg-white text-black" : ""
            }`}
            onClick={() => setActive(index)}
          >
            <item.icon />
          </Link>
        ))}
        <div
          className="h-1/3 w-full absolute -right-[1px] transition-all duration-500 ease-in-out"
          style={{
            top: style(active),
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
