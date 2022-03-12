/**
 * @flow strict-local
 * @returns
 */

import React from "react";
import { useReducer } from "react";

import TodoInput from "./TodoInput.react";
import TodoList from "./TodoList.react";
import type { PreloadedQuery } from "react-relay/relay-hooks/EntryPointTypes.flow";
import type { TodoAppQuery as TodoAppQueryType } from "./__generated__/TodoAppQuery.graphql";
import graphql from "babel-plugin-relay/macro";
import { usePreloadedQuery } from "react-relay/hooks";

type TodoAction = {
  type: string,
  todo: string,
};

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

type Props = {
  queryRef: PreloadedQuery<TodoAppQueryType>,
};

export default function TodoApp(props: Props): React$MixedElement {
  const data = usePreloadedQuery(
    graphql`
      query TodoAppQuery {
        todo_list {
          name
        }
      }
    `,
    props.queryRef
  );

  const [state, dispatch] = useReducer(
    reducer,
    data.todo_list.map((item) => item.name)
  );

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      <TodoInput />
      <TodoList todoList={state} />
    </TodoContext.Provider>
  );
}
