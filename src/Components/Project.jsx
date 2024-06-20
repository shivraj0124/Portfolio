import it_dept from "../assets/it-dept.png";
import byteStudy from "../assets/bytestudy.png";
import nasaAE from "../assets/nasa-ae-24.png";
import imageGallery from "../assets/image-gallery.png";
import muxic from "../assets/muxic.png";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { BiLink } from "react-icons/bi";
import themeHook from "./ThemeContext";
import { useNavigate } from "react-router-dom";
function Project() {
  const { theme } = themeHook();
  const navigate = useNavigate();
  return (
    <div
      className={`w-[100%] px-4 md:px-[10%] py-10 ${
        theme === "dark" ? "text-white bg-[#121212]" : "text-black bg-white"
      } `}
      id="project"
    >
      <div className="flex flex-col  justify-center items-center">
        <h1 className="font-bold text-3xl ">Projects</h1>

        <div className="py-24 grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 max-lg:grid-cols-3 gap-10 ">
          <div
            className={`flex flex-col justify-between gap-2 p-4 rounded-xl shadow-xl   ${
              theme === "dark" ? "bg-[#262525]" : "bg-white border"
            }`}
          >
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center gap-2">
                <div>
                  <span
                    className={
                      theme === "dark"
                        ? "text-white text-xl p-0"
                        : "text-black text-xl p-0"
                    }
                  >
                    IT-DEPT
                  </span>
                </div>
                <div className="flex flex-row gap-x-2">
                  <a
                    href="https://information-technology.netlify.app"
                    target="_blank"
                  >
                    <BiLink className="hover:text-blue-700  " size={24} />
                  </a>
                  <a
                    href="https://github.com/shivraj0124/it_dept_frontend"
                    target="_blank"
                  >
                    <AiFillGithub
                      className="hover:text-blue-700    "
                      size={24}
                    />
                  </a>
                </div>
              </div>
              <div>
                <img
                  className={`rounded-md ${theme === "dark" ? "" : "border"}`}
                  src={it_dept}
                />
              </div>
              <div>
                <span className="text-gray-500 text-sm md:text-lg font-semibold">
                  Description
                </span>
                <div className="">
                  The website of IT Department of Government Polytechnic Mumbai,
                  which includes all the information about department and it
                  provides dashboard for Admin ,Faculties and Students.
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-gray-500 text-sm md:text-lg font-semibold">
                Technologies Used
              </span>
              <div className="flex text-[12px]  gap-1">
                <div className="p-1 px-2 border border-gray-600 rounded-md w-max">
                  React
                </div>
                <div className="p-1 px-2 border border-gray-600 rounded-md w-max">
                  Tailwind Css
                </div>
                <div className="p-1 px-2 border border-gray-600 rounded-md w-max">
                  Node js
                </div>
                <div className="p-1 px-2 border border-gray-600 rounded-md w-max">
                  Mongo DB
                </div>
              </div>
            </div>
          </div>

          <div
            className={`flex flex-col justify-between gap-2 p-4 rounded-xl shadow-xl  ${
              theme === "dark" ? "bg-[#262525]" : "bg-white border"
            }`}
          >
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center gap-2">
                <div>
                  <span
                    className={
                      theme === "dark"
                        ? "text-white text-xl p-0"
                        : "text-black text-xl p-0"
                    }
                  >
                    ByteStudy
                  </span>
                </div>
                <div className="flex flex-row gap-x-2">
                  <a href="https://bytestudy.netlify.app" target="_blank">
                    <BiLink className="hover:text-blue-700  " size={24} />
                  </a>
                  <a
                    href="https://github.com/shivraj0124/ByteStudy"
                    target="_blank"
                  >
                    <AiFillGithub
                      className="hover:text-blue-700    "
                      size={24}
                    />
                  </a>
                </div>
              </div>
              <div>
                <img
                  className={`rounded-md ${theme === "dark" ? "" : "border"}`}
                  src={byteStudy}
                />
              </div>
              <div>
                <span className="text-gray-500 text-sm md:text-lg font-semibold">
                  Description
                </span>
                <div className="">
                  We build this website for Government Polytechnic Mumbai
                  Students. Here we provide notes, question papers, experiments
                  of all subjects of each semester.
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-gray-500 text-sm md:text-lg font-semibold">
                Technologies Used
              </span>
              <div className="flex text-[12px]  gap-1">
                <div className="p-1 px-2 border border-gray-600 rounded-md w-max">
                  React
                </div>
                <div className="p-1 px-2 border border-gray-600 rounded-md w-max">
                  Tailwind Css
                </div>
                <div className="p-1 px-2 border border-gray-600 rounded-md w-max">
                  Node js
                </div>
                <div className="p-1 px-2 border border-gray-600 rounded-md w-max">
                  Mongo DB
                </div>
              </div>
            </div>
          </div>

          <div
            className={`flex flex-col justify-between gap-2 p-4 rounded-xl shadow-xl  ${
              theme === "dark" ? "bg-[#262525]" : "bg-white border"
            }`}
          >
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center gap-2">
                <div>
                  <span
                    className={
                      theme === "dark"
                        ? "text-white text-xl p-0"
                        : "text-black text-xl p-0"
                    }
                  >
                    NASA AE
                  </span>
                </div>
                <div className="flex flex-row gap-x-2">
                  <a href="https://nasa-ae-24.netlify.app" target="_blank">
                    <BiLink className="hover:text-blue-700  " size={24} />
                  </a>
                  <a
                    href="https://github.com/shivraj0124/NASA-AE"
                    target="_blank"
                  >
                    <AiFillGithub
                      className="hover:text-blue-700    "
                      size={24}
                    />
                  </a>
                </div>
              </div>
              <div>
                <img
                  className={`rounded-md ${theme === "dark" ? "" : "border"}`}
                  src={nasaAE}
                />
              </div>
              <div>
                <span className="text-gray-500 text-sm md:text-lg font-semibold">
                  Description
                </span>
                <div className="">
                  This website contains data fetch from NASA APIs.It contains
                  Image Library by NASA and Astronomy Picture of th Day
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-gray-500 text-sm md:text-lg font-semibold">
                Technologies Used
              </span>
              <div className="flex text-[12px]  gap-1">
                <div className="p-1 px-2 border border-gray-600 rounded-md w-max">
                  React
                </div>
                <div className="p-1 px-2 border border-gray-600 rounded-md w-max">
                  Tailwind Css
                </div>
              </div>
            </div>
          </div>

          <div
            className={`flex flex-col justify-between gap-2 p-4 rounded-xl shadow-xl  ${
              theme === "dark" ? "bg-[#262525]" : "bg-white border"
            }`}
          >
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center gap-2">
                <div>
                  <span
                    className={
                      theme === "dark"
                        ? "text-white text-xl p-0"
                        : "text-black text-xl p-0"
                    }
                  >
                    imageGallery
                  </span>
                </div>
                <div className="flex flex-row gap-x-2">
                  <a href="https://img-gallery-five.vercel.app" target="_blank">
                    <BiLink className="hover:text-blue-700  " size={24} />
                  </a>
                  <a
                    href="https://github.com/shivraj0124/ImageSearcher-App"
                    target="_blank"
                  >
                    <AiFillGithub className="hover:text-blue-700 " size={24} />
                  </a>
                </div>
              </div>
              <div>
                <img
                  className={`rounded-md ${theme === "dark" ? "" : "border"}`}
                  src={imageGallery}
                />
              </div>
              <div>
                <span className="text-gray-500 text-sm md:text-lg font-semibold">
                  Description
                </span>
                <div className="">
                  This is image search app ,You can search images of nature, smartphones, computers, sports, images, etc and you can also download images.
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-gray-500 text-sm md:text-lg font-semibold">
                Technologies Used
              </span>
              <div className="flex text-[12px]  gap-1">
                <div className="p-1 px-2 border border-gray-600 rounded-md w-max">
                  React
                </div>
                <div className="p-1 px-2 border border-gray-600 rounded-md w-max">
                  Bootstrap
                </div>
              </div>
            </div>
          </div>

          <div
            className={`flex flex-col justify-between gap-2 p-4 rounded-xl shadow-xl  ${
              theme === "dark" ? "bg-[#262525]" : "bg-white border"
            }`}
          >
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center gap-2">
                <div>
                  <span
                    className={
                      theme === "dark"
                        ? "text-white text-xl p-0"
                        : "text-black text-xl p-0"
                    }
                  >
                    Muxic
                  </span>
                </div>
                <div className="flex flex-row gap-x-2">
                  <a href="https://music-app-sk.netlify.app" target="_blank">
                    <BiLink className="hover:text-blue-700  " size={24} />
                  </a>
                  <a
                    href="https://github.com/shivraj0124/Music-App"
                    target="_blank"
                  >
                    <AiFillGithub className="hover:text-blue-700 " size={24} />
                  </a>
                </div>
              </div>
              <div>
                <img
                  className={`rounded-md ${theme === "dark" ? "" : "border"}`}
                  src={muxic}
                />
              </div>
              <div>
                <span className="text-gray-500 text-sm md:text-lg font-semibold">
                  Description
                </span>
                <div className="">
                  This is a website where you can listen different types of song like Hindi, English, Marathi
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-gray-500 text-sm md:text-lg font-semibold">
                Technologies Used
              </span>
              <div className="flex text-[12px]  gap-1">
                <div className="p-1 px-2 border border-gray-600 rounded-md w-max">
                  React
                </div>
                <div className="p-1 px-2 border border-gray-600 rounded-md w-max">
                  Bootstrap
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Project;
