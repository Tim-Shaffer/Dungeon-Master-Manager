import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./components/Main";

// import { Provider } from "react-redux";
// import store from "./store";

class App extends Component {
  render() {
    return (
      // <Provider store={store}>
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/master" component={Main} />
              <Route exact path="/player" component={Main} />
            </Switch>
          </div>
        </Router>
      // </Provider>
      );
  }
}
export default App;
