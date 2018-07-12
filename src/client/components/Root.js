import React, { Component }  from 'react';
import { hot } from 'react-hot-loader';
import './Root.scss';
import Routes from '../router/Routes';

class Root extends Component {
  render() {
    return (
      <Routes/>
    );
  }
}

export default hot(module)(Root);
