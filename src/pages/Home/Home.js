import React from "react";
import Lottie from "react-lottie";
import { Grid, Button, Typography, Card, CardContent } from "@material-ui/core";

import animationData from "../../assets/animations/landinganimation/data";
import ArrowIcon from "../../components/ArrowIcon/ArrowIcon";
import customSoftwareIcon from "../../assets/images/Custom Software Icon.svg";
import mobileAppIcon from "../../assets/images/mobileIcon.svg";
import websiteIcon from "../../assets/images/websiteIcon.svg";
import revolutionBackground from "../../assets/images/repeatingBackground.svg";
import "./Home.css";

const Home = () => {
  const animationOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="column" className="home-root">
      <Grid item>
        {" "}
        {/* -------------- Hero Block--------------- */}
        <Grid container justify="flex-end" alignItems="center" direction="row">
          <Grid sm item className="grid-item-slogan">
            <Typography variant="h2" align="center">
              Bringing the west coast technology
              <br /> to the Midwest
            </Typography>
            <Grid container justify="center" className="buttons-container">
              <Grid item>
                <Button
                  variant="contained"
                  color="secondary"
                  className="btn-estimate"
                >
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" className="btn-learn-more">
                  <span className="text-learn-more">Learn more</span>
                  <ArrowIcon className="learn-more-arrow" />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid sm item className="lottie-container">
            <Lottie options={animationOptions} className="lottie-main"></Lottie>
          </Grid>
        </Grid>
      </Grid>
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
      <Grid item>
        {/* ------------------Revolution block */}
        <Grid
          container
          alignItems="center"
          justify="center"
          className="revolution-block"
        >
          <Card className="revolution-card">
            <CardContent>
              <Grid
                container
                direction="column"
                className="revolution-container"
              >
                <Grid item>
                  <Typography variant="h3" gutterBottom>
                    The Revolution
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">
                    Visionary insights coupled with cutting-edge technology is a
                    recipe for revolution.
                  </Typography>
                  <Button variant="outlined" className="btn-learn-more">
                    <span className="text-learn-more">Learn more</span>
                    <ArrowIcon className="learn-more-arrow" />
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <div className="revolution-background"></div>
        </Grid>
      </Grid>
      <Grid item>
        {/* ------------------Information block */}
        <Grid
          container
          className="information-container"
          direction="row"
          alignItems="center"
        >
          <Grid item container className="info-grid-container" spacing={10}>
            <Grid sm item className="info-item">
              <Grid container direction="column">
                <Typography variant="h2" className="text-aboutus">
                  About Us
                </Typography>
                <Typography variant="subtitle2">Let's get personal.</Typography>
                <Grid item>
                  <Button variant="outlined" className="btn-learn-more">
                    <span className="text-learn-more">Learn more</span>
                    <ArrowIcon className="learn-more-arrow" />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid sm item className="info-item-contact">
              <Grid container direction="column">
                <Typography variant="h2" className="text-aboutus">
                  Contact Us
                </Typography>
                <Typography variant="subtitle2">Say Hello!. </Typography>
                <Grid item>
                  <Button variant="outlined" className="btn-learn-more">
                    <span className="text-learn-more">Learn more</span>
                    <ArrowIcon className="learn-more-arrow" />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <div className="info-background-image"></div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
