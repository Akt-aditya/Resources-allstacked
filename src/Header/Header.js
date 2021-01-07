import React from "react";
import "./header.css";

import { Link , BrowserRouter as Router } from "react-router-dom";

function Header() {
  return (
    <nav>
      <ul className="container">
        <Router>
          <li className="home item">
            <a href="/">Home</a>
          </li>

          <li className="item">
            <a href="/cpp">C++</a>
          </li>

          <li className="blog item">
            <a href="/blog">Blog</a>
          </li>
          <input type="search" className="search item" id="search" />

          <li className="login item">
            <a href="/login">Login/Signup</a>
          </li>
        </Router>
      </ul>
    </nav>
  );
}

export default Header;
