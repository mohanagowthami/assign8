import React, { Component } from "react";
import "./styles.css";
class TodoListItem extends Component {
  constructor(props) {
    super(props);
    var content = this.props.obj.msg;

    this.state = {
      inputMsg: content,
      variable: true
    };
  }
  id = this.props.obj.id;
  handleChange = event => {
    this.setState({
      inputMsg: event.target.value
    });
    console.log(this.state.inputMsg);
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

    this.props.onUpdateTodo(this.state.inputMsg, this.id);
  };
  renderInputBox = () => {
    var a = (
      <div className="inputboxstyles">
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.inputMsg}
        />
        <button onClick={this.submitCallTodoList}> update</button>
      </div>
    );
    return a;
  };
  renderText = () => {
    console.log(" this is in todolistitem", this.state.inputMsg);
    var k = (
      <div>
        {this.props.obj.active ? (
          this.state.inputMsg
        ) : (
          <p>
            {" "}
            <strike>{this.state.inputMsg}</strike>
          </p>
        )}
        <button onClick={this.submit}> edit</button>
      </div>
    );
    return k;
  };
  inActive = () => {
    this.props.onInActive(this.id);
  };
  onRemoveItem = () => {
    var bol = window.confirm(" is it ok, to delete a todo item ");
    if (bol) this.props.onRemoveItem(this.id);
  };
  render() {
    return (
      <div>
        <div className="boxstyles">
          <input
            type="checkbox"
            onChange={this.inActive}
            checked={!this.props.obj.active}
          />
          {this.state.variable ? this.renderText() : this.renderInputBox()}

          <img
            className="imagestyles"
            src="assets/crossimg.png"
            alt="crossbutton"
            onClick={this.onRemoveItem}
          />
        </div>
      </div>
    );
  }
}
export default TodoListItem;
