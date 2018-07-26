import React, { Component } from "react";
import "./MainContainer.scss";
//components
import Primary from "../../components/primary/Primary";
import Secondary from "../../components/secondary/Secondary";

import { MemoryRouter } from "react-router";

export default class MainContainer extends Component {
  render() {
    return (
        <MemoryRouter>
          <div className="MainContainer">
            <Secondary />
            <Primary />
          </div>
        </MemoryRouter>
    );
  }
}
