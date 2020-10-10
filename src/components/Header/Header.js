import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Tab,
  Tabs,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";
import "./Header.css";

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const Header = (props) => {
  const [tabValue, setTabValue] = useState(0);

  function onTabChangeHandler(event, value) {
    setTabValue(value);
  }

  return (
    <ElevationScroll {...props}>
      <AppBar className="Appbar-Root" position="fixed">
        <Toolbar disableGutters>
          <Button className="logo-container" disableRipple>
            <img className="logo" src={logo} alt="Arc Development" />
          </Button>
          <Tabs
            className="tab-container"
            value={tabValue}
            indicatorColor="primary"
            onChange={onTabChangeHandler}
          >
            <Tab
              className="tab-item"
              component={Link}
              to="/"
              label="Home"
            ></Tab>
            <Tab
              className="tab-item"
              component={Link}
              to="/services"
              label="Services"
            ></Tab>
            <Tab
              className="tab-item"
              component={Link}
              to="/revolution"
              label="The Revolution"
            ></Tab>
            <Tab
              className="tab-item"
              component={Link}
              to="/about"
              label="About Us"
            ></Tab>
            <Tab
              className="tab-item"
              component={Link}
              to="/contact"
              label="Contact Us"
            ></Tab>
          </Tabs>
          <Button
            className="btn-free-estimate"
            variant="contained"
            color="secondary"
          >
            Free Estimate
          </Button>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
};

export default Header;
