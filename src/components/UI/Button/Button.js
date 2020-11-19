import React from "react";
import classes from "./Button.module.sass";

const Button = ({ btnText }) => (
  <button type="button" className={classes.Button}>
    {btnText}
  </button>
);

export default Button;
