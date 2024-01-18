import React, { useEffect, useState } from "react";
import "./WorkHistory.css";
import axios from "axios";

export default function WorkList() {
  const [data, setData] = useState([]);
  useEffect(()=>{
    const fetchData = async() =>{
      try{
        const response= await axios.get("http://localhost:8000/resume/work/");
        setData(response.data)
      }catch (error){
        console.error("error fetching Data", error);
      }
    };
    fetchData()
  },[]);
  return (
    <>{data.map((work) =>(
      <div className="work-container">
        <h1>Work Experience</h1>
        <div className="work-div">
          <h2 className="work_header"><span className="span">Organization </span>:{work.company}</h2>
          <div>
            <h3 className="job-title">{work.work_title}</h3>
            <h3 className="job-date">From: {work.start_date} To:{work.end_date}</h3>
          </div>
        </div>
      </div>
    ))}
      
    </>
  );
}
