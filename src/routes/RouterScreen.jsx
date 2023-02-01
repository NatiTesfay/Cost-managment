import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/pages/home/Home";
import AboutMe from "../components/pages/aboutMe/AboutMe";
import Contact from "../components/pages/contect/Contact"
import MyProjects from "../components/pages/myProjects/MyProjects";
import Skills from "../components/pages/skills/Skills";

function RoutersScreen() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="AboutMe" element={<AboutMe />} />
      <Route path="Contact" element={<Contact />} />
      <Route path="MyProjects" element={<MyProjects />} />
      <Route path="Skills" element={<Skills />} />
    </Routes>
  );
}

export default RoutersScreen;
