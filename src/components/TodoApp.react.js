/**
 * @flow strict-local
 * @returns
 */

import React from "react";

import TodoInput from "./TodoInput.react";
import TodoList from "./TodoList.react";

const initialTodoList = ["first item", "second item", "third item"];

export default function TodoApp(): React$MixedElement {
  return (
    <>
      <TodoInput />
      <TodoList todoList={initialTodoList} />
    </>
  );
}
