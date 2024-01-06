import React, { useState } from "react";
import ProjectList from "./ProjectList";

export default function Project() {
  const [projects, setProjects] = useState([
    {
      title: "Personal Portfolio Website",
      technology:"React Js, Bootstrap",
      description:"A Personal Website to showcase all my details and projects at one place",

      link: "https://www.auctioneer.com/",
    },
    {
      title: "Auctioneer Website",
      technology:"PHP, Mysql,",
      description:
        "This is web based-based application. Using this Aplication, bidders can be connected to the specific sellers who will offer them necessary information and or give hand to sell their items to them.",

      link: "https://www.auctioneer.com/",
    },
    {
      title: "Live Discusion Forum",
      technology:"Socket.i0, ExpressJS and Node",
      description:
        "This is web based-based application. Using this Application users can join a room and hold discussion for as long as they want, for users to communicate they need to be in the same room.",
      link: "https://www.auctioneer.com/",
    },
  ]);

  return(
  <div>
    <ProjectList project={projects}/>
  </div>
  );
}
