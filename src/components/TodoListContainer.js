import React, { useContext } from "react";

import { TodoContext } from "../state";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function TodoListContainer() {
  const { todosState, dispatchTodo } = useContext(TodoContext);

  console.log("TodoListContainer render", todosState);
  return (
    <>
      <TodoForm dispatchTodo={dispatchTodo} />
      <TodoList todosState={todosState} dispatchTodo={dispatchTodo} />
    </>
  );
}
