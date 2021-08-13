import React, { memo } from "react";
import TodoListContext from "./components/TodoListContainer";

export default memo(
  function Home({ counter }) {
    console.log("Home render");
    return (
      <>
        <TodoListContext />
        {counter}
      </>
    );
  },
  (prevState, nextState) => {
    console.log(prevState, nextState);
    if (nextState.counter % 5 === 0) {
      return false;
    } else {
      return true;
    }
  }
);
