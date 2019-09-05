import React from 'react';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0, isCountDown: false };
  }

  changeTime = ev => {
    this.setState({ counter: +ev.target.value });
  }

  start = () => {
    if (this.state.counter > 0) {
      this.setState({ isCountDown: true }, this.delayedCountDown);
    }
  }

  delayedCountDown = () => {
    this.timerId = setTimeout(this.countDown, 1000);
  }

  countDown = () => {
    const newVal = this.state.counter - 1;
    if (newVal === 0) {
      this.setState({ isCountDown: false, counter: 0 });
    } else {
      this.setState({ counter: newVal }, this.delayedCountDown);
    }
  }

  stop = () => {
    clearTimeout(this.timerId);
    this.setState({ isCountDown: false, counter: 0 });
  }

  render() {
    const { counter, isCountDown } = this.state;

    return (<div className="container">
      {!isCountDown && <div>
        <div>Welcome to timer. Set seconds and click start</div>
        <div><input value={counter} onChange={this.changeTime} /></div>
        <div><button onClick={this.start}>Start</button></div>
      </div>}
      {isCountDown && <div>
        <div>{counter}</div>
        <div><button onClick={this.stop}>Stop</button></div>
      </div>}
    </div>);
  }
}
