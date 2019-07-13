import React, { Component } from "react";
import TodolistItem from "./TodoListItem";

class Todolist extends Component {
  input = " ";
  id = 0;
  onEditTodoListFun = (input, id) => {
    console.log("changed value from todolistitem");
    this.input = input;
    this.id = id;
    console.log(this.input);
    console.log(this.id);
    this.props.changedarray(this.input, this.id);
  };

  renderTodoListDisplay = () => {
    var i,
      todoArray = [];
    for (i = 0; i < this.props.array.length; i++) {
      var todoContent = this.props.array[i].msg;
      var id = this.props.array[i].id;

      var singleListItem = (
        <div>
          {" "}
          <TodolistItem
            key={id}
            todoListMsg={todoContent}
            calltodolistitem={this.onEditTodoListFun}
            id={id}
          />{" "}
        </div>
      );

      todoArray.push(singleListItem);
    }

    return todoArray;
  };

  render() {
    return <div>{this.renderTodoListDisplay()}</div>;
  }
}

export default Todolist;
