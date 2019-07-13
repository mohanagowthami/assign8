import React, { Component } from "react";
class TodoListItem extends Component {
  constructor(props) {
    super(props);
    var content = this.props.todoListMsg;

    console.log("this id in item");

    this.state = {
      inputmsg: content,
      variable: true
    };
  }
  id = this.props.id;
  handleChange = event => {
    this.setState({
      inputmsg: event.target.value
    });
    console.log(this.state.inputmsg);
  };
  submit = () => {
    this.setState({
      variable: !this.state.variable
    });
  };
  submitCallTodoList = () => {
    this.setState({
      variable: !this.state.variable
    });

    this.props.calltodolistitem(this.state.inputmsg, this.id);
  };
  renderInputBoxFun = () => {
    var a = (
      <div>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.inputmsg}
        />
        <button onClick={this.submitCallTodoList}> update</button>
      </div>
    );
    return a;
  };
  renderTextFun = () => {
    var k = (
      <div>
        {this.state.inputmsg}
        <button onClick={this.submit}> edit</button>
      </div>
    );
    return k;
  };

  render() {
    return (
      <div>
        {this.state.variable ? this.renderTextFun() : this.renderInputBoxFun()}
      </div>
    );
  }
}
export default TodoListItem;
