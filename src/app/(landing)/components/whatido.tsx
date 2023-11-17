import ActivityCard from "./activity-card";
import { FaEarthAmericas } from "react-icons/fa6";
import { MdHive } from "react-icons/md";

const WhatIDo = () => {
  return (
    <div className="py-20 w-full flex gap-10 items-center">
      <div className="w-[40%]">
        <h4 className="mb-3">What I do</h4>
        <p>
          Build and maintain websites, frontend dev also have a mentorship
          called MOFON. My motto is Beauty and function in equal measure as
          priority.
        </p>
      </div>
      <div className="flex-1 flex gap-5">
        <ActivityCard
          icon={FaEarthAmericas}
          title="Web Development"
          description="You will receive a customized plan for your fitness journey, and lots of support."
        />
        <ActivityCard
          icon={MdHive}
          title="Artificial Intelligence"
          description="You will receive a customized plan for your fitness journey, and lots of support."
        />
      </div>
    </div>
  );
};

export default WhatIDo;
