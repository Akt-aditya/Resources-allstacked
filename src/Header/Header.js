import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

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
      
          <Link className="home item" to="/">
            <li className="item home">Home</li>
          </Link>

          <Link  to="/store">
            <li className="item store">Store</li>
          </Link>

          <Link to="/blog" >
            <li className="blog item">Blog</li>
          </Link>
          <li className="item search-con">
          <input type="search" className="search" id="search" />
          </li>
          
          <Link to="/profile" >
            <li className="login item">Profile</li>
          </Link>
        
      </ul>
      </div>
      
    </nav>
  

);
}


export default Header;
