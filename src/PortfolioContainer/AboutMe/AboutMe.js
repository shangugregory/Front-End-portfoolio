import React, { useEffect, useState } from "react";
import gregg from "../../assets/Home/IMG_5594.jpg";
import "./AboutMe.css";
import axios from "axios";

export default function AboutMe() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/about/");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching Dta:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="div">
      {data.map((item) => (
      <div className="container">
        <h1 className="about-me">About Me</h1>
        <p className="why-choose-me">why choose me?</p>
        <div className="detail-container">
          <div className="about-photo">
            <img src={gregg} alt="Unable to Load the photo" />
          </div>
          <div className="my-description">
            
              <p key={item.id}>{item.mydesc} </p>
            

            
            <div className="buttons">
              <button className="btn primary-btn">Hire me</button>
              <a href="Gregory_Mukite.pdf" download="Gregory CV.pdf">
                <button className="btn highlighted-btn">Get My Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      ))}
    </div>
  );
}
