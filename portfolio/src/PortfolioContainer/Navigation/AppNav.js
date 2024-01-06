import React from "react";
import "../Navigation/navigation.css";
import { Link, Element } from "react-scroll";
import AboutMe from "../AboutMe/AboutMe";
import Home from "../Home/Home";
import Resume from "../Resume/Resume";
import ContactMe from "../ContactMe/ContactMe";
import Testimonial from "../Testmonial/Testimonial";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function AppNav() {
  return (
    <div className="nav-container">
      <div className="greg-div">
        <span className="gregory">GREGORY</span>
      </div>
      <ul className="nav-ul">
        <li>
          <Link to="Home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="AboutMe" smooth={true} duration={500}>
            About Me
          </Link>
        </li>
        <li>
          <Link to="Resume" smooth={true} duration={500}>
            Resume
          </Link>
        </li>
        <li>
          <Link to="Testimonials" smooth={true} duration={500}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link to="ContactMe" smooth={true} duration={500}>
            Contact Me
          </Link>

        </li>
      </ul>

      
        
    </div>

  );
}
