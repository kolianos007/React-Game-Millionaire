import React from "react";
import Container from "../../components/Container/Container";
import BlockImg from "../../components/BlockImg/BlockImg";
import BlockRight from "../../components/BlockRight/BlockRight";
import classes from "./GameEnd.module.sass";
import hand from "../../images/hand.png";

class GameEnd extends React.Component {
  render() {
    return (
      <div className={classes.GameEnd}>
        <Container>
          <div className={classes.WrapCenter}>
            <BlockImg src={hand} alt="hand" />
            <BlockRight
              title="Who wants to be a millionaire?"
              win={this.props.location.state.win}
              btnText={this.props.location.state.btnText}
              btnLink={this.props.location.state.btnLink}
              winGame={
                this.props.location.state.winGame
                  ? this.props.location.state.winGame
                  : null
              }
              endGame={true}
            />
          </div>
        </Container>
      </div>
    );
  }
}

export default GameEnd;
