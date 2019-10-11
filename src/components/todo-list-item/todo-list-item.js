import React, { Component } from "react";

import "./todo-list-item.css";

export default class TodoListItem extends Component {
  onLabelClick = () => {
    this.setState({
      done: true,
      important: false
    });
  };

  onMarkImportant = () => {
    this.setState({
      important: true
    });
  };

  state = {
    done: false,
    important: false
  };

  render() {
    const { label } = this.props;
    const { done, important } = this.state;

    let classNames = "todo-list-item";
    if (done) {
      classNames += " done";
    }

    if (important) {
      classNames += " important";
    }

    return (
      <span className={classNames}>
        <span className="todo-list-item-label" onClick={this.onLabelClick}>
          {label}
        </span>
        <button
          type="button"
          className="btn btn-outline-success btn-sm"
          onClick={this.onMarkImportant}
        >
          <i className="fa fa-exclamation"></i>
        </button>
        <button type="button" className="btn btn-outline-danger btn-sm">
          <i className="fa fa-trash-o"></i>
        </button>
      </span>
    );
  }
}
