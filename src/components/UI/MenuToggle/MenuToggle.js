import React from "react";
import classes from "./MenuToggle.module.sass";

const MenuToggle = ({ menuOpen, onToggle }) => {
  const cls = [classes.MenuToggle];
  if (menuOpen) {
    cls.push(classes["open"]);
  }
  return (
    <div onClick={onToggle} className={cls.join(" ")}>
      <span></span>
    </div>
  );
};

export default MenuToggle;
