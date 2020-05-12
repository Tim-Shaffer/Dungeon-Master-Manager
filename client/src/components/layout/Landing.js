import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavbarLanding from "../Navbar/NavbarLanding";
import Jumbo from "../Jumbotron/Jumbotron";

class Landing extends Component {
  render() {
    return (
      <>
        <NavbarLanding />
        <Jumbo />
      </>
    );
  }
}

export default Landing;
