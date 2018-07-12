import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "../views/homePage/HomePage";

export default () => {
  return (
    <Router>
      <Route path="/" component={HomePage} />
    </Router>
  );
};
