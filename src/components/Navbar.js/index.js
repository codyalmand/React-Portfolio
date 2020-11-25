  
import React from "react";
import { Link } from "react-router-dom";
import "./style.css"


function Navbar() {
    return (
        <div>
            <li className="nav-item active">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/portfolio">Portfolio</Link>
            </li>
        </div>
    );
}

export default Navbar;