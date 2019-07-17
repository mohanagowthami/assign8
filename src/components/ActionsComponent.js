import React, { Component } from "react";
import todoListTypeConstants from "./constants";
import { tsParenthesizedType } from "@babel/types";
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
  styles = " ";
  onSubmitClearCompleted = () => {
    this.props.onClearCompleted();
  };

  render() {
    const value = this.props.type;

    return (
      <div className="actionsStyles">
        {this.props.items} items left
        <div className="todoStateUpdateStyles">
          <button
            className={
              this.props.type === todoListTypeConstants.all
                ? "selected"
                : "normal"
            }
            onClick={this.onSubmitAll}
          >
            All
          </button>
          <button
            className={
              this.props.type === todoListTypeConstants.active
                ? "selected"
                : "normal"
            }
            onClick={this.onSubmitActive}
          >
            {" "}
            Active
          </button>
          <button
            className={
              this.props.type === todoListTypeConstants.completed
                ? "selected"
                : "normal"
            }
            onClick={this.onSubmitCompleted}
          >
            {" "}
            Completed
          </button>
        </div>
        <button
          className="clearCompletedStyles"
          onClick={this.onSubmitClearCompleted}
        >
          {" "}
          ClearCompleted
        </button>
      </div>
    );
  }
}

export default ActionsComponent;
