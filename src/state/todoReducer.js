export function todoReducer(state, action) {
  let todoId = state.length;

  switch (action.type) {
    case "add": {
      const { text } = action.payload;
      return [
        ...state,
        {
          id: state.length + 1,
          text,
          completed: false,
        },
      ];
    }
    case "updateText": {
      const { text } = action.payload;
      return state.map((todo) =>
        todo.id === todoId ? { ...todo, text } : todo
      );
    }
    case "saveId": {
      const { id } = action.payload;
      todoId = id;
      return state;
    }
    case "updateCompleted": {
      const { id } = action.payload;
      console.log("todoId", todoId);
      return state.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
    }
    case "delete": {
      return state.filter((todo) => todo.id !== todoId);
    }

    default:
      throw new Error("unknown action");
  }
}
