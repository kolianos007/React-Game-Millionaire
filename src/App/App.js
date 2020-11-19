import React from "react";
import GameStart from "../containers/GameStart/GameStart";
import Game from "../containers/Game/Game";
import GameEnd from "../containers/GameEnd/GameEnd";
import classes from "./App.module.sass";
import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className={classes.App}>
        <Switch>
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/`}
            component={GameStart}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/game`}
            component={Game}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/game-end`}
            component={GameEnd}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
