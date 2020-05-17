import React, { Component } from "react";
import NavbarLanding from "../Navbar/NavbarLanding";

class NotFound extends Component {

  render() {

    return (
      
      <>
      <NavbarLanding />

      <div className="container-fluid" id="body">

        <div className="row justify-content-center">

          <div className="col-4 justify-content-center">

            <br></br>
            <br></br>

            <h1><span role="img" aria-label="Face With Rolling Eyes Emoji"> 🙄 </span> 404 Page Not Found</h1>

          </div>

        </div>
      
      </div>
      </>
      
        
      );
  }

}

export default NotFound;
