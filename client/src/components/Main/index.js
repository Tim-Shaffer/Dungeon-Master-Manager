import React, { Component } from "react";
import Nav from "../Nav/Nav";
import Jumbo from "../Jumbotron/Jumbotron";
import DMview from "../DMview/DMview";
import Playerview from "../Playerview/Playerview";

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
        <br></br>
        <DMview />
      </>
    );
  }

}

export default Main;
