/**
 * @flow strict-local
 * @returns
 */

import React from "react";
import { useReducer } from "react";

import TodoInput from "./TodoInput.react";
import TodoList from "./TodoList.react";

type TodoAction = {
  type: string,
  todo: string,
};

const initialState = ["first item", "second item", "third item"];

function reducer(state: Array<string>, action: TodoAction) {
  switch (action.type) {
    case "add":
      return [...state, action.todo];
    case "delete":
      return state.filter((todo) => todo !== action.todo);
    default:
      return state;
  }
}

export const TodoContext: Object = React.createContext();

export default function TodoApp(): React$MixedElement {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      <TodoInput />
      <TodoList todoList={state} />
    </TodoContext.Provider>
  );
}
