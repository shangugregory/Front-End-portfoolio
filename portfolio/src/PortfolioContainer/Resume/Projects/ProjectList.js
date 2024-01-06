import React from "react";
import "./Project.css";
export default function ProjectList(props) {
  return (
    <>
      {props.project.map((projects, index) => (
        <div className="project-list-container">
          <div className="project">
            <div className="project-title">
              <h1 className="project-title-text">{projects.title}</h1>
            </div>
            <div className="project-btn">
              <button className="btn highlighted-btn btn-roject"><a href={projects.link}>View Project on Github</a></button>
            </div>
          </div>
          <div>
            <p className="project-desc"><span className="project-tech">Technology used: {projects.technology}. </span>{projects.description}</p>
          </div>
        </div>
      ))}
    </>
  );
}
