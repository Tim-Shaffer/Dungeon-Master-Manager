import React, { Component } from "react";
import Nav from "../Nav/Nav";
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
        <Nav />
        <Jumbo />
      </>
    );
  }

}


export default Main;
