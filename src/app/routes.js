import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";
import CustomSoftware from "../pages/CustomSoftware/CustomSoftware";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/services" component={Services} />
      <Route exact path="/customsoftware" component={CustomSoftware} />
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
