import React, { Component } from "react";
import "./Primary.scss";
import { MemoryRouter } from "react-router";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const Bus = () => <h3>Bus</h3>;
const Cart = () => <h3>Cart</h3>;

export default class Primary extends Component {
  render() {
  return (
    <MemoryRouter>
        <div className="primary">
          <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/a/bus">Bus</Link></li>
              <li><Link to="/a/cart">Cart</Link></li>
            </ul>
              <Switch>
                <Route exact path="/" component={Bus} />
                <Route path="/shop" component={Cart} />
                <Route render={() => <div>Not Match</div>} />
              </Switch>
          </div>
      </MemoryRouter>
    );
  }
}
