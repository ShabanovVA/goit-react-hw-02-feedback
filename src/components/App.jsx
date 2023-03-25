import React, { Component } from "react";

export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleClickGood = (e) => {
    this.setState((prevState) => ({ good: prevState.good += 1 }))
  }
  
  handleClickNeutral = (e) => {
    this.setState((prevState) => ({ neutral: prevState.neutral += 1 }))
  }

  handleClickBad = (e) => {
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
        <h1>Please leave feedback</h1>
        <button type="button" onClick={this.handleClickGood}>Good</button>
        <button type="button" onClick={this.handleClickNeutral}>Neutral</button>
        <button type="button" onClick={this.handleClickBad}>Bad</button>
        <h2>Statistics</h2>
        {this.countTotalFeedback() > 0 ? (
          <><p>Good:<span>{this.state.good}</span></p>
          <p>Neutral:<span>{this.state.neutral}</span></p>
          <p>Bad:<span>{this.state.bad}</span></p>
          <p>Total:<span>{this.countTotalFeedback()}</span></p>
          <p>Positive feedback:<span>{this.countPositiveFeedbackPercentage()}%</span></p>
          </>) :
          <h3>There is no feedback</h3>}
      </div>
    );
  }
};
