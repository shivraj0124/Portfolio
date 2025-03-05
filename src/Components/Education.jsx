import { BiSolidSchool } from "react-icons/bi";
import { motion } from "framer-motion";
import themeHook from "./ThemeContext";

function Education() {
  const { theme } = themeHook();

  const educationData = [
    {
      year: "2024-2027",
      collegeName: "Veermata Jijabai Technological Institute",
      educationDetails: "Bachelor of Technology in Information Technology",
    },
    {
      year: "2021-2024",
      collegeName: "Government Polytechnic, Mumbai",
      educationDetails: "Diploma in Information Technology",
    },
    {
      year: "2020-2021",
      collegeName: "Saraswati VidyaMandir Pachal",
      educationDetails: "SSC",
    },
  ];

  return (
    <div
      className={`w-[100%] h-screen flex justify-center items-center max-md:px-4 md:px-[10%] py-10 ${
        theme === "dark"
          ? "bg-gradient-to-tr from-black to-gray-900 text-white"
          : "bg-gradient-to-tr from-[#c6deef] via-[#e8e8ec] to-[#a9d0eb] text-black"
      }`}
      id="education"
    >
      <div className="w-[100%]">
        <h1 className="font-bold text-3xl text-center mb-10">Education</h1>

        {/* Timeline Container */}
        <div className="relative flex flex-col items-center ">
          {/* Vertical Line */}
          <div
            className={`absolute max-sm:left-0 w-1 h-full ${
              theme === "dark" ? "bg-blue-400" : "bg-blue-500"
            } left-1/2 transform -translate-x-1/2`}
          ></div>

          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`flex w-full items-center justify-${
                index % 2 === 0 ? "start" : "end"
              } mb-10 relative`}
            >
              {/* Connector Dot */}
              <div
                className={`absolute max-sm:left-0  left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 ${
                  theme === "dark"
                    ? "bg-blue-400 border-gray-900"
                    : "bg-blue-500 border-white"
                }`}
              ></div>

              {/* Card Left/Right */}
              <div
                className={`w-[40%] max-sm:w-[100%] max-sm:ml-10 p-5 shadow-lg rounded-lg ${
                  theme === "dark"
                    ? "bg-gray-800 text-white border border-gray-700"
                    : " text-black border border-gray-300"
                } ${
                  index % 2 === 0
                    ? "mr-auto max-sm:ml-0"
                    : "ml-auto max-sm:ml-0"
                }`}
              >
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <BiSolidSchool
                    className={`${
                      theme === "dark" ? "text-blue-400" : "text-blue-500"
                    }`}
                  />
                  {edu.collegeName}
                </h2>
                <p
                  className={`${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {edu.educationDetails}
                </p>
                <span className="text-sm text-gray-500">{edu.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Education;
