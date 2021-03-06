import React from "react";

import TodoList from "../todo-list";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";

import "./app.css";

const App = () => {
  const todoData = [
    { label: "Drink Coffee", important: false, id: 1 },
    { label: "Make React App", important: true, id: 2 },
    { label: "Do Somesing", important: false, id: 3 }
  ];

  return (
    <div className="todo-app">
      <AppHeader toDo={3} done={1} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList todos={todoData} />
    </div>
  );
};

export default App;
