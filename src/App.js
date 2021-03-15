import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    name: "Myeongil",
    count: 0,
  };

  add = () => {
    this.setState((current) => ({
      name: current.name,
      count: current.count + 1,
    }));
  };
  minus = () => {
    this.setState((current) => ({
      name: current.name,
      count: current.count - 1,
    }));
  };

  render() {
    return (
      <div>
        <h1>Hi ,{this.state.name}</h1>
        <h3>This is class component</h3>
        <h3>The number is : {this.state.count}</h3>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Min</button>
      </div>
    );
  }
}
export default App;
