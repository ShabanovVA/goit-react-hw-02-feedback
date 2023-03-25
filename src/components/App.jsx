import React, { Component } from "react";

export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleClickGood = () => {
    this.setState((prevState) => ({ good: prevState.good += 1 }))
  }
  
  handleClickNeutral = () => {
    this.setState((prevState) => ({ neutral: prevState.neutral += 1 }))
  }

  handleClickBad = () => {
    this.setState((prevState) => ({ bad: prevState.bad += 1 }))
  }

  countTotalFeedback = () => {
    return (this.state.good+this.state.neutral+this.state.bad)
  }

  countPositiveFeedbackPercentage = () => {
    const totalFeedback=this.countTotalFeedback()
    return ((this.state.good/(totalFeedback)*100)).toFixed()
  }

  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <button type="button" onClick={this.handleClickGood}>Good</button>
        <button type="button" onClick={this.handleClickNeutral}>Neutral</button>
        <button type="button" onClick={this.handleClickBad}>Bad</button>
        <h3>Statistics</h3>
        <p>Good:<span>{this.state.good}</span></p>
        <p>Neutral:<span>{this.state.neutral}</span></p>
        <p>Bad:<span>{this.state.bad}</span></p>
        <p>Total:<span>{this.countTotalFeedback()}</span></p>
        <p>Positive feedback:<span>{this.countPositiveFeedbackPercentage()}%</span></p>
      </div>
    );
  }
};
