import React from "react";
import "./header.css";

import { Link , BrowserRouter } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar">
        <div className="brand-title">Resources <br/>all-stacked</div>
        <a href="#" className="toggle-button">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>
        <div className="navbar-links">
      <ul>
      
          <li className="home item">
            <a href="/">Home</a>
          </li>

          <li className="item">
            <a href="/cpp">C++</a>
          </li>

          <li className="blog item">
            <a href="/blog">Blog</a>
          </li>
          <li className="item search-con">
          <input type="search" className="search" id="search" />
          </li>
          <li className="login item">
            <a href="/login">Login/Signup</a>
          </li>
        
      </ul>
      </div>
    </nav>
  );
}


export default Header;
