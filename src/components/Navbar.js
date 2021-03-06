import React from 'react'
//react fontawesome 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
         
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container">

  <a className="navbar-brand " href="#">Veeresh</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FontAwesomeIcon icon={faBars} style={{color:"#fff" }}/>
    
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav  ml-auto navleft">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only"> </span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#About">About Me</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#Experience">Experience</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#Certification">Certifications</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#Portfolio">Portfolio</a>
        
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#Contact">Contact me</a>
      </li>
       
    </ul>
     
  </div>
  </div>
</nav>
 
    )
}

export default Navbar

