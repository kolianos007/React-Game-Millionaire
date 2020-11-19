import React from "react";
import classes from "./AnswerList.module.sass";
import AnswerItem from "./AnswerItem/AnswerItem";

const AnswerList = ({ answers, onAnswerClick, state }) => {
  return (
    <ul className={classes.AnswerList}>
      {answers.map((item, index) => {
        return (
          <AnswerItem
            onAnswerClick={onAnswerClick}
            key={item.id}
            index={index + 1}
            answer={item}
            state={state ? state[item.id] : null}
          />
        );
      })}
    </ul>
  );
};

export default AnswerList;
