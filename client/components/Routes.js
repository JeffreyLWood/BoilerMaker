import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect, HashRouter } from "react-router-dom";
import { Login } from "./Authenticate";
import { me } from "../authenticate";

class Routes extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <Switch>
            <Route path="/" exact component={Login} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

const mapState = (state) => {
  return {};
};

const mapDispatch = (dispatch) => {
  return {};
};

export default connect(mapState, mapDispatch)(Routes);
