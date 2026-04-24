import Image from "next/image";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  onClick: () => void;
};

export const ProjectCard = ({
  src,
  title,
  description,
  onClick,
}: ProjectCardProps) => {
  return (
    <div
      onClick={onClick}
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] cursor-pointer transition-transform hover:scale-105"
    >
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};
