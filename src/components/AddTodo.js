import React, { Component } from "react";

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputMsg: " "
    };
  }
  handleChange = event => {
    this.setState({
      inputMsg: event.target.value
    });
  };
  onSubmit = props => {
    this.props.onAddTodo(this.state.inputMsg);
    this.setState({
      inputMsg: " "
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.handleChange}
          placeholder="eneter the todo "
          value={this.state.inputMsg}
        />
        <button onClick={this.onSubmit}> Submit</button>
      </div>
    );
  }
}

export default AddTodo;
