import { motion } from "framer-motion";
import themeHook from "./ThemeContext";
import { BiBriefcase } from "react-icons/bi";

function Experience() {
  const { theme } = themeHook();

  const experiences = [
    {
      title: "SDE - Intern",
      company: "Helper4U Services LLP",
      date: "Dec 2023 - Aug 2024",
      responsibilities: [
        "Developed frontend and backend of websites using Next.js and Express.js.",
        "Created 150+ REST APIs.",
        "Enhanced code performance through optimization techniques.",
        "Implemented responsive web design principles for seamless UX.",
      ],
    },
   
    {
      title: "Web Developer",
      company: "Suvidha Foundation",
      date: "Mar 2024 - Apr 2024",
      responsibilities: [
        "Developed a website for the NGO.",
        "Refactored codebase for maintainability.",
        "Built website using HTML, CSS and Bootstrap.",
        "Defined features with product managers.",
      ],
    },
  ];

  return (
    <div
      className={`w-full py-20 flex justify-center ${
        theme === "dark"
          ? "bg-gradient-to-tr from-black to-slate-900 text-white"
          : "bg-gradient-to-tr from-[#c6deef] via-[#e8e8ec] to-[#a9d0eb] text-black"
      }`}
      id="experience"
    >
      <div className="max-w-6xl w-full px-4">
        <h1 className="font-bold text-3xl text-center mb-10">Experience</h1>

        {/* Timeline Container */}
        <div className="relative flex flex-col max-sm:flex-row max-sm:w-[100%] max-sm:justify-center items-center">
          {/* Timeline Line */}
          <div className={`absolute max-sm:hidden top-0 left-0 w-full  h-1 max-sm:w-1 max-sm:h-[70vh] bg-gray-300`}></div>

          {/* Timeline Events */}
          <div className="flex max-sm:flex-col gap-5 justify-between items-start w-full overflow-x-auto no-scrollbar mt-4">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative flex flex-col items-center w-[300px] max-sm:w-[100%] sm:mx-4"
              >
                {/* Timeline Point */}
                <div
                  className={`absolute max-sm:hidden w-6 h-6 max-sm:left-[-12px] top-[-12px] max-sm:top-32  rounded-full border-4 ${
                    theme === "dark"
                      ? "bg-blue-400 border-gray-900"
                      : "bg-blue-500 border-white"
                  }`}
                ></div>

                {/* Experience Card */}
                <div
                  className={`mt-8 p-5 shadow-lg rounded-lg w-full   ${
                    theme === "dark"
                      ? "bg-gray-800 text-white border border-gray-700"
                      : "bg-white text-black border border-gray-300"
                  }`}
                >
                  <h2 className="text-xl font-semibold flex items-center gap-2">
                    <BiBriefcase
                      className={`${
                        theme === "dark" ? "text-blue-400" : "text-blue-500"
                      }`}
                    />
                    {exp.title}
                  </h2>
                  <p className="text-sm text-gray-500">{exp.date}</p>
                  <span className="font-medium">{exp.company}</span>
                  <ul className="mt-2 text-sm">
                    {exp.responsibilities.map((task, i) => (
                      <li key={i} className="leading-relaxed">
                        • {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
