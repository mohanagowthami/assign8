import React, { Component } from "react";
import AddTodo from "./AddTodo";
import Todolist from "./TodoList";
import ActionsComponent from "./ActionsComponent";
import todoListTypeConstants from "./constants";
import "./styles.css";
class TodoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoArray: [],
      type: todoListTypeConstants.all
    };
  }
  idCount = 0;
  onUpdateAddTodo = msg => {
    console.log("the msg is", msg);
    var todoMsg = msg;
    var obj = {};
    obj.id = this.idCount++;
    obj.msg = todoMsg;
    obj.active = true;
    this.setState({
      todoArray: [obj].concat(this.state.todoArray)
    });
  };

  findingIndex = id => {
    var reqIndex = this.state.todoArray.findIndex(function(obj, index) {
      return obj.id === id;
    });
    return reqIndex;
  };
  onUpdateTodo = (input, id) => {
    var array = [];
    var reqIndex = this.findingIndex(id);
    array = this.state.todoArray;
    array[reqIndex].msg = input;
    this.setState({
      todoArray: array
    });
  };
  onInActive = id => {
    var array = [];
    var reqIndex = this.findingIndex(id);
    array = this.state.todoArray;
    array[reqIndex].active = !array[reqIndex].active;
    this.setState({
      todoArray: array
    });
  };
  onRemoveItem = id => {
    var array = [];
    var reqIndex = this.findingIndex(id);
    array = this.state.todoArray;
    array.splice(reqIndex, 1);
    this.setState({
      todoArray: array
    });
  };

  onClearCompleted = () => {
    const array = this.state.todoArray.filter(function(obj) {
      return obj.active === true;
    });
    this.setState({
      todoArray: array
    });
  };

  onTodoStateUpdate = value => {
    this.setState({
      type: value
    });
  };
  getTodoList = () => {
    var array = [];
    if (this.state.type === todoListTypeConstants.completed) {
      array = this.state.todoArray.filter(function(obj) {
        return obj.active === false;
      });
      this.items = array.length;
      return array;
    } else if (this.state.type === todoListTypeConstants.active) {
      array = this.state.todoArray.filter(function(obj) {
        return obj.active === true;
      });
      this.items = array.length;
      return array;
    } else {
      array = this.state.todoArray;
      console.log(" value in todo array ", this.state.todoArray);
      this.items = array.length;
      return array;
    }
  };
  render() {
    const todoList = this.getTodoList();
    return (
      <div className="layout">
        <div className="boxshadow">
          <AddTodo onAddTodo={this.onUpdateAddTodo} />
          <Todolist
            todoArray={todoList}
            onUpdateTodo={this.onUpdateTodo}
            onInActive={this.onInActive}
            onRemoveItem={this.onRemoveItem}
          />
          <ActionsComponent
            onTodoStateUpdate={this.onTodoStateUpdate}
            onClearCompleted={this.onClearCompleted}
            items={this.items}
            type={this.state.type}
          />
        </div>
      </div>
    );
  }
}
export default TodoContainer;
