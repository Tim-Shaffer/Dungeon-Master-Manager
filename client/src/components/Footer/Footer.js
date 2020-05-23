import React, { Component } from "react";
import "./footerstyle.css";

class Footer extends Component {
    render() {
      return (
        <>
          <footer id="sticky-footer" className="py-4 border-top border-danger bg-dark text-white-50 sticky">
            <div className="container text-center" id="footerText">
              <small>Copyright &copy; 2020 Justin Acosta, Helen Maschmeyer,
              Tim Shaffer, Wayne Wu
              </small>
            </div>
          </footer>
        </>
      );
    }
  }
  
  export default Footer;
  