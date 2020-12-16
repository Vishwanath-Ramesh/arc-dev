import React from "react";
import {
  Grid,
  Button,
  Typography,
  Card,
  CardContent,
  IconButton,
} from "@material-ui/core";

import backArrow from "../../assets/images/backArrow.svg";
import forwardArrow from "../../assets/images/forwardArrow.svg";
import "./CustomSoftware.css";

const CustomSoftware = () => {
  return (
    <Grid container direction="column">
      <Grid item container direction="row">
        <Grid item>
          <IconButton>
            <img src={backArrow} alt="Back to Services" />
          </IconButton>
        </Grid>
        <Grid item container direction="column">
          <Grid item>
            <Typography variant="h2">Custom Software Development</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi,
              eveniet quam, modi labore dolore
            </Typography>
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi,
              eveniet quam, modi labore dolore Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Animi, eveniet quam, modi labore
              dolore consectetur adipisicing elit. Animi, eveniet quam, modi
              labore dolore
            </Typography>
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi,
              eveniet quam, modi labore dolore Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Animi, eveniet quam, modi labore
              dolore consectetur adipisicing elit. Animi, eveniet quam, modi
              labore dolore
            </Typography>
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi,
              eveniet quam, modi labore dolore
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <IconButton>
            <img
              src={forwardArrow}
              alt="Forward to iOS/Android App development"
            />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CustomSoftware;
