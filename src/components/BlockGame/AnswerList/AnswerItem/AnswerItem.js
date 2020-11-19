import React from "react";
import classes from "./AnswerItem.module.sass";
import AnswerImg from "../../../UI/RectImg/RectImg";

const AnswerItem = ({ answer, index, onAnswerClick, state }) => {
  const cls = [classes.AnswerItem];
  if (state) {
    cls.push(classes[state]);
  }
  return (
    <li className={cls.join(" ")} onClick={() => onAnswerClick(answer.id)}>
      <AnswerImg />
      <div className={classes.AnswerText}>
        <span>
          {index === 1 ? "A" : index === 2 ? "B" : index === 3 ? "C" : "D"}
        </span>
        {answer.text}
      </div>
    </li>
  );
};

export default AnswerItem;
