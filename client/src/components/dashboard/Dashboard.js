import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { findUser } from "../../actions/authActions";
import "./style.css";
import Master from "../DMview/DMview";
import Player from "../Playerview/Playerview";
import CreatePlyr from "../CreatePlyr/CreatePlyr";
// import Nav from "../Nav/Nav"

// // importing annyang
// import annyang from "../Voice/Voice";

class Dashboard extends Component {

  state = {
      isMaster: false,
      showPlayer: true,
      errors: {}
    };

  //  |----------ANNYANG START----------|
  // componentDidMount() {
  //   annyang.addCommands(this.addStats, this.removeStats);
  //   annyang.addCallback(this.engineCallback, this.resultCallback);
  //   annyang.start();

  //   this.setState({
  //     voiceStatus: annyang.isSupported() ? 'Supported' : 'Unsupported'
  //   });
  // }

//   componentWillMount() {
//     annyang.abort();
//   }

//   engineCallback = (status) => {
//     // engine status
//   }

//   resultCallback = (voiceInput) => {
//     // compares input to DM commands
//   }

//   addStats = () => {
//     // add player stats
//   }

//   removeStats = () => {
//     // remove player stats
//   }

// //  |-----------ANNYANG END------------|


  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
    this.props.history.push("/");
  };

  componentDidMount() {
    //-- I know I am executing this function!
    const { user } = this.props.auth;
    // console.log(JSON.stringify(user));

    // findUser(user.id);
    findUser(user.id).then(res => {
      this.setState({ isMaster: res.data.isMaster});

      // annyang.addCommands(this.addStats, this.removeStats);
      // annyang.addCallback(this.engineCallback, this.resultCallback);
      // annyang.start();

      // this.setState({
      //   voiceStatus: annyang.isSupported() ? 'Supported' : 'Unsupported'
      // });

    })
    .catch(err => console.log(err));

  }


  render() {
    const { user } = this.props.auth;

    return (
      <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" role="navigation">
        <div className="container">
          <h4>Welcome {user.name.split(" ")[0]}</h4>
          <button
              onClick={this.onLogoutClick}
              className="btn logout-btn"
              id="logout"
            >
              Logout
            </button>
        </div>
      </nav>
      {/* <Nav /> */}

      { this.state.isMaster ? 
        <Master user={user}/>
      : this.state.showPlayer ? <Player user={user} /> : <CreatePlyr user={user} /> }
      </>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  findUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser, findUser }
)(Dashboard);
