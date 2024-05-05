import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  media: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  media,
  link,
}) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="bg-tile-background rounded-lg p-4 hover:shadow-lg transition duration-300 ease-in-out lg:min-h-80">
        <h3 className="font-semibold">{title}</h3>
        <img src={media} className="rounded-xl my-3 max-h-36" />
        <p>{description}</p>
      </div>
    </a>
  );
};

export default ProjectCard;
