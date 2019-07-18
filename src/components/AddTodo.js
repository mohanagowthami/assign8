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
      height: 65,
      border: 0
    };
    return (
      <div className="boxstyles">
        <div>
          <img
            className="imagestyles"
            src="assets/dropdown.png"
            alt="dropdown"
          />
        </div>
        <div>
          <input
            className="outlineStyles"
            style={style}
            type="text"
            onChange={this.handleChange}
            placeholder="Next Todo"
            value={this.state.inputMsg}
            size="50"
            onKeyDown={this.onSubmit}
          />
        </div>
      </div>
    );
  }
}

export default AddTodo;
