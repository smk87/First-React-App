import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };
  styles = {

  };
  render() {
    return (
      <div>
        <span style={    fontSize: 10,
    fontWeight: "bold"} className="badge badge-primary m-2">
          {this.formatCount()}
        </span>
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
