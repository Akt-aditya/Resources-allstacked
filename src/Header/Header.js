import React from "react";
import "../style.css";
import { NavLink } from "react-router-dom";

const NavList = () => {
  return (
    <ul>
      <NavLink className="home item" to="/">
        <li className="item home">Home</li>
      </NavLink>

      <NavLink to="/store">
        <li className="item store">Store</li>
      </NavLink>

      <NavLink to="/blog">
        <li className="blog item">Blog</li>
      </NavLink>
      <li className="item search-con">
        <input type="search" className="search" id="search" />
      </li>

      <NavLink to="/profile">
        <li className="login item">Profile</li>
      </NavLink>
    </ul>
  );
};

function Header() {
  const [hamClick,setHamClick] = React.useState(false);
  const width = window.innerWidth;
  console.log(width)
  const handleHam = () => {
    if(hamClick){
      setHamClick(false)
    }
    else{
      setHamClick(true)
    }
  }
  return (
    <nav className="navbar">
      <div className="brand-title">
        Resources <br />
        all-stacked
      </div>
      <div className="bars" onClick={handleHam} >
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </div>
      <div className="navbar-links" >
       { width < 700 && hamClick ? <NavList/> : "" }
       {width > 700 ? <NavList/> : "" }
     </div>
    </nav>
  );
}

export default Header;
