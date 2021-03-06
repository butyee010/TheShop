import React, { Component } from 'react';
import './Secondary.scss';
import { Link } from "react-router-dom";

export default class Secondary extends Component {
  render() {
    return (
        <div className="secondary">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/a/bus">Bus</Link></li>
              <li><Link to="/a/cart">Cart</Link></li>
            </ul>
        </div>
    );
  }
}
