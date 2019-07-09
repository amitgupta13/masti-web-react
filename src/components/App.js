import React from "react";
import Header from "./Header";
import { Router, Route } from "react-router-dom";
import history from "../history";
import Home from "./Home";
import Signup from "./auth/Signup";
import { checkAuth } from "../actions";
import { connect } from "react-redux";
import Signin from "./auth/Signin";

class App extends React.Component {
  componentDidMount() {
    this.props.checkAuth();
  }
  render() {
    return (
      <div>
        <Router history={history}>
          <Header auth={this.props.auth} />
          <Route path="/" exact component={Home} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/signin" exact component={Signin} />
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(
  mapStateToProps,
  { checkAuth }
)(App);
