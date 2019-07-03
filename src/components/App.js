import React from "react";
import Header from "./Header";
import { Router, Route } from "react-router-dom";
import history from "../history";
import Home from "./Home";
import Signup from "./auth/Signup";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/signup" exact component={Signup} />
        </Router>
      </div>
    );
  }
}

export default App;
