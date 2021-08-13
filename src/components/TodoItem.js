import React, { memo, useCallback } from "react";

export default memo(function TodoItem({ item, dispatchTodo }) {
  console.log("TodoItem render");

  const toggleItemCheck = useCallback(() => {
    dispatchTodo({
      type: "updateCompleted",
      payload: {
        id: item.id,
      },
    });
  }, [item, dispatchTodo]);

  const setId = useCallback(() => {
    dispatchTodo({
      type: "saveId",
      payload: {
        id: item.id,
      },
    });
  }, [item, dispatchTodo]);

  return (
    <div onClick={() => setId()} style={{ cursor: "pointer" }}>
      {item.id} - {item.text} | {JSON.stringify(item.completed)}
      <input type="checkbox" onChange={() => toggleItemCheck()} />
    </div>
  );
});
