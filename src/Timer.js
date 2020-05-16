import React, { Component } from "react";

// can just extend from PureComponent via import React, {PureComponent} from react
// inheriting from PureComponent will eliminate the need for specifying the shouldComponentUpdate lifecycle method
// rerendering only happens when currentState/Prop are different from nextState/Prop when using PureComponent
class Timer extends Component {
  constructor() {
    super();
    this.timer = React.createRef(); // a reference tag for the Timer component within the DOM
    this.state = {
      time: 0,
      color: "#" + Math.floor(Math.random() * 16777215).toString(16)
    };
  }

  //Your code here

  // executes right after the initial render
  componentDidMount() {
    this.interval = setInterval(
      this.clockTick,
      this.props.updateInterval * 1000
    );
  }

  // executes when Timer component is removed from the DOM
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  // is executed every time Timer component is rerendered
  // rerender can be caused by internal changes to state or external changes from Parent props
  componentDidUpdate() {
    this.timer.current.style.color =
  "#" + Math.floor(Math.random() * 16777215).toString(16);
  }

  // is executed upon changes to current props/state and before a rerender
  // has access to the current props/state and the new props/state 
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.time === nextState.time) {
      return false
    }
    return true
  }

  render() {
    const { time, color, logText } = this.state;
    return (
      <section className="Timer" style={{ background: color }} ref={this.timer}>
        <h1>{time}</h1>
        <button onClick={this.stopClock}>Stop</button>
        <aside className="logText">{logText}</aside>
        <small onClick={this.handleClose}>X</small>
      </section>
    );
  }

  clockTick = () => {
    this.setState(prevState => ({
      time: prevState.time + this.props.updateInterval
    }));
  };

  stopClock = () => {
    clearInterval(this.interval);
    this.setState({ className: "hidden" });
  };

  // for the 'x' button,
  handleClose = () => {
    this.props.removeTimer(this.props.id);
  };
}

export default Timer;
