import React, { Component } from "react";
import NavbarLanding from "../Navbar/NavbarLanding";
import Info from "../Info/Info";

class Landing extends Component {
  render() {
    return (
      <>
        <NavbarLanding />
        <Info />
        <footer id="sticky-footer" className="py-4 border-top border-danger bg-dark text-white-50 sticky">
          <div className="container text-center">
            <small>Copyright &copy; Justin Acosta, Helen Maschmeyer,
            Tim Shaffer, Wayne Wu
            </small>
          </div>
        </footer>
      </>
    );
  }
}

export default Landing;
