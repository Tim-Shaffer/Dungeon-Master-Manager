import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { findUser } from "../../actions/authActions";
import "./style.css";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
    this.props.history.push("/");
  };

  // componentWillMount() {
  //   const { user } = this.props.auth;
  //   // console.log(JSON.stringify(this.props));
  //   // console.log(user.id); -- I know I am executing this funciton!
  //   findUser(user.id);
  //   // console.log(JSON.stringify(findUser(user.id)));
  // }


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
            >
              Logout
            </button>
        </div>
      </nav>

      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="landing-copy col s12 center-align">
            <h4>
            </h4>
            
          </div>
        </div>
      </div>
      </>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
