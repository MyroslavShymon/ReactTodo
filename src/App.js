import "./App.css";
import Home from "./Home";
import React, { memo, useReducer, useState } from "react";
import { TodoContext, todoReducer } from "./state";
const todos = [
  { id: 1, text: "buy bread", completed: false },
  { id: 2, text: "buy oil", completed: false },
  { id: 3, text: "buy strawberry", completed: true },
];
function App() {
  const [todosState, dispatchTodo] = useReducer(todoReducer, todos);
  const [state1, setState1] = useState(0);
  const [state2, setState2] = useState(0);
  // TodoContext;
  console.log("app render");
  return (
    <div className="App">
      <TodoContext.Provider value={{ todosState, dispatchTodo }}>
        <Home counter={state1} />

        <button onClick={() => setState1(state1 + 1)}>
          state1 props at home {state1}
        </button>
        <button onClick={() => setState2(state2 + 1)}>
          state2 in app {state2}
        </button>
      </TodoContext.Provider>
    </div>
  );
}

export default memo(App);
