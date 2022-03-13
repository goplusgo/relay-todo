/**
 * @flow strict-local
 * @returns
 */

import React from "react";
import TodoInput from "./TodoInput.react";
import TodoList from "./TodoList.react";
import type { PreloadedQuery } from "react-relay/relay-hooks/EntryPointTypes.flow";
import type { TodoAppQuery as TodoAppQueryType } from "./__generated__/TodoAppQuery.graphql";
import graphql from "babel-plugin-relay/macro";
import { useMutation, usePreloadedQuery } from "react-relay/hooks";

export const TodoContext: Object = React.createContext();

type Props = {
  queryRef: PreloadedQuery<TodoAppQueryType>,
};

export default function TodoApp(props: Props): React$MixedElement {
  const data = usePreloadedQuery(
    graphql`
      query TodoAppQuery {
        todo_list {
          id
          name
        }
      }
    `,
    props.queryRef
  );

  const [commitDelete] = useMutation(
    graphql`
      mutation TodoAppDeleteMutation($id: oid!) {
        delete_todo_list_by_pk(id: $id) {
          id
          name
        }
      }
    `
  );

  const [commitInsert] = useMutation(
    graphql`
      mutation TodoAppInsertMutation($name: String!) {
        insert_todo_list_one(object: { name: $name }) {
          id
          name
        }
      }
    `
  );

  return (
    <TodoContext.Provider value={{ commitDelete, commitInsert }}>
      <TodoInput />
      <TodoList todoList={data.todo_list} />
    </TodoContext.Provider>
  );
}
