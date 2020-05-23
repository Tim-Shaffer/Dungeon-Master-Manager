import React, { Component } from "react";
import "./style.css";

class NavbarLogin extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark border-bottom border-danger bg-dark fixed-top" role="navigation">
        <div className="container">
          <h4>Dungeon Master Manager</h4>
        </div>
      </nav>
    );
  }
}

export default NavbarLogin;
