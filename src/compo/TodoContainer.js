import React, { Component } from "react";
import AddTodo from "./AddTodo";
import Todolist from "./TodoList";
import ActionsComponent from "./ActionsComponent";
import { arrayExpression } from "@babel/types";
class TodoContainer extends Component {
  textField = msg => {
    var todomsg = msg;
    console.log("msg");
  };
  creationOfObj = (count, todoarray) => {
    var obj = {};
    (obj.id = count), (obj.msg = todomsg), (obj.active = true);
    todoarray.push(obj);
    console.log(todoarray);
  };

  render() {
    const count = 0;
    var todoarray = [];

    return (
      <div>
        var todomsg =<AddTodo ontodotext={this.textField} />
        <Todolist />
        <ActionsComponent />
        {this.creationOfObj(count++, todoarray)}
      </div>
    );
  }
}

export default TodoContainer;
