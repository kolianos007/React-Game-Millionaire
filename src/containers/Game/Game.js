import React from "react";
import BlockGame from "../../components/BlockGame/BlockGame";
import Container from "../../components/Container/Container";
import classes from "./Game.module.sass";
import PriceLvl from "../../components/PriceLvl/PriceLvl";
import MenuToggle from "../../components/UI/MenuToggle/MenuToggle";

export default class Game extends React.Component {
  state = {
    menuOpen: false,
    activeQuestion: 0,
    amount: 0,
    answerState: null,
    questions: [
      {
        id: 1,
        question: "Сколько океанов на нашей планете?",
        rightAnswerId: 4,
        answers: [
          {
            text: 2,
            id: 1,
          },
          {
            text: 3,
            id: 2,
          },
          {
            text: 4,
            id: 3,
          },
          {
            text: 5,
            id: 4,
          },
        ],
        win: "$500",
      },
      {
        id: 2,
        question: "Единица измерения силы тока?",
        rightAnswerId: 1,
        answers: [
          {
            text: "Ампер",
            id: 1,
          },
          {
            text: "Вольт",
            id: 2,
          },
          {
            text: "Ватт",
            id: 3,
          },
          {
            text: "Киловатт",
            id: 4,
          },
        ],
        win: "$1,000",
      },
      {
        id: 3,
        question: "Сатурн - это какая по счету планета от Солнца?",
        rightAnswerId: 1,
        answers: [
          {
            text: 6,
            id: 1,
          },
          {
            text: 3,
            id: 2,
          },
          {
            text: 5,
            id: 3,
          },
          {
            text: 4,
            id: 4,
          },
        ],
        win: "$2,000",
      },
      {
        id: 4,
        question:
          "Какой элемент периодической системы химических элементов обозначается как Ag?",
        rightAnswerId: 2,
        answers: [
          {
            text: "Золото",
            id: 1,
          },
          {
            text: "Аргон",
            id: 2,
          },
          {
            text: "Медь",
            id: 3,
          },
          {
            text: "Серебро",
            id: 4,
          },
        ],
        win: "$4,000",
      },
      {
        id: 5,
        question: "Сколько будет 0.2 км в дециметрах?",
        rightAnswerId: 1,
        answers: [
          {
            text: "2000дм",
            id: 1,
          },
          {
            text: "20 000дм",
            id: 2,
          },
          {
            text: "200дм",
            id: 3,
          },
          {
            text: "200 000дм",
            id: 4,
          },
        ],
        win: "$8,000",
      },
      {
        id: 6,
        question: "Самая длинная в мире река - это?",
        rightAnswerId: 4,
        answers: [
          {
            text: "Янцзы",
            id: 1,
          },
          {
            text: "Нил",
            id: 2,
          },
          {
            text: "Дунай",
            id: 3,
          },
          {
            text: "Амазонка",
            id: 4,
          },
        ],
        win: "$16,000",
      },
      {
        id: 7,
        question: "Какое число обозначается римскими цифрами LXXVII?",
        rightAnswerId: 3,
        answers: [
          {
            text: 22,
            id: 1,
          },
          {
            text: 33,
            id: 2,
          },
          {
            text: 77,
            id: 3,
          },
          {
            text: 99,
            id: 4,
          },
        ],
        win: "$32,000",
      },
      {
        id: 8,
        question: "В каком предложении допущена ошибка?",
        rightAnswerId: 1,
        answers: [
          {
            text: "На полке лежала пачка макаронов.",
            id: 1,
          },
          {
            text: "На ней не было чулок.",
            id: 2,
          },
          {
            text: "Эти кремы просрочены",
            id: 3,
          },
          {
            text: "На ней не было одежды",
            id: 4,
          },
        ],
        win: "$64,000",
      },
      {
        id: 9,
        question: "Зеленый пигмент окрашивающий листья растений, называется?",
        rightAnswerId: 3,
        answers: [
          {
            text: "клетофилл",
            id: 1,
          },
          {
            text: "дэндрофилл",
            id: 2,
          },
          {
            text: "хлорофилл",
            id: 3,
          },
          {
            text: "хлорофит",
            id: 4,
          },
        ],
        win: "$125,000",
      },
      {
        id: 10,
        question:
          "Все знают приставку 'кило-'. А как насчет 'гекто-'? Это сколько?",
        rightAnswerId: 2,
        answers: [
          {
            text: 1000,
            id: 1,
          },
          {
            text: 100,
            id: 2,
          },
          {
            text: 10,
            id: 3,
          },
          {
            text: 50,
            id: 4,
          },
        ],
        win: "$250,000",
      },
      {
        id: 11,
        question: "Желчь образуется в?",
        rightAnswerId: 1,
        answers: [
          {
            text: "Желчном пузыре",
            id: 1,
          },
          {
            text: "Поджелудочной железе",
            id: 2,
          },
          {
            text: "Печени",
            id: 3,
          },
          {
            text: "Легких",
            id: 4,
          },
        ],
        win: "$500,000",
      },
      {
        id: 12,
        question: "Почему времена года сменяют друг друга?",
        rightAnswerId: 4,
        answers: [
          {
            text: "Из-за удаления и приближения Земли к Солнцу.",
            id: 1,
          },
          {
            text: "Из-за наклона земной дуги.",
            id: 2,
          },
          {
            text: "Из-за приближения Луны к Земле.",
            id: 3,
          },
          {
            text: "Из-за наклона земной оси.",
            id: 4,
          },
        ],
        win: "$1,000,000",
      },
    ],
  };

  onAnswerClickHandler = (answerId) => {
    const win =
      this.state.activeQuestion === 0
        ? 0
        : this.state.questions[this.state.activeQuestion - 1].win.replace(
            /\D+/g,
            ""
          );
    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0];
      if (this.state.answerState[key] === "correct") {
        return;
      } else if (this.state.answerState[key] === "wrong") {
        return;
      } else if (this.state.answerState[key] === "selected") {
        return;
      }
    }
    this.setState({
      answerState: { [answerId]: "selected" },
      amount: win,
    });
    const question = this.state.questions[this.state.activeQuestion];

    if (question.rightAnswerId === answerId) {
      setTimeout(() => {
        this.setState({
          answerState: { [answerId]: "correct" },
        });
      }, 1000);
      const timeout = window.setTimeout(() => {
        if (this.isGameFinished()) {
          this.props.history.push({
            pathname: "/game-end",
            state: {
              winGame: true,
            },
          });
        } else {
          this.setState((prevState) => {
            return { activeQuestion: prevState.activeQuestion + 1 };
          });
        }
        this.setState({ answerState: null });
        window.clearInterval(timeout);
      }, 2000);
    } else {
      setTimeout(() => {
        this.setState({
          answerState: { [answerId]: "wrong" },
          rightAnswer: false,
        });
      }, 1000);
      const timeout = window.setTimeout(() => {
        this.props.history.push({
          pathname: "/game-end",
          state: {
            btnText: "Try again",
            btnLink: "/",
            win: this.state.amount,
          },
        });
        window.clearTimeout(timeout);
      }, 2000);
    }
  };

  isGameFinished = () => {
    return this.state.questions.length === this.state.activeQuestion + 1;
  };

  onToggleHandler = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  };

  render() {
    return (
      <div className={classes.Game}>
        <MenuToggle
          menuOpen={this.state.menuOpen}
          onToggle={this.onToggleHandler}
        />
        <Container>
          <BlockGame
            question={this.state.questions[this.state.activeQuestion].question}
            answers={this.state.questions[this.state.activeQuestion].answers}
            onAnswerClick={this.onAnswerClickHandler}
            state={this.state.answerState}
          />
        </Container>
        <PriceLvl
          win={this.state.questions}
          active={this.state.activeQuestion}
          menuOpen={this.state.menuOpen}
        />
      </div>
    );
  }
}
