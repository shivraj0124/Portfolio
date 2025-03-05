import React, { useRef } from "react";
import themeHook from "./ThemeContext";
import { AiFillGithub } from "react-icons/ai";
import { BiLink } from "react-icons/bi";
import { motion, useInView } from "framer-motion";
function ProjectCard({ project }) {
  const { fade } = themeHook();
  const divfade = useRef(null);
  const divslide = useRef(null);
  const fadeview = useInView(divfade, { once: false });
  const slideview = useInView(divslide, { once: false });
  console.log(project, "project data");
  const { theme } = themeHook();
  return (
    <motion.div
      className={`z-0 flex flex-col justify-between gap-2 p-4 rounded-xl shadow-xl  ${
        theme === "dark"
          ? "border border-gray-800  bg-gradient-to-b from-black to-slate-900 "
          : "border inset-0 bg-gradient-to-bl from-[#83bee9] via-[#e8e8ec] to-[#a6d6f8]  "
      }`}
      ref={divfade}
      variants={fade}
      initial="hidden"
      animate={fadeview ? "visible" : "hidden"}
      transition={{
        duration: 0.9,
      }}
    >
      <div className="flex flex-col gap-2 ">
        <div className="flex justify-between items-center gap-2">
          <div>
            <a
              href={project?.ProjectLink}
              target="_blank"
              className={
                theme === "dark"
                  ? "text-white text-xl p-0"
                  : "text-black text-xl p-0"
              }
            >
              {project?.ProjectName}
            </a>
          </div>
          <div className="flex flex-row gap-x-2">
            <a href={project?.ProjectLink} target="_blank">
              <BiLink className="hover:text-blue-700  " size={24} />
            </a>
            <a href={project?.GithubLink} target="_blank">
              <AiFillGithub className="hover:text-blue-700    " size={24} />
            </a>
          </div>
        </div>
        {/* <div>
          <a href={project?.ProjectLink} target="_blank">
          <img
            className={`rounded-md ${theme === "dark" ? "" : "border"}`}
            src={project?.Image}
          />
          </a>
        </div> */}
        <div className="overflow-hidden rounded-md">
          <a href={project?.ProjectLink} target="_blank">
            <img
              className={`rounded-md transition-transform duration-300 ease-in-out hover:scale-110 ${
                theme === "dark" ? "" : "border"
              }`}
              src={project?.Image}
            />
          </a>
        </div>
        <div>
          <span className="text-gray-500 text-sm md:text-lg font-semibold">
            Description
          </span>
          <div className="">{project?.Description}</div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-gray-500 text-sm md:text-lg font-semibold">
          Technologies Used
        </span>
        <div className="flex flex-wrap text-[12px]  gap-1">
          {project?.Technologies?.map((technology, id) => {
            return (
              <div className="p-1 px-2 border border-gray-600 rounded-md w-max">
                {technology}
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
