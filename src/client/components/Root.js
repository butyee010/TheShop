import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./Root.scss";
//components
import MenuHeader from "./menuHeader/MenuHeader";
import HeaderNav from "./headerNav/HeaderNav";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainContainer from "../views/mainContainer/MainContainer";
import Shop from "../views/shop/Shop";

const NoMatch = ({ location }) => (
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
);

class Root extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <HeaderNav />
          <MenuHeader />
          <Switch>
            <Route exact path="/" component={MainContainer} />
            <Route path="/shop" component={Shop} />
            <Route path="/home" render={() => <div>Home</div>} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default hot(module)(Root);
