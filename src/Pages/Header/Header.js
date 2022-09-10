import React from "react";
import "../../CSS/Header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <div className="headerContainer">
        <h1 className="logo">BIOCWT</h1>
        <div className="menuButtonCont">
          <ul className="unList">
            <li>
              <Link to="/" className="menuButton">
                Home
              </Link>
            </li>
            <li>
              <Link to="/Gallery" className="menuButton">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/Prices" className="menuButton">
                Prices
              </Link>
            </li>
            <li>
              <Link to="/About" className="menuButton">
                About
              </Link>
            </li>
            <li>
              <Link to="/Contact" className="menuButton">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
