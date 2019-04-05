import "./LoadingSpinner.css";
import React from "react";
import { CircularProgress, Typography } from "@material-ui/core";

const LoadingSpinner = props => {
  return (
    <div className="loading">
      <CircularProgress />
      <Typography variant="h5" style={{ margin: 15 }}>
        {props.message}
      </Typography>
      <CircularProgress />
    </div>
  );
};

export default LoadingSpinner;
