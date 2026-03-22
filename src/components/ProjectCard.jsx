import React, { memo } from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { MdPreview } from "react-icons/md";
import House from "../assets/projects.webp";

const ProjectCard = memo(function ProjectCard({ project }) {
  return (
    <div className="flex flex-col h-full bg-rose-200 dark:bg-emerald-900 rounded-lg overflow-hidden shadow-lg p-4 transition hover:scale-105 duration-300 ease-in-out">
      <img
        src={House}
        alt=""
        className="w-full h-40 object-cover rounded-lg"
        style={{ height: "150px" }}
      />
      <div className="flex flex-col flex-grow px-6 py-4">
        <div className="font-bold text-xl mb-2 dark:text-slate-200">
          {project.title}
        </div>
        <ul className="list-disc text-gray-700 dark:text-slate-200 text-base flex-grow pl-5">
          {project.description.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>
      </div>
      <div className="mt-auto flex flex-col justify-center gap-2 px-6 pt-4 pb-2">
        <Link
          to={project.codeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full duration-300 ease-in-out hover:scale-105"
        >
          <FaGithub />
          <p>GitHub Link</p>
        </Link>
        {project.projectLink && (
          <Link
            to={project.projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full duration-300 ease-in-out hover:scale-105"
          >
            <MdPreview />
            <p>Website Link</p>
          </Link>
        )}
      </div>
    </div>
  );
});

export default ProjectCard;
