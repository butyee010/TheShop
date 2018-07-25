import React, { Component } from 'react';
import './Secondary.scss';

export default class Secondary extends Component {
  render() {
    return (
        <div className="secondary">
          <nav>
            <a href="/html/">HTML</a> |
            <a href="/css/">CSS</a> |
            <a href="/js/">JavaScript</a> |
            <a href="/jquery/">jQuery</a>
          </nav>
        </div>
    );
  }
}
