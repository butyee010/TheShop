import React, { Component } from "react";
import "./Primary.scss";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
//views
import HomePage from "../../views/homePage/HomePage";

const Cart = () => (<div>cart</div>);

export default class Primary extends Component {
  render() {
    return (
      <div className="primary">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={Cart} />
          <Route render={() => <div>Not Match</div>} />
        </Switch>
      </div>
    );
  }
}
