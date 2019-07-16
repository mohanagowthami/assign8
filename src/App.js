import React, { Component } from "react";
import TodoContainer from "./components/TodoContainer";
import "./components/styles.css";
class App extends Component {
  render() {
    return (
      <div classname="container">
        <TodoContainer />
      </div>
    );
  }
}

export default App;
