import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./components/layout/Landing";
// import CreatePlyr from "./components/CreatePlyr/CreatePlyr";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register"

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import { Provider } from "react-redux";
import store from "./store";

import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import NotFound from "./components/NotFound/NotFound";

// importing annyang
import annyang from "../src/components/Voice/Voice";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./";
  }
}

class App extends Component {
  
  //  |----------ANNYANG START----------|
    componentDidMount() {
      annyang.addCommands(this.addStats, this.removeStats);
      annyang.addCallback(this.engineCallback, this.resultCallback);
      annyang.start();

      this.setState({
        voiceStatus: annyang.isSupported() ? 'Supported' : 'Unsupported'
      });
    }

    componentWillMount() {
      annyang.abort();
    }

    engineCallback = (status) => {
      // engine status
    }

    resultCallback = (voiceInput) => {
      // compares input to DM commands
    }

    addStats = () => {
      // add player stats
    }

    removeStats = () => {
      // remove player stats
    }
  
  //  |-----------ANNYANG END------------|

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
          <Switch>
              <Route exact path="/" component={Landing} />
              {/* <Route exact path="/create" component={CreatePlyr} /> */}
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <Route component={NotFound} /> 
            </Switch>
            
          </div>
        </Router>
      </Provider>
      );
  }
}
export default App;
