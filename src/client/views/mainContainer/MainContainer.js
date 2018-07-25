import React, { Component } from "react";
import "./MainContainer.scss";
//components
import Primary from "../../components/primary/Primary";
import Secondary from "../../components/secondary/Secondary";
import HeaderNav from "../../components/headerNav/HeaderNav";
import MenuHeader from "../../components/menuHeader/MenuHeader";
import Footer from "../../components/footer/Footer";

export default class MainContainer extends Component {
  render() {
    return (
      <div>
        <HeaderNav />
        <MenuHeader />
        <div className="MainContainer">
          <Primary />
          <Secondary />
        </div>
        <Footer />
      </div>
    );
  }
}
