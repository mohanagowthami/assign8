import React, { Component } from "react";
import AddTodo from "./AddTodo";
import Todolist from "./TodoList";
import ActionsComponent from "./ActionsComponent";
import { arrayExpression } from "@babel/types";
class TodoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoarray: []
    };
  }
  idCount = 0;

  textField = msg => {
    var todomsg = msg;
    // console.log(todomsg);
    var obj = {};
    obj.id = this.idCount++;
    obj.msg = todomsg;
    obj.active = true;
    this.setState({
      todoarray: [obj].concat(this.state.todoarray)
    });
    // console.log(this.state.todoarray);
  };

  changedarrayfun = (input, id) => {
    var array = [];
    console.log(" this in todocontainer");
    console.log(input);
    console.log(id);
    var reqindex = this.state.todoarray.findIndex(function(obj, index) {
      return obj.id === id;
    });
    console.log(" the required id");
    console.log(reqindex);

    array = this.state.todoarray;
    array[reqindex].msg = input;
    this.setState({
      todoarray: array
    });
  };

  render() {
    return (
      <div>
        <AddTodo ontodotext={this.textField} />
        <Todolist
          array={this.state.todoarray}
          changedarray={this.changedarrayfun}
        />
        <ActionsComponent />
      </div>
    );
  }
}

export default TodoContainer;
