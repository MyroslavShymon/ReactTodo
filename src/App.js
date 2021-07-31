import TodoList from "./Todo/TodoList";
import React, { useState, useEffect } from "react";
import Context from "./context";
import Loader from "./Lader/Loader";
import Modal from "./Modal/Modal";

const AddTodo = React.lazy(() => import("./Todo/AddTodo"));

function App() {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((response) => response.json())
      .then((todos) =>
        setTimeout(() => {
          setState(todos);
          setLoading(false);
        }, 2000)
      );
  }, []);

  function toggleTodo(id) {
    setState(
      state.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }
  function addTodo(title) {
    setState(state.concat([{ id: state.length + 1, completed: false, title }]));
  }

  function removeTodo(id) {
    setState(state.filter((todo) => todo.id !== id));
  }
  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper ">
        <h1>React Todo</h1>
        <Modal />
        <React.Suspense fallback={<p>Loading...</p>}>
          <AddTodo onCreate={addTodo} />
        </React.Suspense>
        {loading && <Loader />}
        {state.length ? (
          <TodoList todos={state} onToggle={toggleTodo} />
        ) : loading ? null : (
          <p>No Todos!</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
