import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";

import footerAdornment from "../../assets/images/Footer Adornment.svg";
import facebookIcon from "../../assets/images/facebook.svg";
import instagramIcon from "../../assets/images/instagram.svg";
import twitterIcon from "../../assets/images/twitter.svg";
import "./Footer.css";

const Footer = ({
  tabValue,
  setTabValue,
  selectedMenuItem,
  setSelectedMenuItem,
  ...props
}) => {
  const footerItems = [
    {
      mainItemLabel: "Home",
      mainItemURL: "/home",
    },
    {
      mainItemLabel: "Services",
      mainItemURL: "/services",
      subItems: [
        {
          subItemLabel: "Custom Software Development",
          subItemURL: "/customsoftware",
        },
        {
          subItemLabel: "Website Development",
          subItemURL: "/websites",
        },
        {
          subItemLabel: "iOS/Android App Development",
          subItemURL: "/mobileapps",
        },
      ],
    },
    {
      mainItemLabel: "The Revolution",
      mainItemURL: "/revolution",
      subItems: [
        {
          subItemLabel: "Vision",
          subItemURL: "/customsoftware",
        },
        {
          subItemLabel: "Technology",
          subItemURL: "/websites",
        },
        {
          subItemLabel: "Process",
          subItemURL: "/mobileapps",
        },
      ],
    },
    {
      mainItemLabel: "About Us",
      mainItemURL: "/about",
      subItems: [
        {
          subItemLabel: "History",
          subItemURL: "/customsoftware",
        },
        {
          subItemLabel: "Team",
          subItemURL: "/websites",
        },
      ],
    },
    {
      mainItemLabel: "Contact Us",
      mainItemURL: "/contact",
    },
  ];

  const footerSocialIcons = [
    {
      iconLabel: "Facebook",
      iconImage: facebookIcon,
      iconURL: "https://www.facebook.com/",
    },
    {
      iconLabel: "Instagram",
      iconImage: instagramIcon,
      iconURL: "https://www.instagram.com/",
    },
    {
      iconLabel: "Twitter",
      iconImage: twitterIcon,
      iconURL: "https://twitter.com/",
    },
  ];

  return (
    <footer className="footer-root">
      <Grid container className="grid-container" justify="center">
        {footerItems.map((mainItem, mainItemIndex) => {
          return (
            <Grid
              key={mainItem.mainItemURL}
              item
              className="grid-item-main grid-item"
            >
              <Grid container direction="column" spacing={2}>
                <Grid
                  item
                  className="grid-item"
                  component={Link}
                  to={mainItem.mainItemURL}
                  onClick={() => setTabValue(mainItemIndex)}
                >
                  {mainItem.mainItemLabel}
                </Grid>
                {mainItem.subItems &&
                  mainItem.subItems.map((subItem, subItemIndex) => {
                    return (
                      <Grid
                        key={subItem.subItemLabel}
                        item
                        className="grid-item"
                        component={Link}
                        to={subItem.subItemURL}
                        onClick={() => {
                          setSelectedMenuItem(subItemIndex);
                          setTabValue(1);
                        }}
                      >
                        {subItem.subItemLabel}
                      </Grid>
                    );
                  })}
              </Grid>
            </Grid>
          );
        })}
      </Grid>
      <img
        className="img-adornment"
        src={footerAdornment}
        alt="Black decorative slash"
      />
      <Grid container justify="flex-end" className="social-icons" spacing={2}>
        {footerSocialIcons.map((socialIcons, index) => {
          return (
            <Grid
              key={socialIcons.iconLabel}
              item
              component={"a"}
              href={socialIcons.iconURL}
              rel={"noopener noreferrer"}
              target="_blank"
            >
              <img
                src={socialIcons.iconImage}
                alt={socialIcons.iconLabel}
                className="social-icon"
              />
            </Grid>
          );
        })}
      </Grid>
    </footer>
  );
};

export default Footer;
