import React, { Component } from 'react';
import './Footer.scss';


export default class Footer extends Component {
  render() {
    const { text } = this.props;
    return (
        <div className="Footer">
          <label>This Footer</label>
          <label>{text}</label>
        </div>
    );
  }
}
