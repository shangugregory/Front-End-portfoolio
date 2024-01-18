import "./App.css";
import AppNav from "./PortfolioContainer/Navigation/AppNav";
import Home from "./PortfolioContainer/Home/Home";
import AboutMe from "./PortfolioContainer/AboutMe/AboutMe";
import Resume from "./PortfolioContainer/Resume/Resume";
import ContactMe from "./PortfolioContainer/ContactMe/ContactMe";
import { Link, Element } from "react-scroll";

function App() {
  return (
    <div>
      
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
      <Element name="ContactMe">
        <ContactMe />
      </Element>  
    </div>
  );
}

export default App;
