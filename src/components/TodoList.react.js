/**
 * @flow strict-local
 * @returns
 */

import { TodoContext } from "./TodoApp.react";

import React from "react";
import { useContext } from "react";

type Props = {
  todoList: Array<string>,
};

export default function TodoList(props: Props): React$MixedElement {
  const { dispatch } = useContext(TodoContext);
  const listItems = props.todoList.map((todo) => (
    <li
      onClick={() => {
        dispatch({ type: "delete", todo: todo });
      }}
    >
      {todo}
    </li>
  ));

  return <ul>{listItems}</ul>;
}
