import React from "react";
import classes from "./BlockGame.module.sass";
import AnswerList from "./AnswerList/AnswerList";

const BlockGame = ({ question, answers, onAnswerClick, state }) => {
  return (
    <div className={classes.BlockGame}>
      <div className={classes.BlockGameQuiz}>
        <div className={classes.Question}>{question}</div>
        <AnswerList
          answers={answers}
          state={state}
          onAnswerClick={onAnswerClick}
        />
      </div>
    </div>
  );
};

export default BlockGame;
