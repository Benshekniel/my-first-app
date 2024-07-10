import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  startTimer() {
    this.timerID = setInterval(() => this.incrementCounter(), 1000);
  }

  stopTimer() {
    clearInterval(this.timerID);
  }

  incrementCounter() {
    this.setState((prevState) => ({
      counter: prevState.counter + 1
    }));
  }

  render() {
    return (
      <div className="counter">
        <h2>Counter: {this.state.counter}</h2>
      </div>
    );
  }
}

export default Counter;
