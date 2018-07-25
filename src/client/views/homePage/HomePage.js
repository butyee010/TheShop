import React, { Component } from "react";
//theme
import "./HomePage.scss";
//Form
import InputForm from "../../forms/input/InputForm";
import ButtonForm from "../../forms/button/ButtonForm";

//Components
import HeaderNav from "../../components/headerNav/HeaderNav";
import MenuHeader from "../../components/menuHeader/MenuHeader";
import Footer from "../../components/footer/Footer";

import { Field, reduxForm } from "redux-form";
import { email } from "../../commons/Validator";

import AxiosUtils from "../../commons/AxiosUtils";
import Clock from "../../components/clock/Clock";
import MainContainer from "../mainContainer/MainContainer";

import Test from "../../components/test"; 

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
);

let ContactForm = props => {
  const { onSubmit } = props;
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" component={renderField} type="text" validate={email} />
      </div>
      <button
        type="button"
        onClick={val => {
          console.log(val);
        }}
      >
        Submit
      </button>
    </form>
  );
};

ContactForm = reduxForm({
  form: "contact"
})(ContactForm);

/* const a = (
  <div className="contents">
    <ContactForm onSubmit={this.submit} />
    <Clock />
    <InputForm name="userName" type="text" className="" value="" placeholder="User Name" />
    <ButtonForm name="getStart" text="Get Start" onClick={this.getStart} />
    <button className="" onClick={this.getStart.bind(this)}>
      Submit
    </button>
  </div>
); */

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getStart() {
    AxiosUtils({
      url: "/api/b",
      methods: "post",
      data: {
        firstName: "Fred",
        lastName: "Flintstone"
      },
      onSuccess: function() {
        console.log("response success");
      },
      onError: function() {
        console.log("response error");
      }
    });
  }

  handleSubmit() {
    console.log("handleSubmit");
  }

  submit(values) {
    console.log(values);
  }

  primaryContent() {
    return (
      <div className="contents">
        <ContactForm onSubmit={this.submit} />
        <Clock />
        <InputForm name="userName" type="text" className="" value="" placeholder="User Name" />
        <ButtonForm name="getStart" text="Get Start" onClick={this.getStart} />
        <button className="" onClick={this.getStart.bind(this)}>
          Submit
        </button>
      </div>
    );
  }

  render() {
    return (
      <div className="HomePage">
        Home Page
        {this.primaryContent()}
      </div>
    );
  }
}
