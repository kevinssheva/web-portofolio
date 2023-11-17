import ProjectCard from "./project-card";

const projectData = [
  {
    imageUrl: "/project/ashwa.png",
    type: "Web Development",
    title: "Bersama Ashwa",
    description:
      "Serrow restructured and designed core pages, creating interactive elements that put users in control and allowed them to discover the information needed to make a decision.",
    techStack: ["React", "CSS", "Express"],
    href: "https://www.bersamaashwa.com/",
  },
  {
    imageUrl: "/project/helppals.png",
    type: "Web Development",
    title: "Serrow",
    description:
      "Serrow restructured and designed core pages, creating interactive elements that put users in control and allowed them to discover the information needed to make a decision.",
    techStack: ["NextJS", "Tailwind"],
    href: "https://www.helppalstherapy.com/",
  },
  {
    imageUrl: "/project/sparta.png",
    type: "Web Development",
    title: "Sparta",
    description:
      "Serrow restructured and designed core pages, creating interactive elements that put users in control and allowed them to discover the information needed to make a decision.",
    techStack: ["NextJS", "CSS"],
    href: "https://www.sparta22hmif.com/",
  },
];

const Project = () => {
  return (
    <div className="w-full py-20">
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
