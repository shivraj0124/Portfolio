import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Education from "./Components/Education";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { Toaster } from "react-hot-toast";
import { ThemeContextProvider } from "./Components/ThemeContext";
import { BrowserRouter } from "react-router-dom";
import { motion, useScroll } from "framer-motion";
import Experience from "./Components/Experience";
import themeHook from "./Components/ThemeContext";


function AppContent() {
  const { theme } = themeHook();
  const { scrollYProgress } = useScroll();

  return (
    <div className={`${theme === "dark" ? "bg-gradient-to-tr from-black  to-slate-900 text-white" : "inset-0 bg-gradient-to-tr from-[#c6deef] via-[#e8e8ec] to-[#a9d0eb]  text-black"} `}>
      {/* Scroll Indicator */}
      <motion.div
        className="z-40 fixed top-0 left-0 right-0 h-1 bg-cyan-500 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <Navbar />
      <Home />
      <About />
      <Experience />
      <Skills />
      <Project />
      <Education />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}

function App() {
  return (
    <ThemeContextProvider>
      <AppContent />
    </ThemeContextProvider>
  );
}

export default App;
