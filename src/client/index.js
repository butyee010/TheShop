import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Root from './components/Root'
import { createStore, combineReducers } from 'redux';
import { Provider } from "react-redux";
import { reducer as formReducer } from 'redux-form';

//Asset
import 'bulma/css/bulma.css'

//Reducer Config
const rootReducer = combineReducers({
  form: formReducer
})
const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <Root/>
  </Provider>,
  document.getElementById('root')
)

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept(Root, () => {
    // if you are using harmony modules ({modules:false})
    render(Root);
  });
}
