import React from "react";
import classes from "./BlockImg.module.sass";

const BlockImg = ({ src = "", alt = "img" }) => (
  <div className={classes.BlockImg}>
    <img src={src} alt={alt} />
  </div>
);

export default BlockImg;
