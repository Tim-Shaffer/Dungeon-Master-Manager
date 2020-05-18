import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavbarLanding from "../Navbar/NavbarLanding";
import Jumbo from "../Jumbotron/Jumbotron";
import Info from "../Info/Info";

class Landing extends Component {
  render() {
    return (
      <>
        <NavbarLanding />
        <Info />
        {/* <Jumbo /> */}
      </>
    );
  }
}

export default Landing;
