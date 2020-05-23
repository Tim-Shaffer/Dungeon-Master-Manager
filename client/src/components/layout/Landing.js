import React, { Component } from "react";
import NavbarLanding from "../Navbar/NavbarLanding";
import Info from "../Info/Info";
import Footer from "../Footer/Footer";
class Landing extends Component {
  render() {
    return (
      <>
        <NavbarLanding />
        <Info />
        <Footer/>
      </>
    );
  }
}

export default Landing;
