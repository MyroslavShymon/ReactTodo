import React, { memo } from "react";

import TodoItem from "./TodoItem";

export default memo(function TodoList({ todosState, dispatchTodo }) {
  console.log("TodoList render");

  return todosState.map((todo) => (
    <TodoItem key={todo.id} item={todo} dispatchTodo={dispatchTodo} />
  ));
});
