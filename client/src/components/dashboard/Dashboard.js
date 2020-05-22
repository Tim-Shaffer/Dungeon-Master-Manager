import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { findUser } from "../../actions/authActions";
import "./style.css";
import Master from "../DMview/DMview";
import Player from "../Playerview/Playerview";
import CreatePlayer from "../CreatePlayer/CreatePlayer";

class Dashboard extends Component {

  state = {
      isMaster: false,
      showPlayer: true,
      errors: {}
    };


  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
    this.props.history.push("/");
  };

  componentDidMount() {
    const { user } = this.props.auth;

    // findUser(user.id);
    findUser(user.id).then(res => {
      this.setState({ isMaster: res.data.isMaster});


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

      { this.state.isMaster ? 
        <Master user={user}/>
      : this.state.showPlayer ? <Player user={user} /> : <CreatePlayer user={user} /> }
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
