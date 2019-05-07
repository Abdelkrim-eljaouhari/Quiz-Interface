import React from "react";
import ReactDOM from "react-dom";
import Quiz from "./quiz";
import OptionModal from "./optionModal";
import "./styles.css";

class App extends React.Component {
  state = {
    quiz: {
      questions: [
        "What does Css stands for",
        "What is the full form of http",
        "In which tag we put the title of the page in HTML",
        "what HTML stand for"
      ],
      choices: [
        [
          "Computer stylesheet",
          "Cascading Style Sheet",
          "ColorFul Style Sheet",
          "Creative Style sheet"
        ],
        [
          "hyper text transfer package",
          "hyper text transfer protocol",
          "hyphenation text programm",
          "none of the above"
        ],
        ["a", "img", "title", "head"],
        [
          "hyper text markup code",
          "hyper text modern langauge",
          "hash text markup language",
          "hyper text markup language"
        ]
      ],
      correctAnswers: ["B", "B", "C", "D"]
    },
    selected: ["hide", "hide", "hide", "hide"],
    counter: 0,
    result: 0,
    noValue: false,
    answerClicked: "",
    openModal: false
  };
  onSubmit = e => {
    e.preventDefault();

    const { counter, answerClicked, result } = this.state;
    const correctAnswer = this.state.quiz.correctAnswers[counter];
    if (!answerClicked) {
      return this.setState({ noValue: true, openModal: true });
    }
    if (answerClicked === correctAnswer) {
      this.setState(() => ({ result: result + 1 }));
    }
    const selected = [...this.state.selected].map(element => "hide");
    if (counter < 3) {
      this.setState(() => ({
        counter: counter + 1,
        answerClicked: "",
        selected
      }));
    }
    if (counter === selected.length - 1) {
      this.setState({ openModal: true });
    }
  };
  onChangeQuestions = e => {
    const answer = e.target.firstElementChild.textContent;
    const selected = [...this.state.selected].map(el => "hide");
    selected[e.target.value] = "show";
    this.setState(() => ({
      answerClicked: answer,
      selected
    }));
  };
  handleCloseModal = () => {
    this.setState(() => ({ openModal: false, noValue: false }));
  };
  tryAgain = () => {
    const selected = [...this.state.selected].map(element => "hide");
    this.setState({ counter: 0, selected, openModal: false });
  };
  render() {
    return (
      <div className="most-container">
        <Quiz
          state={this.state}
          onChangeQuestions={this.onChangeQuestions}
          onSubmit={this.onSubmit}
        />
        <OptionModal
          openModal={this.state.openModal}
          handleCloseModal={this.handleCloseModal}
          result={this.state.result}
          noValue={this.state.noValue}
          tryAgain={this.tryAgain}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
