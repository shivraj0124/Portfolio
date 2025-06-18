import React from "react";
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaNodeJs, FaJava } from "react-icons/fa";
import {
  SiExpress,
  SiJavascript,
  SiPython,
  SiC,
  SiCplusplus,
  SiGit,
  SiGithub,
  SiVisualstudiocode,
  SiNextdotjs
} from "react-icons/si";
import {
  BiLogoCss3,
  BiLogoTailwindCss,
  BiLogoReact,
  BiLogoMongodb,
} from "react-icons/bi";

import { GrMysql } from "react-icons/gr";
import themeHook from "./ThemeContext";
// import './Skills.css';

const skillsData = [
  {
    category: "Languages",
    skills: [
      {
        name: "Java",
        icon: <FaJava size={60} className="text-red-600" />,
        desc: "Popular for enterprise applications",
      },
      {
        name: "Python",
        icon: <SiPython size={60} className="text-yellow-500" />,
        desc: "High-level, versatile programming language",
      },
      {
        name: "JavaScript",
        icon: <SiJavascript size={60} className="text-yellow-400" />,
        desc: "Language of the web",
      },
      {
        name: "C++",
        icon: <SiCplusplus size={60} className="text-blue-500" />,
        desc: "Object-oriented programming language",
      },
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      {
        name: "Tailwind",
        icon: <BiLogoTailwindCss size={60} className="text-[#3dc6e9]" />,
        desc: "Utility-first CSS framework",
      },
      {
        name: "React",
        icon: <BiLogoReact size={60} className="text-[#61DBFB]" />,
        desc: "JavaScript library for UI development",
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs size={60} className="text-black dark:text-white" />,
        desc: "React-based JavaScript framework.",
      },
      {
        name: "Node.js",
        icon: <FaNodeJs size={60} className="text-green-800" />,
        desc: "JavaScript runtime for backend development",
      },
      {
        name: "Express",
        icon: <SiExpress size={60} />,
        desc: "Minimalist Node.js framework",
      },
      {
        name: "MongoDB",
        icon: <BiLogoMongodb size={60} className="text-[#4DB33D]" />,
        desc: "NoSQL document-based database",
      },
      {
        name: "MySQL",
        icon: <GrMysql size={60} className="text-[#2ba2af]" />,
        desc: "Relational database management system",
      },
    ],
  },
  {
    category: "Tools",
    skills: [
      {
        name: "Git",
        icon: <SiGit size={60} className="text-red-600" />,
        desc: "Version control system",
      },
      {
        name: "GitHub",
        icon: <SiGithub size={60} className="text-gray-900" />,
        desc: "Code hosting platform",
      },
      {
        name: "VS Code",
        icon: <SiVisualstudiocode size={60} className="text-blue-500" />,
        desc: "Code editor by Microsoft",
      },
    ],
  },
];

function Skills() {
  const { theme } = themeHook();
  return (
    <div
      className={`w-full max-md:px-4 md:px-[10%] py-10 ${
        theme === "dark" ? "text-white" : "text-black"
      }`}
      id="skills"
    >
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-bold text-3xl">Skills</h1>
        <div className="py-10 flex flex-col gap-10 w-full">
          {skillsData.map((category, index) => (
            <div key={index}>
              <h2 className="text-2xl font-semibold mb-5">
                {category.category}
              </h2>
              <div className="grid grid-cols-6 max-md:grid-cols-2 max-[300px]:grid-cols-1 max-lg:grid-cols-3 gap-10 text-center">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className={`skill-card flex flex-col items-center rounded-md w-full px-10 py-5 skill-div cursor-pointer ${
                      theme === "dark" ? "shadow-lg shadow-blue-800" : ""
                    }`}
                  >
                    <div className="skill-card-inner">
                      <div className="skill-card-front">{skill.icon}</div>
                      <div className="skill-card-back">{skill.desc}</div>
                    </div>
                    <h2 className="text-xl ">{skill.name}</h2>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
