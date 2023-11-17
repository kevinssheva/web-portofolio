import Image from "next/image";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { useMemo } from "react";
import Link from "next/link";
interface ProjectCardProps {
  imageUrl: string;
  type: string;
  title: string;
  description: string;
  techStack: string[];
  index: number;
  href?: string;
}

const ProjectCard = ({
  imageUrl,
  type,
  title,
  description,
  techStack,
  index,
  href,
}: ProjectCardProps) => {
  const isReversed = useMemo(() => index % 2 !== 0, [index]);
  return (
    <div className="w-full aspect-[220/80] rounded-3xl p-8">
      <div
        className={`w-full h-full flex gap-10 items-center ${
          isReversed && "flex-row-reverse"
        }`}
      >
        <div className="w-[45%] h-full relative rounded-lg overflow-hidden group">
          {href && (
            <Link
              href={href}
              target="_blank"
              className={`absolute bg-white shadow-xl bottom-3 z-20 p-3 rounded-lg cursor-pointer text-black/50 hover:scale-110 transition ${
                isReversed ? "left-3" : "right-3"
              }`}
            >
              <FaArrowUpRightFromSquare />
            </Link>
          )}
          <div className="w-full h-[30%] z-10 bg-gradient-to-t from-black/50 to-transparent to-90% absolute bottom-0"></div>
          <Image
            src={imageUrl}
            alt="project"
            fill={true}
            className="object-cover object-top group-hover:object-bottom transition-all duration-[5000ms]"
          />
        </div>
        <div className="flex-1">
          <p className="font-semibold text-primary/80">{type}</p>
          <h3 className="leading-tight">{title}</h3>
          <p className="glass rounded-[1.25rem] py-5 px-6 mt-2">{description}</p>
          <div className="flex gap-3 mt-5">
            {techStack.map((item, index) => (
              <div
                key={index}
                className="bg-white/20 rounded-full px-3 py-1 text-white/70 text-small"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
