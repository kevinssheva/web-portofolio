import { IconType } from "react-icons";

interface ActivityCardProps {
  icon: IconType;
  title: string;
  description: string;
}

const ActivityCard = ({
  icon: Icon,
  title,
  description,
}: ActivityCardProps) => {
  return (
    <div className="flex-1 flex flex-col aspect-[262/190] justify-end glass rounded-[1.25rem] relative px-10 text-center pb-7">
      <div className="w-[30%] aspect-square bg-gradient-to-b from-primary to-secondary p-[0.15rem] rounded-full absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3">
        <div className="w-full h-full bg-dark-background rounded-full flex justify-center items-center text-4xl">
          <Icon />
        </div>
      </div>
      <h6 className="mb-3">{title}</h6>
      <span className="text-small text-white/70">{description}</span>
    </div>
  );
};

export default ActivityCard;
