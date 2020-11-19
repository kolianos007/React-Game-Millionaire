import React from "react";
import classes from "./PriceLvl.module.sass";
import PriceLvlItem from "./PriceLvlItem/PriceLvlItem";

const PriceLvl = ({ win, active, menuOpen }) => {
  const cls = [classes.PriceLvl];
  if (menuOpen) {
    cls.push(classes["open"]);
  }
  return (
    <ul className={cls.join(" ")}>
      {win.map((item, index) => {
        return (
          <PriceLvlItem
            win={item.win}
            active={
              active === index ? "active" : active > index ? "passed" : null
            }
            key={index}
          />
        );
      })}
    </ul>
  );
};

export default PriceLvl;
