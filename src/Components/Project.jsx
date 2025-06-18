import it_dept from "../assets/it-dept.png";
import chatEase from "../assets/ChatEase.png";
import byteStudy from "../assets/bytestudy.png";
import nasaAE from "../assets/nasa-ae-24.png";
import imageGallery from "../assets/image-gallery.png";
import muxic from "../assets/muxic.png";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { BiLink } from "react-icons/bi";
import themeHook from "./ThemeContext";
import ProjectCard from "./ProjectCard";
import polyConnectHub from "../assets/polyconnecthub.png";
function Project() {
  const allProjects = [
    {
      id: 1,
      ProjectName: "PolyConnectHub",
      ProjectLink: "https://polyconnect-hub.netlify.app",
      GithubLink: "https://github.com/shivraj0124/Polyconnecthub",
      Image: polyConnectHub,
      Description:
        "This website is a digital platform for Polytechnic institutions, giving students easy access to a wide range of past projects to support learning, prevent duplicate work, and inspire new ideas.",
      Technologies: ["React.js", "Tailwind CSS", "Express.js", "MongoDB","Python","MUI","Cloudinary"],
    },
    {
      id: 2,
      ProjectName: "IT-DEPT",
      ProjectLink: "https://information-technology.netlify.app",
      GithubLink: "https://github.com/shivraj0124/it_dept_frontend",
      Image: it_dept,
      Description:
        "The website of IT Department of Government Polytechnic Mumbai, which includes all the information about department and it provides dashboard for Admin ,Faculties and Students.",
      Technologies: ["React.js", "Tailwind CSS", "Express.js", "MongoDB","Firebase","Cloudinary"],
    },
    {
      id: 3,
      ProjectName: "ChatEase",
      ProjectLink: "https://chatease24.netlify.app",
      GithubLink: "https://github.com/shivraj0124/chatFrontend",
      Image: chatEase,
      Description:
        "ChatEase is a real-time chat app for effortless communication. Create accounts, join groups, and enjoy instant messaging with a seamless, user-friendly interface.",
      Technologies: [
        "React.js",
        "Tailwind CSS",
        "Express.js",
        "MongoDB",
        "Socket.io",
      ],
    },
    {
      id: 4,
      ProjectName: "ByteStudy",
      ProjectLink: "https://bytestudy.netlify.app",
      GithubLink: "https://github.com/shivraj0124/ByteStudy",
      Image: byteStudy,
      Description:
        "We build this website for Government Polytechnic Mumbai Students. Here we provide notes, question papers, experiments of all subjects of each semester.",
      Technologies: ["React.js", "Tailwind CSS", "Node.js", "MongoDB"],
    },
    {
      id: 5,
      ProjectName: "NASA AE",
      ProjectLink: "https://nasa-ae-24.netlify.app",
      GithubLink: "https://github.com/shivraj0124/NASA-AE",
      Image: nasaAE,
      Description:
        "This website contains data fetch from NASA APIs. It contains Image Library by NASA and Astronomy Picture of th Day.",
      Technologies: ["React.js", "Tailwind CSS"],
    },
    {
      id: 6,
      ProjectName: "imageGallery",
      ProjectLink: "https://img-gallery-five.vercel.app",
      GithubLink: "https://github.com/shivraj0124/ImageSearcher-App",
      Image: imageGallery,
      Description:
        "This is image search app ,You can search images of nature, smartphones, computers, sports, images, etc and you can also download images.",
      Technologies: ["React.js", "Bootstrap"],
    },
    {
      id: 7,
      ProjectName: "Muxic",
      ProjectLink: "https://music-app-sk.netlify.app",
      GithubLink: "https://github.com/shivraj0124/Music-App",
      Image: muxic,
      Description:
        "This is a website where you can listen different types of song like Hindi, English, Marathi",
      Technologies: ["React.js", "Bootstrap"],
    },
  ];
  const { theme } = themeHook();
  return (
    <div
      className={`w-[100%] px-4 md:px-[10%] py-10 ${
        theme === "dark" ? "text-white " : "text-black "
      } `}
      id="project"
    >
      <div className="flex flex-col  justify-center items-center">
        <h1 className="font-bold text-3xl ">Projects</h1>

        <div className="py-24 grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 max-lg:grid-cols-2 gap-10 ">
          {allProjects.map((proj, id) => {
            return <ProjectCard project={proj} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Project;
