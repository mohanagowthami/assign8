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
      <div className="parentInputBoxStyles">
        <input
          className="inputBoxStyles"
          type="text"
          onChange={this.handleChange}
          value={this.state.inputMsg}
        />

        <div>
          <button className="normal" onClick={this.submitCallTodoList}>
            {" "}
            update
          </button>
        </div>
      </div>
    );
    return a;
  };
  renderText = () => {
    console.log(" this is in todolistitem", this.state.inputMsg);
    var k = (
      <div className="parentTextStyles">
        <div className="textStyles">
          {this.props.obj.active ? (
            <p className="todoContentStyles"> {this.state.inputMsg}</p>
          ) : (
            <p>
              {" "}
              <strike className="strikeTodoContentStyles">
                {this.state.inputMsg}
              </strike>
            </p>
          )}
        </div>

        <button className="normal" onClick={this.submit}>
          {" "}
          edit
        </button>
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
    const img = this.props.obj.active
      ? "assets/uncheckbox.png"
      : "assets/checkbox.png";
    return (
      <div>
        <div className="boxstyles">
          <div className="checkBoxStyles">
            <img className="imagestyles" src={img} onClick={this.inActive} />
          </div>
          <div className="editStyles">
            {this.state.variable ? this.renderText() : this.renderInputBox()}
          </div>
          <div className="crossButtonStyles">
            <img
              className="imagestyles"
              src="assets/crossimg.png"
              alt="crossbutton"
              onClick={this.onRemoveItem}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default TodoListItem;
