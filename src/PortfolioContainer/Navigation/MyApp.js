import React from "react";
import { Link, Element } from "react-scroll";
import AppNav from "./AppNav";
import Home from "../Home/Home";
import AboutMe from "../AboutMe/AboutMe";
import Resume from "../Resume/Resume";
import Testimonial from "../Testmonial/Testimonial";
import ContactMe from "../ContactMe/ContactMe";

const MyApp = () => {
  return (
    <>
      <AppNav />
      <Link to="Home" smooth={true} duration={500}>
        Home
      </Link>
      <Link to="AboutMe" smooth={true} duration={500}>
        About Me
      </Link>
      <Link to="Resume" smooth={true} duration={500}>
        Resume
      </Link>
      <Link to="Testimonials" smooth={true} duration={500}>
        Testimonials
      </Link>
      <Link to="ContactMe" smooth={true} duration={500}>
        Contact Me
      </Link>

      <Element name="Home">
        <Home />
      </Element>
      <Element name="AboutMe">
        <AboutMe />
      </Element>
      <Element name="Resume">
        <Resume />
      </Element>
      <Element name="Testimonials">
        <Testimonial />
      </Element>
      <Element name="ContactMe">
        <ContactMe />
      </Element>
    </>
  );
};

export default MyApp;
