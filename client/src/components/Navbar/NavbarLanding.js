import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class NavbarLanding extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" role="navigation" id="navbarlanding">
          <div className="container">
            <h4>Dungeon Master Manager</h4>
            <button className="btn login-btn">
              <Link to="/login">Login</Link>
            </button>
          </div>
        </nav>
      </div>
      
    );
  }
}

export default NavbarLanding;
