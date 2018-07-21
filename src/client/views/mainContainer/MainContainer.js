import React, { Component } from "react";
import "./MainContainer.scss";
import ObjectUtils from '../../commons/ObjectUtils';

export default class MainContainer extends Component {


secondary() {
  return (
    <div>
      <nav>
        <a href="/html/">HTML</a> |
        <a href="/css/">CSS</a> |
        <a href="/js/">JavaScript</a> |
        <a href="/jquery/">jQuery</a>
      </nav>
    </div>
  );
}

  render() {
    const {primary, secondary, children} = this.props;
    return (
            <div className="MainContainer">
                <div id="primary">{primary}</div>
                <div id="secondary">{ObjectUtils.varIsNotBlank(secondary) ? secondary : this.secondary()}</div>
            </div>
           );
  }
}
