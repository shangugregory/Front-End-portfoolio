import React from "react";
import "./Profile.css"
import Typical from "react-typical";
import './Profile.css'
export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-detail">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/profile.php?id=100073303361817">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-google-plus-square"></i>
              </a>
              <a href="https://www.instagram.com/gregorymukite/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://www.youtube.com/channel/UCvskwxv3TYrNuoqCIz041kQ">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="https://twitter.com/GregoryMukite">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="profile-detail-name">
            <span className="primary-text">
              {""}
              Hello, I'M{" "}
              <span className="highlighted-text">Gregory Mukite</span>
            </span>
          </div>

          <div className="profile-detail-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Ethusiastic developer😎",
                    1500,
                    "Full Stack Developer ⌨🖱",
                    1500,
                    "Front-End Developer 💻",
                    1500,
                    "Cross platform v 🖥",
                    1500,
                  ]}
                  wrapper="p"
                />
              </h1>
              <span className="profile-role-tagline">
                Am a skilled Website Designer with Experience in codding
                visually appealing and user friendy websites
              </span>
            </span>
          </div>
          <div className="profile-option">
            <button className="btn primary-btn">
              {""}
              Hire Me{" "}
            </button>

            <a href="CV.pdf" download="Gregory CV.pdf">
              <button className="btn highlighted-btn"> My Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="Profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
