import React, { Component } from "react";
import TodolistItem from "./TodoListItem";
class Todolist extends Component {
  input = " ";
  id = 0;
  onUpdateTodo = (input, id) => {
    this.input = input;
    this.id = id;
    this.props.onUpdateTodo(this.input, this.id);
  };
  onInActive = id => {
    this.props.onInActive(id);
  };
  onRemoveItem = id => {
    this.props.onRemoveItem(id);
  };
  renderTodoListDisplay = () => {
    var i,
      todoArray = [];
    for (i = 0; i < this.props.todoArray.length; i++) {
      var id = this.props.todoArray[i].id;
      var obj = {};
      obj = this.props.todoArray[i];
      var singleListItem = (
        <div>
          {" "}
          <TodolistItem
            key={id}
            onUpdateTodo={this.onUpdateTodo}
            onInActive={this.onInActive}
            obj={obj}
            onRemoveItem={this.onRemoveItem}
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
