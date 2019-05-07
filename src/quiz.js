import React from "react";

class Quiz extends React.Component {
  render() {
    const { counter, selected } = this.props.state;
    const { questions } = this.props.state.quiz;
    const Question = this.props.state.quiz.choices[counter];
    return (
      <div className="container">
        <div className="row">
          <h4>Quiz interface</h4>
          <div className="quiz-percentage">
            <p>{`${100 * ((counter + 1) / selected.length)}%`}</p>
            <div
              className="quiz-percentage_div1"
              style={{ width: `${100 * ((counter + 1) / selected.length)}%` }}
            >
              <div className="quiz-percentage_div2" />
            </div>
          </div>
          <p className="quiz-questions">{questions[counter]}</p>
          <form onSubmit={this.props.onSubmit}>
            <ul className="collections" onClick={this.props.onChangeQuestions}>
              <li href="#!" className="collection-items" value="0">
                <span className="question-classment">A</span>
                {Question[0]}
                <div className="icon-box">
                  {selected[0] === "show" ? (
                    <i className="material-icons">check</i>
                  ) : (
                    ""
                  )}
                </div>
              </li>
              <li href="#!" className="collection-items" value="1">
                <span className="question-classment">B</span>
                {Question[1]}
                <div className="icon-box">
                  {selected[1] === "show" ? (
                    <i className="material-icons">check</i>
                  ) : (
                    ""
                  )}
                </div>
              </li>
              <li href="#!" className="collection-items" value="2">
                <span className="question-classment">C</span>
                {Question[2]}
                <div className="icon-box">
                  {selected[2] === "show" ? (
                    <i className="material-icons">check</i>
                  ) : (
                    ""
                  )}
                </div>
              </li>
              <li href="#!" className="collection-items" value="3">
                <span className="question-classment">D</span>
                {Question[3]}
                <div className="icon-box">
                  {selected[3] === "show" ? (
                    <i className="material-icons">check</i>
                  ) : (
                    ""
                  )}
                </div>
              </li>
            </ul>
            <button className="btn waves-light" type="submit">
              send
              <i className="material-icons right">send</i>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Quiz;
