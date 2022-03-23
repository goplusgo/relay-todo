/**
 * @flow strict-local
 * @returns
 */

import React from 'react';
import TodoInput from './TodoInput.react';
import TodoList from './TodoList.react';
import type { PreloadedQuery } from 'react-relay/relay-hooks/EntryPointTypes.flow';
import type { TodoAppQuery as TodoAppQueryType } from './__generated__/TodoAppQuery.graphql';
import graphql from 'babel-plugin-relay/macro';
import { useMutation, usePreloadedQuery } from 'react-relay/hooks';

export const TodoContext: Object = React.createContext();

type Props = {
  queryRef: PreloadedQuery<TodoAppQueryType>,
};

export default function TodoApp(props: Props): React$MixedElement {
  const data = usePreloadedQuery(
    graphql`
      query TodoAppQuery($id: oid!) {
        authors_by_pk(id: $id) {
          id
          name
          age
          todos {
            id
            title
            author_id
          }
        }
      }
    `,
    props.queryRef,
  );

  const [commitDelete] = useMutation(
    graphql`
      mutation TodoAppDeleteMutation($id: uuid!) {
        delete_todos_by_pk(id: $id) {
          id
          title
          author_id
        }
      }
    `,
  );

  const [commitInsert] = useMutation(
    graphql`
      mutation TodoAppInsertMutation($title: String!, $author_id: oid!) {
        insert_todos_one(object: { author_id: $author_id, title: $title }) {
          id
          title
          author_id
        }
      }
    `,
  );

  return (
    <TodoContext.Provider value={{ commitDelete, commitInsert }}>
      <TodoInput />
      <TodoList todoList={data.authors_by_pk?.todos ?? []} />
    </TodoContext.Provider>
  );
}
