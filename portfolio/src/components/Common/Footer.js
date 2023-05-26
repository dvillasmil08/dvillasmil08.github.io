import React from "react";
import Skills from "../Skills/Skills";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-links">
        <ul className="footer-nav-links-list">

          <li className="footer-nav-link-item">
            <Link to="/">Home</Link>
          </li>

          <li className="footer-nav-link-item">
            <Link to="about">About</Link>
          </li>

          <li className="footer-nav-link-item">
            <Link to="projects">Projects</Link>
          </li>

          <li className="footer-nav-link-item">
            <Link to="hobbies">Hobbies</Link>
          </li>

          <li className="footer-nav-link-item">
            <Link to="contact"></Link>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default Footer;