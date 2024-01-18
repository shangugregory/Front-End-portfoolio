import React from "react";
import "./Contactme.css";
function ContactMe() {
  return (
    <div contactme-form-div1>
      <div className="contactme-header">
        <h1>Contact me</h1>
      </div>
      <div className="contactme-div">
        <div className="contactme-form-div1">
          <div className="colz-icon">
            <ul>
              <li>
                <a href="https://www.facebook.com/profile.php?id=100073303361817">
                  <i className="fa fa-facebook-square"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-google-plus-square"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/gregorymukite/">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UCvskwxv3TYrNuoqCIz041kQ">
                  <i className="fa fa-youtube-square"></i>
                </a>
              </li>
              <li>
                <li>

                <a href="https://twitter.com/GregoryMukite">
                  <i className="fa fa-twitter"></i>
                </a>
                </li>
              </li>
            </ul>
          </div>

          <h1 className="contact-header">Send Your Emails</h1>

          <div className="mails-img"></div>
        </div>
        <div className="contactme-form-div">
          <form>
            <label>Name</label>
            <input type="text"></input>
            <label>Email</label>
            <input type="email"></input>
            <label>Message</label>
            <textarea type="text" />
          </form>
          <div className="div-btn">
            <button type="submit" className="send-btn btn primary-btn">
              Send <i className="fa fa-kite"></i>
            </button>

            <a href="CV.pdf" download="Gregory CV.pdf">
              <button className="btn highlighted-btn"> My Resume</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
