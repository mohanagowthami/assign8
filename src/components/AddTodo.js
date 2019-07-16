import React, { Component } from "react";
import "./styles.css";
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

  onSubmit = event => {
    if (event.keyCode === 13) {
      console.log(this.state.inputMsg);
      if (this.state.inputMsg !== " ") {
        this.props.onAddTodo(this.state.inputMsg);
      }
      this.setState({
        inputMsg: " "
      });
    }
  };

  render() {
    var style = {
      height: 85
    };
    return (
      <div className="boxstyles">
        <div className="inputboxstyles">
          <input
            style={style}
            type="text"
            onChange={this.handleChange}
            placeholder="enter the todo"
            value={this.state.inputMsg}
            size="100"
            onKeyDown={this.onSubmit}
          />
        </div>
      </div>
    );
  }
}

export default AddTodo;
