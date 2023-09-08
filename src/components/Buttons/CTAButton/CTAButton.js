import React from "react";
import classes from "./CTAButton.module.scss";

const CTAButton = (props) => {
  return <button className={classes.button}>{props.children}</button>;
};

export default CTAButton;
