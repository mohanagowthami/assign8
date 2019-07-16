import React, { Component } from "react";
import todoListTypeConstants from "./constants";
class ActionsComponent extends Component {
  onSubmitAll = () => {
    this.props.onTodoStateUpdate(todoListTypeConstants.all);
  };
  onSubmitActive = () => {
    this.props.onTodoStateUpdate(todoListTypeConstants.active);
  };
  onSubmitCompleted = () => {
    this.props.onTodoStateUpdate(todoListTypeConstants.completed);
  };
  onSubmitClearCompleted = () => {
    this.props.onClearCompleted();
  };

  render() {
    return (
      <div className="actionsStyles">
        {this.props.items} items left
        <div className="buttonsCenter">
          <button onClick={this.onSubmitAll}>ALL</button>
          <button onClick={this.onSubmitActive}> ACTIVE</button>
          <button onClick={this.onSubmitCompleted}> COMPLETED</button>
        </div>
        <button onClick={this.onSubmitClearCompleted}> CLEARCOMPLETED</button>
      </div>
    );
  }
}

export default ActionsComponent;
