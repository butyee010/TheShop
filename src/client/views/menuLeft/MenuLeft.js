import React, { Component } from 'react';
import './MenuLeft.scss';
import { Link } from "react-router-dom";


export default class MenuLeft extends Component {
  render() {
    return (
        <div className="MenuLeft">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/">Contact</Link></li>
          </ul>
        </div>
    );
  }
}
