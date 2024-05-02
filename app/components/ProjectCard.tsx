import React from "react";

const ProjectCard = () => {
  return (
    <div className="bg-tile-background rounded-lg p-4 hover:shadow-lg transition duration-300 ease-in-out">
      <h3 className="font-semibold">Project Title</h3>
      <img src="https://placehold.co/600x400" className="rounded-xl my-3" />
      <p>
        Filler text is text that shares some characteristics of a real written
        text, but is random or otherwise generated. It may be used to display a
        sample of fonts, generate text for testing, or to spoof an e-mail spam
        filter.
      </p>
    </div>
  );
};

export default ProjectCard;
