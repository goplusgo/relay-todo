/**
 * @flow strict-local
 * @returns
 */

import React from "react";

type Props = {
  todoList: Array<string>,
};

export default function TodoList(props: Props): React$MixedElement {
  const listItems = props.todoList.map((todo) => <li>{todo}</li>);

  return <ul>{listItems}</ul>;
}
