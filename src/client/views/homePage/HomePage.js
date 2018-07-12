import React, { Component } from "react";
import "./HomePage.scss";
//Form
import InputForm from "../../forms/input/InputForm";
import ButtonForm from "../../forms/button/ButtonForm";

//Components
import HeaderNav from "../../components/headerNav/HeaderNav";
import MenuHeader from "../../components/menuHeader/MenuHeader";
import Footer from "../../components/footer/Footer";

import { Field, reduxForm} from 'redux-form';
import { email } from '../../commons/validator';

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
)



let ContactForm = (props) => {
  const { onSubmit } = props;
  return (
      <form onSubmit={onSubmit}>
          <div>
              <label htmlFor="firstName">First Name</label>
              <Field name="firstName" component={renderField} type="text" validate={email}/>
          </div>
          <button type="button" onClick={(val)=>{console.log(val)}}>Submit</button>
      </form>
  )
}

ContactForm = reduxForm({
  form: 'contact'
})(ContactForm)

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getStart() {
    console.log("123");
  }

  handleSubmit() {
    console.log("handleSubmit");
  }  

  submit(values) {
    // print the form values to the console
    console.log(values)
  }
  
  render() {
    return (
      <div className="HomePage">
        <HeaderNav />
        <MenuHeader />

        <ContactForm onSubmit={this.submit} />

        <InputForm name="userName" type="text" className="" value="" placeholder="User Name" />
        <ButtonForm name="getStart" text="Get Start" onClick={this.getStart} />
        <button onClick={this.getStart.bind(this)}>Submit</button>
        <Footer />
      </div>
    );
  }
}

