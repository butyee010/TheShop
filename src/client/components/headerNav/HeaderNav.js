import React, { Component } from 'react';
import './HeaderNav.scss';
import Header from '../header/Header';

export default class HeaderNav extends Component {
  render() {
    return (
        <div className="HeaderNav">
          <Header text="MY SHOP"/>
          {/* <div className="box">aaaaaaaaaaaaaaaa</div> */}
        </div>
    );
  }
}
