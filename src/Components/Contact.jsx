import React, { useState } from "react";
import { CgMail } from "react-icons/cg";
import { FiPhone } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import toast from "react-hot-toast";
import BeatLoader from "react-spinners/BeatLoader";
import { motion } from "framer-motion";
import themeHook from "./ThemeContext";
import axios from "axios";

function Contact() {
  const { theme } = themeHook();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMessage] = useState("");
  const [loader, setLoader] = useState(false);
  const urlBackend = import.meta.env.VITE_BACKEND_API;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    const data = { name, email, message: msg };

    try {
      const response = await axios.post(`${urlBackend}/api/contactUs`, data);
      response.data.status ? toast.success(response.data.message) : toast.error(response.data.message);
    } catch (error) {
      toast.error(`Error: ${error}`);
    }
    setName(""), setEmail(""), setMessage(""), setLoader(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`w-full min-h-screen flex flex-col justify-center items-center px-4 md:px-20 pt-10 ${
        theme === "dark"
          ? "bg-gradient-to-tr from-black to-slate-900 text-white"
          : "bg-gradient-to-tr from-[#c6deef] via-[#e8e8ec] to-[#a9d0eb] text-black"
      }`}
      id="contact"
    >
      <h1 className="font-bold text-4xl text-center mb-10">Contact Me</h1>
      <form
        
        className="backdrop-blur-lg rounded-lg p-8 shadow-lg max-w-lg w-full"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={name}
          className={`w-full p-3 mb-4 rounded-md border border-cyan-500 bg-transparent ${theme === 'dark' ? 'placeholder-gray-300 text-white':'placeholder:black text-black'} focus:outline-none focus:ring-2 focus:ring-cyan-400`}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          value={email}
          className={`w-full p-3 mb-4 rounded-md border border-cyan-500 bg-transparent ${theme === 'dark' ? 'placeholder-gray-300 text-white':'placeholder:black text-black'}  focus:outline-none focus:ring-2 focus:ring-cyan-400`}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          required
        />
        <textarea
          rows={5}
          value={msg}
          className={`w-full p-3 mb-4 rounded-md border border-cyan-500 bg-transparent ${theme === 'dark' ? 'placeholder-gray-300 text-white':'placeholder:black text-black'}  focus:outline-none focus:ring-2 focus:ring-cyan-400`}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter message here.."
          required
        ></textarea>
        <button
          type="submit"
          className="w-full flex justify-center items-center gap-2 py-3 bg-cyan-400 text-black font-semibold rounded-md shadow-md hover:bg-cyan-600 transition duration-300"
        >
          {loader ?  <BeatLoader color="#fff" size={20} />:'Send Message'}
        </button>
      </form>

      <div className="flex items-center gap-6 mt-8 text-cyan-500">
        <a href="mailto:shivrajsk0124@gmail.com" target="_blank" className="hover:text-red-500 transition">
          <CgMail size={40} />
        </a>
        <a href="https://www.linkedin.com/in/shivraj-kolwankar" target="_blank" className="hover:text-blue-500 transition">
          <BsLinkedin size={28} />
        </a>
        <a href="https://github.com/shivraj0124" target="_blank" className="hover:text-violet-900 transition">
          <AiFillGithub size={36} />
        </a>
        <a href="tel:+919356455929" target="_blank" className="hover:text-green-500 transition">
          <FiPhone size={32} />
        </a>
      </div>
    </motion.div>
  );
}

export default Contact;
