import React from "react";
import classes from "./BlockRight.module.sass";
import Button from "../UI/Button/Button";
import { Link } from "react-router-dom";

const BlockRight = ({ title, ...props }) => (
  <div className={classes.BlockRight}>
    {props.endGame && props.winGame ? (
      <>
        <span>Congratulations!!!</span>
        <div className={classes.BlockRightWin}>You win 1.000.000$</div>
      </>
    ) : props.endGame ? (
      <>
        <span>Total score:</span>
        <div className={classes.BlockRightWin}>${props.win} earned</div>
        <Link to={props.btnLink}>
          <Button btnText={props.btnText}></Button>
        </Link>
      </>
    ) : (
      <>
        <h1>{title}</h1>
        <Link to={props.btnLink}>
          <Button btnText={props.btnText}></Button>
        </Link>
      </>
    )}
  </div>
);

export default BlockRight;
