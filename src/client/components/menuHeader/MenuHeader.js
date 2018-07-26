import React, { Component } from 'react';
import './MenuHeader.scss';
import { Link } from "react-router-dom";


export default class MenuHeader extends Component {
  render() {
    return (
        <div className="MenuHeader">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
    );
  }
}
