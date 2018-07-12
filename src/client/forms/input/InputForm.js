import React, { Component } from 'react';
import './InputForm.scss';

export default class InputForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
        value: this.props.value
    };
  }

  changeText(e) {
    this.setState({
      value: e.target.value
    });
  }

  componentWillMount() {}

  render() {
    const {type, name, className, maxLength, placeholder} = this.props;
    const {value} = this.state;
    return (
        <input type={type} name={name} className={className} maxLength={maxLength} 
               placeholder={placeholder} value={value} onChange={this.changeText.bind(this)}/>
    );
  }
}
