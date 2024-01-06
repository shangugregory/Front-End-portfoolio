import "./App.css";
import AppNav from "./PortfolioContainer/Navigation/AppNav";
import Home from "./PortfolioContainer/Home/Home";
import AboutMe from "./PortfolioContainer/AboutMe/AboutMe";
import Resume from "./PortfolioContainer/Resume/Resume";
import Testimonial from "./PortfolioContainer/Testmonial/Testimonial";
import ContactMe from "./PortfolioContainer/ContactMe/ContactMe";
import MyApp from "./PortfolioContainer/Navigation/MyApp";
import { Link, Element } from "react-scroll";

function App() {
  return (
    <>
      <AppNav/>

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
}

export default App;
