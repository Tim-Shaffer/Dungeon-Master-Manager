import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import NavbarLogin from "../Navbar/NavbarLogin";
import "./loginstyle.css";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      username: "",
      password: "",
      password2: "",
      isMaster: false,
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onCheck = e => {
    this.setState({ isMaster: true });
  };

  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      username: this.state.username,
      password: this.state.password,
      password2: this.state.password2,
      isMaster: this.state.isMaster
    };
    console.log (newUser);
    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (
      <>
      <NavbarLogin />
      <div className="container border rounded border-dark" id="register">
        <div style={{ marginTop: "1rem" }} className="row">
          <div className="col s8 offset-s2">
            
            <div className="col s12" style={{ paddingBottom: "11.250px"}}>
              <br></br>
              <h4>
                <b style={{ fontSize: "50px"}}>Register</b>
              </h4>
            </div>

            <form noValidate onSubmit={this.onSubmit}>

                <label htmlFor="name" id="lablename">Name</label>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.name}
                  error={errors.name}
                  id="name"
                  type="text"
                  className={classnames("", {
                    invalid: errors.name
                  })}
                />
              </div>
                <span className="red-text">{errors.name}</span>
                <br></br>

                <label htmlFor="username" id="lablename">Username</label>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.username}
                  error={errors.username}
                  id="username"
                  type="text"
                  className={classnames("", {
                    invalid: errors.username
                  })}
                />
              </div>
                <span className="red-text">{errors.username}</span>
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
                    invalid: errors.password
                  })}
                />
              </div>
                <span className="red-text">{errors.password}</span>
                <br></br>

                <label htmlFor="password2" id="lablename">Confirm Password</label>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id="password2"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password2
                  })}
                />
              </div>
                <span className="red-text">{errors.password2}</span>
                <br></br>
              
              <form>
                    <div className="input-field col s12">
                      <label id="checkboxlabel">Dungeon Master:
                        <input
                          id="isMaster"
                          name="DM"
                          type="checkbox"
                          value={this.state.isMaster}
                          onChange={this.onCheck} />
                      </label>
                    </div>
              </form>

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
                  Register
                </button>

                <p className="grey-text text-darken-1" id="already" style={{ paddingTop: "11.250px"}}>
                Already have an account? <Link to="/login" style={{ color: "darkred"}}>Login</Link>
                </p>

              </div>
            </form>
          </div>
        </div>
      </div>
    </>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
