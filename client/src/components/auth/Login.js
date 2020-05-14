import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import NavbarLogin from "../Navbar/NavbarLogin";
import "./loginstyle.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      username: this.state.username,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;

    return (
      <>
      <body>

        <NavbarLogin />
      
      <div className="container border rounded border-dark" id="login">
        <div style={{ marginTop: "1rem" }} className="row">
          <div className="col s8 offset-s2">

            <div className="col s12" style={{ paddingBottom: "11.250px"}}>
              <br></br>
              <h4>
                <b style={{ fontSize: "50px"}}>Login</b>
              </h4>
            </div>

            <form noValidate onSubmit={this.onSubmit}>
              
              <label htmlFor="username" id="lablename">Username</label>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.username}
                  error={errors.username}
                  id="username"
                  type="text"
                  className={classnames("", {
                    invalid: errors.username || errors.usernamenotfound
                  })}
                />
              </div>
                <span className="red-text">
                  {errors.username}
                  {errors.usernamenotfound}
                </span>
                <br></br>

              <label htmlFor="password" id="lablename">Password</label>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password || errors.passwordincorrect
                  })}
                />
              </div>
                <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>

              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                  id="button"
                >
                  Login
                </button>

                <p className="grey-text text-darken-1" id="already" style={{ paddingTop: "11.250px"}}>
                Don't have an account? <Link to="/register" style={{ color: "darkred"}}>Register</Link>
                </p>

              </div>
            </form>
          </div>
        </div>
      </div>
      </body>
      </>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
