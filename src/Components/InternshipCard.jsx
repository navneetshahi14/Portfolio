import { p } from "framer-motion/client";
import React, { useState } from "react";

const InternshipCard = ({
  name,
  role,
  date,
  location,
  description,
  technology,
  img,
  link,
  type,
}) => {
  const [showFull, setShowFull] = useState(false);

  const shortText = description.slice(0, 180);
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-blue-500 transition-all duration-300 shadow-lg w-[90%] lg:w-[40%]">
      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        {/* <img
          src={img}
          alt="company"
          className="w-12 h-12 rounded-md object-cover"
        /> */}

        <div>
          <h3 className="text-lg font-semibold text-white">{role}</h3>
          <span
            className={`px-2 py-1 text-xs rounded-full font-medium ${
              type === "Internship"
                ? "bg-green-500/10 text-green-400"
                : "bg-purple-500/10 text-purple-400"
            }`}
          >
            {type}
          </span>
          <p className="text-gray-400 text-sm">{name}</p>
        </div>
      </div>

      {/* Duration */}
      <p className="text-gray-400 text-sm mb-3">{date}</p>

      {/* Description */}
      <p className="text-gray-300 text-sm leading-relaxed mb-2">
        {showFull ? description : shortText + "..."}
      </p>

      {/* Show More Button */}
      <button
        onClick={() => setShowFull(!showFull)}
        className="text-blue-400 text-xs mb-4 hover:underline"
      >
        {showFull ? "Show Less" : "Show More"}
      </button>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {technology.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-xs bg-blue-500/10 text-blue-400 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <a
          href={link}
          className="text-sm px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white"
          target="_blank"
        >
          {type === "Internship" ? "Certificate" : "Visit"}
        </a>
      </div>
    </div>
  );
};

export default InternshipCard;
