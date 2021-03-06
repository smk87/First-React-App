import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1
  };
  styles = {};
  render() {
    let classes = "badge m-2";
    classes += this.state.count === 0 ? "warning" : "primary";
    return (
      <div>
        <span className="badge badge-primary m-2">{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
