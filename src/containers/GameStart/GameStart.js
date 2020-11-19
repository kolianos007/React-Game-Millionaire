import React from "react";
import Container from "../../components/Container/Container";
import BlockImg from "../../components/BlockImg/BlockImg";
import BlockRight from "../../components/BlockRight/BlockRight";
import classes from "./GameStart.module.sass";
import hand from "../../images/hand.png";

class GameStart extends React.Component {
  render() {
    return (
      <div className={classes.GameStart}>
        <Container>
          <div className={classes.WrapCenter}>
            <BlockImg src={hand} alt="hand" />
            <BlockRight
              title="Who wants to be a millionaire?"
              btnText="Start"
              btnLink="/game"
            />
          </div>
        </Container>
      </div>
    );
  }
}

export default GameStart;
