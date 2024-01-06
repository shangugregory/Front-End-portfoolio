import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import "./ProgrammingSkill.css";



export default function ProgList(props) {
  return (
    <>
    <div className="prog">
      {props.skills.map((skill, index) => (
        
          <div className="container-div">
            <h1 className="skill-title"># {skill.language}</h1>
            <ProgressBar
              completed={skill.progress}
              bgColor="#ff5823"
              animateOnRender={true}
              className="progress-bar"
            />
        </div>
      ))}
      </div>
    </>
  );
}
