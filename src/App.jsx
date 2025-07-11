import { Route, Routes, useLocation } from "react-router";
import "./App.css";
import NavBar from "./Components/Navbar/NavBar";
import { useEffect } from "react";
import About from "./Components/About/About";
import Skill from "./Components/Skill/Skill";
import Resume from "./Components/Resume/Resume";
import Project from "./Components/Project/Project";
import Contact from "./Components/Contact/Contact";

function App() {
  const location = useLocation();

  useEffect(() => {
    const sectionID = location.pathname.substring(1);

    if (sectionID) {
      const section = document.getElementById(sectionID);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="main_Wrapper">
      <NavBar />

      <div className="page_conteiner_wrapper">
        <div id="about">
          <About />
        </div>

        <div id="skill">
          <Skill />
        </div>

        <div id="resume">
          <Resume />
        </div>

        <div id="project">
          <Project />
        </div>

        <div id="contact">
          <Contact />
        </div>
      </div>

      <Routes>
        <Route path="/" element={<div />}></Route>
        <Route path="/skill" element={<div />}></Route>
        <Route path="/project" element={<div />}></Route>
      </Routes>
    </div>
  );
}

export default App;
