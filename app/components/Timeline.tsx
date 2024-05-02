import React from "react";

const Timeline = () => {
  return (
    <div className="timeline relative">
      <div className="timeline-item relative mb-10">
        <div className="timeline-dot absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-600 rounded-full w-3 h-3"></div>
        <div className="timeline-content ml-10 bg-tile-background rounded-lg p-4 hover:shadow-lg transition duration-300 ease-in-out">
          <div className=" text-gray-600 text-sm">2020 - 2023</div>
          <h3 className="font-semibold text-lg">Webatoo Design Australia</h3>
          <p className="text-sm text-gray-700">
            Details about your role and responsibilities.
          </p>
        </div>
      </div>

      <div className="timeline-item relative mb-10">
        <div className="timeline-dot absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-600 rounded-full w-3 h-3"></div>
        <div className="timeline-content ml-10 bg-tile-background rounded-lg p-4 hover:shadow-lg transition duration-300 ease-in-out">
          <div className=" text-gray-600 text-sm">2020 - 2023</div>
          <h3 className="font-semibold text-lg">Monash DeepNeuron</h3>
          <p className="text-sm text-gray-700">
            Details about your role and responsibilities.
          </p>
        </div>
      </div>

      <div className="timeline-item relative mb-10">
        <div className="timeline-dot absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-600 rounded-full w-3 h-3"></div>
        <div className="timeline-content ml-10 bg-tile-background rounded-lg p-4 hover:shadow-lg transition duration-300 ease-in-out">
          <div className=" text-gray-600 text-sm">2020 - 2023</div>
          <h3 className="font-semibold text-lg">Tesla</h3>
          <p className="text-sm text-gray-700">
            Details about your role and responsibilities.
          </p>
        </div>
      </div>

      <div className="timeline-item relative mb-10">
        <div className="timeline-dot absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-600 rounded-full w-3 h-3"></div>
        <div className="timeline-content ml-10 bg-tile-background rounded-lg p-4 hover:shadow-lg transition duration-300 ease-in-out">
          <div className=" text-gray-600 text-sm">2020 - 2023</div>
          <h3 className="font-semibold text-lg">PwC Australia</h3>
          <p className="text-sm text-gray-700">
            Details about your role and responsibilities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
