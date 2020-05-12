import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class NavbarLogin extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" role="navigation">
        <div className="container">
          <h4>Dungeon Master Manager</h4>
        </div>
      </nav>
    );
  }
}

export default NavbarLogin;
