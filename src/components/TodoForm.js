import React, { memo, useCallback } from "react";
import TodoInput from "./TodoInput";

export default memo(function TodoForm({ dispatchTodo }) {
  console.log("Todo form render");
  const handleSubmit = useCallback(
    (text) => {
      dispatchTodo({ type: "add", payload: { text } });
    },
    [dispatchTodo]
  );

  const deleteTodo = useCallback(() => {
    dispatchTodo({ type: "delete" });
  }, [dispatchTodo]);

  const updateTodoText = useCallback(
    (text) => {
      dispatchTodo({ type: "updateText", payload: { text } });
    },
    [dispatchTodo]
  );

  return (
    <>
      <TodoInput
        action={handleSubmit}
        buttonName="Add!"
        textName="Add Todo: "
      />
      <br />
      <TodoInput
        action={updateTodoText}
        buttonName="Rename!"
        textName="Rename Todo: "
      />
      <br />
      <button onClick={deleteTodo}>Delete </button>
      <br />
    </>
  );
});
