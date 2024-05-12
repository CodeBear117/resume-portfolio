"use client";
import React, { useState, useRef } from "react";

interface JobCardProps {
  company: string;
  link: string;
  role: string;
  dates: string;
  overview: string;
  details: React.ReactNode;
}

const JobCard: React.FC<JobCardProps> = ({
  company,
  link,
  role,
  dates,
  overview,
  details,
}) => {
  // state for expandable read more section
  const [showDetails, setShowDetails] = useState(false);

  // useRef tells the browser not to trigger re-render of the component
  const detailsRef = useRef<HTMLDivElement>(null);

  // handle click of read more button
  const handleClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="timeline-item relative mb-10">
      <div className="timeline-dot absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-600 rounded-full w-3 h-3"></div>
      <div className="timeline-content ml-10 bg-tile-background rounded-lg p-4 hover:shadow-lg transition duration-300 ease-in-out">
        <div className="text-gray-600 text-sm">{dates}</div>
        <h3>
          <a
            href={link}
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {company}
          </a>
        </h3>
        <h3 className="font-semibold text-lg">{role}</h3>
        <p className="text-sm text-gray-700">{overview}</p>
        <div
          ref={detailsRef}
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            showDetails ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
          }`}
          style={{
            maxHeight: showDetails
              ? `${detailsRef.current?.scrollHeight}px`
              : "0",
          }}
        >
          <div>
            <br />
            {details}
            <br />
          </div>
        </div>
        <button
          id={"more-less-btn" + company + role}
          className="block font-semibold text-gray-600 text-sm"
          onClick={handleClick}
        >
          {showDetails ? "Read Less" : "Read More"}
        </button>
      </div>
    </div>
  );
};

export default JobCard;
