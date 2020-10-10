import React from "react";
import { Route, Switch } from "react-router-dom";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={() => <div>Home</div>} />
      <Route exact path="/services" component={() => <div>services</div>} />
      <Route
        exact
        path="/customsoftware"
        component={() => <div>customsoftware</div>}
      />
      <Route exact path="/mobileapps" component={() => <div>mobileapps</div>} />
      <Route exact path="/websites" component={() => <div>websites</div>} />
      <Route exact path="/revolution" component={() => <div>revolution</div>} />
      <Route exact path="/about" component={() => <div>about</div>} />
      <Route exact path="/contact" component={() => <div>contact</div>} />
      <Route exact path="/estimate" component={() => <div>estimate</div>} />
    </Switch>
  );
};

export default Routes;
