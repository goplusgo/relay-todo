/**
 * @flow strict-local
 * @returns
 */

import { TodoContext } from "./TodoApp.react";

import React from "react";
import { useContext } from "react";

type Props = {
  todoList: $ReadOnlyArray<{|
    +id: string,
    +name: string,
  |}>,
};

export default function TodoList(props: Props): React$MixedElement {
  const { commitDelete } = useContext(TodoContext);

  const listItems = props.todoList.map((todo) => (
    <li
      key={todo.id}
      onClick={() => {
        commitDelete({
          variables: { id: todo.id },
        });
      }}
    >
      {todo.name}
    </li>
  ));

  return <ul>{listItems}</ul>;
}
