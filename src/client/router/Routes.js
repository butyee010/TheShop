import React from "react";
//view
import Shop from "../views/shop/Shop";
import MainContainer from "../views/mainContainer/MainContainer";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const NoMatch = ({ location }) => (
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
);

export default () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={MainContainer} />
          <Route path="/shop" component={Shop} />
          <Route path="/home" render={() => <div>Home</div>}/>
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
};
