import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Education from "./Education/Education";
import Intrest from "./Intrests/Intrest";
import ProgrammingSkills from "./ProgrammingSkills/ProgrammingSkill";
import Projects from "./Projects/Project";
import WorkHistory from "./WorkHistory/WorkHistory";
import ResumeNav from "./ResumeNav/ResumeNav";
import "./Resume.css";
import EducationSummary from "./Education/EducationSummary";

export default function Resume() {
  return (
    <div className="body-div">
      <div className="resume-container">
        <h1>Resume</h1>
        <p>My Formal Bio Data</p>
      </div>
      <div className="navigation-resume">
        <div className="resume-navigation">
          <ResumeNav />

          <Routes>
            <Route path="/" element={<EducationSummary/>} />
            <Route path="/Education" element={<EducationSummary/>} />
            <Route path="/WorkHistory" element={<WorkHistory />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/ProgrammingSkills" element={<ProgrammingSkills />} />
            <Route path="/Intrest" element={<Intrest />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
