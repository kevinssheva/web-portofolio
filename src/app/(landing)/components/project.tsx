"use client";

import ProjectCard from "./project-card";
import { useSectionInView } from "@/lib/hooks";

const projectData = [
  {
    imageUrl: "/project/ashwa.png",
    type: "Web Development",
    title: "Bersama Ashwa",
    description:
      "A comprehensive online platform designed to facilitate mental health check-ups through interactive quizzes and personalized consultations.",
    techStack: ["React", "CSS", "Express"],
    href: "https://www.bersamaashwa.com/",
  },
  {
    imageUrl: "/project/helppals.png",
    type: "Web Development",
    title: "HelpPals",
    description:
      "A website platform allowing users to assess their mental health through scheduled quizzes, record daily emotions, and incorporate a diary feature for the ongoing monitoring of daily mental well-being.",
    techStack: ["NextJS", "Tailwind"],
    href: "https://www.helppalstherapy.com/",
  },
  {
    imageUrl: "/project/sparta.png",
    type: "Web Development",
    title: "Sparta",
    description:
      "An online platform for the orientation activities of a student organization's new member recruitment, offering features such as assignment and material details, as well as a daily journal feature.",
    techStack: ["NextJS", "CSS"],
    href: "https://www.sparta22hmif.com/",
  },
];

const Project = () => {
  const { ref } = useSectionInView("Projects", 0.25);
  return (
    <div className="w-full py-20" id="projects" ref={ref}>
      <h3>Featured Project</h3>
      {projectData.map((item, index) => (
        <ProjectCard
          key={index}
          imageUrl={item.imageUrl}
          type={item.type}
          title={item.title}
          description={item.description}
          techStack={item.techStack}
          index={index}
          href={item.href}
        />
      ))}
    </div>
  );
};

export default Project;
