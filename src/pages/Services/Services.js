import React from "react";
import { Grid, Button, Typography, Card, CardContent } from "@material-ui/core";

import ArrowIcon from "../../components/ArrowIcon/ArrowIcon";
import customSoftwareIcon from "../../assets/images/Custom Software Icon.svg";
import mobileAppIcon from "../../assets/images/mobileIcon.svg";
import websiteIcon from "../../assets/images/websiteIcon.svg";
import "./Services.css";

const Services = () => {
  return (
    <Grid container direction="column" className="services-root">
      <Grid item>
        {/* ----------------- Custom Sofware Development block --------------*/}
        <Grid container className="services-container">
          <Grid item className="services-item">
            <Typography variant="h4">Custom Sofware Development</Typography>
            <Typography variant="subtitle1" className="mb-1">
              Save Energy. Save Time. Save Money.
            </Typography>
            <Typography variant="subtitle1">
              Complete digital solutions, from investigation to{" "}
              <span className="services-celebration-text">celebration.</span>
            </Typography>
            <Button variant="outlined" className="btn-learn-more">
              <span className="text-learn-more">Learn more</span>
              <ArrowIcon className="learn-more-arrow" />
            </Button>
          </Grid>
          <Grid item>
            <img
              src={customSoftwareIcon}
              alt="Custom Sofware Development"
              className="csd-image"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/* ----------------- iOS/Android block --------------*/}
        <Grid container className="app-container">
          <Grid item className="app-item">
            <Typography variant="h4">iOS/Android App Development</Typography>
            <Typography variant="subtitle1" className="mb-1">
              Extend Functionality. Extend Access. Increase Engagement.
            </Typography>
            <Typography variant="subtitle1">
              Integrate your web experience or create a standalone app
              <span className="app-break">
                <br />
              </span>{" "}
              with either mobile platform.
            </Typography>
            <Button variant="outlined" className="btn-learn-more">
              <span className="text-learn-more">Learn more</span>
              <ArrowIcon className="learn-more-arrow" />
            </Button>
          </Grid>
          <Grid item className="app-icon">
            <img
              src={mobileAppIcon}
              alt="Custom Sofware Development"
              className="app-image"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/* ----------------- Website block --------------*/}
        <Grid container className="website-container">
          <Grid item className="website-item">
            <Typography variant="h4">Website Development</Typography>
            <Typography variant="subtitle1" className="mb-1">
              Reach More. Discover More. Sell More.
            </Typography>
            <Typography variant="subtitle1">
              Optmized for Search Engines, built for Speed
            </Typography>
            <Button variant="outlined" className="btn-learn-more">
              <span className="text-learn-more">Learn more</span>
              <ArrowIcon className="learn-more-arrow" />
            </Button>
          </Grid>
          <Grid item className="website-icon">
            <img
              src={websiteIcon}
              alt="Custom Sofware Development"
              className="website-image"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Services;
