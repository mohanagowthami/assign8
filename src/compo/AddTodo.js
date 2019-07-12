import React, { Component } from "react";

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputmsg: " "
    };
  }
  handleChange = event => {
    this.setState({
      inputmsg: event.target.value
    });
  };
  submit = props => {
    this.props.ontodotext(this.state.inputmsg);
    this.setState({
      inputmsg: " "
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.handleChange}
          placeholder="eneter the todo list"
          value={this.state.inputmsg}
        />
        <button onClick={this.submit}> submit</button>
      </div>
    );
  }
}

export default AddTodo;
