import React from "react";
import { connect } from "react-redux";

class Example extends React.Component {
  render() {
    let counter = this.props.counter;
    return (
      <div className="ComponentThree">
        <h5>3. Class Component</h5>
        <p>Counter: {counter}</p>
        <button onClick={() => this.props.increase()}>jkabuiwb</button>
      </div>
    );
  }
}

function xyz(state) {
  const counter = state.count;
  console.log(state);
  return {
    counter,
  };
}

function xyza(dispatch) {
  return {
    increase: () => dispatch({ type: "INCREMENT" }),
  };
}

export default connect(xyz, xyza)(Example);
