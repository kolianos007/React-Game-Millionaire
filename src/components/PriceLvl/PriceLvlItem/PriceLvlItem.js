import React from "react";
import classes from "./PriceLvlItem.module.sass";
import RectImgSm from "../../UI/RectImg/RectImgSm/RectImgSm";

const PriceLvlItem = ({ win, active }) => {
  const cls = [classes.PriceLvlItem];
  if (active) {
    cls.push(classes[active]);
  }
  return (
    <li className={cls.join(" ")}>
      <RectImgSm />
      <span>{win}</span>
    </li>
  );
};

export default PriceLvlItem;
