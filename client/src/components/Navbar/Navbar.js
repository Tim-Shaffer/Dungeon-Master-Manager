import React, { Component } from "react";
import "./style.css";

class Navbar extends Component {
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

export default Navbar;
