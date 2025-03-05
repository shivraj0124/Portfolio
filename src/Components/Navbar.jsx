import React, { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import themeHook from "./ThemeContext";
import { IoMoonOutline } from "react-icons/io5";
import { MdSunny } from "react-icons/md";
function Navbar() {
  const { theme, changeTheme } = themeHook();
  let [open, setOpen] = useState(false);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToExperience = () => {
    const aboutSection = document.getElementById("experience");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToSkills = () => {
    const aboutSection = document.getElementById("skills");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToEducation = () => {
    const aboutSection = document.getElementById("education");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToProjects = () => {
    const aboutSection = document.getElementById("project");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    const aboutSection = document.getElementById("contact");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  };

  const handleChange = () => {
    changeTheme();
  };
  return (
    <>
      {/* New */}
      <div className="shadow-md w-full ">
        <div
          className={`md:flex items-center justify-between ${
            theme === "dark" ? "" : ""
          } py-4 max-md:px-4 md:px-[10%] z-20`}
        >
          <div className="font-bold text-3xl cursor-pointer flex items-center  text-cyan-600 z-20">
            Shivraj
          </div>

          <div
            onClick={() => setOpen(!open)}
            className={`${
              theme === "dark"
                ? "text-white "
                : "text-black "
            } text-3xl absolute right-8 top-6 cursor-pointer md:hidden`}
          >
            {open ? <MdOutlineClose size={20} /> : <HiOutlineMenu size={20} />}
          </div>

          <ul
            className={`md:flex md:items-center  absolute md:static  md:z-auto z-10 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-300 ease-in ${
              theme === "dark" ? "text-white max-md:text-white max-md:bg-gradient-to-tr from-black  to-slate-900" : "text-black max-md:text-black  max-md:bg-gradient-to-tr from-[#c6deef] via-[#e8e8ec] to-[#a9d0eb] "
            } ${open ? "top-16 " : "top-[-490px]"}`}
          >
            <li className="md:ml-8 md:my-0 my-2">
              <a className="  hover:text-cyan-600 duration-500 cursor-pointer" onClick={() => setOpen(!open)}>
                Home
              </a>
            </li>
            <li className="md:ml-8 md:my-0 my-2">
              <a
                className="  hover:text-cyan-600 duration-500 cursor-pointer"
                onClick={() => {scrollToAbout()
                  setOpen(!open)
                }}
              >
                About
              </a>
            </li>
            <li className="md:ml-8 md:my-0 my-2">
              <a
                className="  hover:text-cyan-600 duration-500 cursor-pointer"
                onClick={() => {scrollToExperience()
                  setOpen(!open)
                }}
              >
                Experience
              </a>
            </li>
            <li className="md:ml-8 md:my-0 my-2">
              <a
                className="  hover:text-cyan-600 duration-500 cursor-pointer"
                onClick={() => {scrollToSkills()
                  setOpen(!open)
                }}
              >
                Skills
              </a>
            </li>
            <li className="md:ml-8 md:my-0 my-2">
              <a
                className="  hover:text-cyan-600 duration-500 cursor-pointer"
                onClick={() => {scrollToEducation()
                  setOpen(!open)
                }}
              >
                Education
              </a>
            </li>
            <li className="md:ml-8 md:my-0 my-2">
              <a
                className="  hover:text-cyan-600 duration-500 cursor-pointer"
                onClick={() => {scrollToProjects()
                  setOpen(!open)
                }}
              >
                Projects
              </a>
            </li>
            <li className="md:ml-8 md:my-0 my-2">
              <a
                className="  hover:text-cyan-600 duration-500 cursor-pointer"
                onClick={() => {scrollToContact()
                  setOpen(!open)
                }}
              >
                Contact
              </a>
            </li>
          </ul>
          <div
            className={`cursor-pointer rotate-100 transition-all duration-300 ease-in ${
              theme === "dark" ? "text-white" : "text-black"
            } max-md:absolute max-md:right-8 max-md:top-20`}
            onClick={handleChange}
          >
            {theme === "dark" ? (
              <MdSunny size={24} />
              ) : (
              <IoMoonOutline size={24} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
