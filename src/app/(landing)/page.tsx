import Image from "next/image";
import Hero from "./components/hero";
import WhatIDo from "./components/whatido";
import Project from "./components/project";
import Contact from "./components/contact";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <WhatIDo />
      <Project />
      <Contact />
    </div>
  );
}
