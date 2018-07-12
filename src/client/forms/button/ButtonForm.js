import React, { Component } from 'react';
import './ButtonForm.scss';

export default class ButtonForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      onClick: this.props.onClick
    };
  }
  
  componentWillMount() {}

  render() {
    const {text, name, className} = this.props;
    const {onClick} = this.state;
    return (
        <button type="button" className={className} name={name} onClick={onClick}>{text}</button>
    );
  }
}
