import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Jumbo from "../Jumbotron/Jumbotron";

class Main extends Component {
  
  state = {
    username: "",
    password: "",
    password2: "",
    isMaster: false
  };

  render() {
    
    return (
      <>
        <Navbar />
        <Jumbo />
      </>
    );
  }

}

export default Main;
