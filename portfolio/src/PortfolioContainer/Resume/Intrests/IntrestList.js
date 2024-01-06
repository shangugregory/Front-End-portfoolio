import React from "react";
import "./Intrest.css";

export default function IntrestList(props) {
  return (
    <>
      {props.mintrests.map((mintrest, index) => (
        <div className="intrest-container">
          <h1 className="intrest-level">{mintrest.Myintrest}</h1>
          <p className="intrest-more">{mintrest.more}</p>
        </div>
      ))}
    </>
  );
}
