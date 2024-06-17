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
function App() {
  return (
    <>
     <BrowserRouter>
        <ThemeContextProvider>
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Education />
          <Project />
          <Contact />
          <Footer />
          <Toaster />
        </ThemeContextProvider>
        </BrowserRouter>
    </>
  );
}

export default App;
