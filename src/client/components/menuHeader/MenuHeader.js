import React, { Component } from 'react';
import './MenuHeader.scss';

export default class Menuheader extends Component {
  render() {
    return (
        <div className="MenuHeader">
          <button className="btn-normal" onClick={function(){}}>Home</button>
          <button className="btn-normal" onClick={function(){}}>Shop</button>
          <button className="btn-normal" onClick={function(){}}>Function</button>
        </div>
    );
  }
}
