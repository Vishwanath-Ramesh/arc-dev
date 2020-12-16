import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Tab,
  Tabs,
  Button,
  Menu,
  MenuItem,
  SwipeableDrawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { Menu as MenuIcon } from "@material-ui/icons";

import logo from "../../assets/images/logo.svg";
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

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
}));

const Header = ({
  tabValue,
  setTabValue,
  selectedMenuItem,
  setSelectedMenuItem,
  ...props
}) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);
  const classes = useStyles();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const tabItems = [
    { Label: "Home", URL: "/" },
    {
      Label: "Services",
      URL: "/services",
      hasMenuItems: true,
      onMouseOver: onMenuClickHandler,
    },
    { Label: "The Revolution", URL: "/revolution" },
    { Label: "About Us", URL: "/about" },
    { Label: "Contact Us", URL: "/contact" },
  ];

  const menuItems = [
    { Label: "Services", URL: "/services" },
    { Label: "Custom Software Development", URL: "/customsoftware" },
    { Label: "Website Development", URL: "/websites" },
    { Label: "iOS/Android App Development", URL: "/mobileapps" },
  ];

  const drawerItems = [
    { Label: "Home", URL: "/" },
    {
      Label: "Services",
      URL: "/services",
    },
    { Label: "The Revolution", URL: "/revolution" },
    { Label: "About Us", URL: "/about" },
    { Label: "Contact Us", URL: "/contact" },
    { Label: "Free Estimate", URL: "/estimate" },
  ];

  function onTabChangeHandler(event, value) {
    setTabValue(value);
  }

  function onMenuClickHandler(event) {
    setAnchorEl(event.currentTarget);
    setOpenMenu(true);
  }

  function onMenuCloseHandler() {
    setAnchorEl(null);
    setOpenMenu(false);
  }

  function onMenuItemClickHandler(index) {
    onMenuCloseHandler();
    setTabValue(1);
    setSelectedMenuItem(index);
  }

  useEffect(() => {
    const tabIndex = tabItems.findIndex(
      (tabItem) => tabItem.URL === window.location.pathname
    );

    const menuIndex = menuItems.findIndex(
      (menuItem) => menuItem.URL === window.location.pathname
    );

    tabIndex >= 0 ? setTabValue(tabIndex) : menuIndex >= 0 && setTabValue(1);
    menuIndex >= 0 && setSelectedMenuItem(menuIndex);
  }, []);

  return (
    <>
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
              {tabItems.map((tabItem, index) => {
                return (
                  <Tab
                    key={tabItem.Label}
                    disableRipple
                    aria-owns={
                      tabItem.hasMenuItems && anchorEl ? "simple-menu" : null
                    }
                    aria-haspopup={
                      tabItem.hasMenuItems && anchorEl ? true : false
                    }
                    className="tab-item"
                    component={Link}
                    to={tabItem.URL}
                    label={tabItem.Label}
                    onMouseOver={(event) =>
                      tabItem?.onMouseOver && tabItem.onMouseOver(event)
                    }
                  ></Tab>
                );
              })}
            </Tabs>
            <div id="swipeable-drawer">
              <SwipeableDrawer
                className="header-drawer"
                disableBackdropTransition={!iOS}
                disableDiscovery={iOS}
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                onOpen={() => setOpenDrawer(true)}
              >
                <div
                  className={`toolbar-margin ${classes.toolbarMargin}`}
                ></div>
                <List disablePadding>
                  {drawerItems.map((drawerItem, index) => {
                    return (
                      <ListItem
                        key={drawerItem.Label}
                        divider
                        button
                        className={
                          drawerItem.Label === "Free Estimate"
                            ? "drawer-item-estimate"
                            : ""
                        }
                        component={Link}
                        to={drawerItem.URL}
                        onClick={() => {
                          setOpenDrawer(false);
                          setTabValue(index);
                        }}
                        selected={index === tabValue}
                      >
                        <ListItemText
                          disableTypography
                          className={`typography-default drawer-item-text ${
                            index === tabValue ? "selected" : ""
                          }`}
                        >
                          {drawerItem.Label}
                        </ListItemText>
                      </ListItem>
                    );
                  })}
                </List>
              </SwipeableDrawer>
              <IconButton
                className="drawer-icon"
                disableRipple
                onClick={() => setOpenDrawer(!openDrawer)}
              >
                <MenuIcon />
              </IconButton>
            </div>
            <Button
              className="btn-free-estimate"
              variant="contained"
              color="secondary"
            >
              Free Estimate
            </Button>
            <Menu
              id="simple-menu"
              elevation={0}
              open={openMenu}
              anchorEl={anchorEl}
              onClose={onMenuCloseHandler}
              MenuListProps={{ onMouseLeave: onMenuCloseHandler }}
            >
              {menuItems.map((menuItem, index) => {
                return (
                  <MenuItem
                    key={menuItem.Label}
                    component={Link}
                    to={menuItem.URL}
                    onClick={() => onMenuItemClickHandler(index)}
                    selected={index === selectedMenuItem && tabValue === 1}
                  >
                    {menuItem.Label}
                  </MenuItem>
                );
              })}
            </Menu>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={`toolbar-margin ${classes.toolbarMargin}`}></div>
    </>
  );
};

export default Header;
