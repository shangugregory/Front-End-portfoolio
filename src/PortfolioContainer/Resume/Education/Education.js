import React, { useEffect, useState } from "react";
import "./Education.css";
import axios from "axios";


export default function Education(props) {

  const [data, setData]= useState([]);
  useEffect(()=>{
    const fetchEducation = async()=>{
      try{
        const response = await axios.get("http://localhost:8000/resume/education");
        setData(response.data);
      }catch(error){
        console.error("error Fetching data:", error)
      }
    };
    fetchEducation();
  }, []);


  return (
    <>
      {data.map((education) => (
        <div className="education-container">
          <div className="edu-div1">
            <div className="edu-div2">
              <h1 className="education-level">{education.institution_name} </h1>
            </div>
            <div className="btn-div">
              <p className="div-date">From: {education.year_joined} to: {education.year_Ended}</p>
            </div>
          </div>
          <div className="edu-div3">
            <p className="div-desc">{education.certificate_earned}</p>
            <p className="div-desc">{education.grade_attained}</p>
          </div>
        </div>
      ))}
    </>
  );
}
