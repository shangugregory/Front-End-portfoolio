import React from 'react'
import "./ResumeNav.css"
import { BrowserRouter, Routes, Route, Link, Outlet} from "react-router-dom";
export default function ResumeNav() {
  return (<>
    <div className='resume-nav-container'>
        <nav>
              <ul>
                <li>
                  <Link to="/Education">Education</Link>
                </li>
                <li>
                  <Link to="/WorkHistory">Work Experience</Link>
                </li>
                <li>
                  <Link to="/ProgrammingSkills">Programming Skills</Link>
                </li>
                <li>
                  <Link to="/Projects">Projects</Link>
                </li>
                <li>
                  <Link to="/Intrest">Intrests</Link>
                </li>
                
                
              </ul>
            </nav>
            
    </div>
    <div class="vl"></div>
</>
  )
}
