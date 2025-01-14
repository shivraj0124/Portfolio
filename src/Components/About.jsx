import React from "react";
import img1 from "../assets/home-image.png";
import resume from "../assets/Shivraj_Kolwankar_Web_Developer_Resume.pdf";
import { saveAs } from "file-saver";
import themeHook from "./ThemeContext";
function About() {
  const { theme, changeTheme } = themeHook();
  const downloadResume = () => {
    saveAs(resume, "Shivraj Kolwankar Resume");
  };
  return (
    <div
      className={`w-[100%] max-md:px-4 px-[10%] max-md:py-5 md:py-28 z-[-2] ${
        theme === "dark" ? "text-white bg-[#121212]" : "text-black bg-white"
      }`}
      id="about "
    >
      <div className="flex flex-row-reverse max-md:flex-col justify-center items-center">
        <div className="w-[100%] flex flex-col justify-start items-start">
          <h1 className="font-bold text-4xl">About Me</h1>
          <h1 className="text-2xl  font-semibold text-cyan-700">
            Web Developer
          </h1>
          <p>
            Hello !!! I am Shivraj Santosh Kolwankar. Currently pursuing Bachelor of Technology
            in Information Technology from Veermata Jijabai Technological Institute. I am
            very much interested in programming and web development. Enthusiastic
            to improve my knowledge and learn new Technolgies. Programming
            Language and Frameworks known: Javascript React js Node js Express
            js Python C C++ Java.
          </p>
          <div className="text-sm mt-5 flex flex-row gap-4 ">
            <button
              className="py-1 px-3 hover:bg-cyan-500 hover:text-white border-2 border-cyan-500 text-cyan-600 font-semibold rounded-md"
              onClick={downloadResume}
            >
              Download Resume
            </button>
          </div>
        </div>

        <div className="w-[100%]">
          <img className="w-[100%]" src={img1} alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
