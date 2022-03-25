import React from 'react';
import TodoHeader from './TodoHeader.react';
import TodoInput from './TodoInput.react';
import TodoList from './TodoList.react';
import graphql from 'babel-plugin-relay/macro';

import * as TodoAppQuery from './__generated__/TodoAppQuery.graphql';

import RelayEnvironment from '../RelayEnvironment';
import { loadQuery, usePreloadedQuery } from 'react-relay/hooks';

const preloadedQuery = loadQuery(RelayEnvironment, TodoAppQuery.default, {
  id: '1',
});

export default function TodoApp(props: Props): React$MixedElement {
  const data = usePreloadedQuery(
    graphql`
      query TodoAppQuery($id: oid!) {
        authors_by_pk(id: $id) {
          id
          name
          age
          ...TodoList_authors
        }
      }
    `,
    preloadedQuery,
  );

  return (
    <>
      <TodoHeader userName={data.authors_by_pk.name} />
      <TodoInput />
      <TodoList authors={data.authors_by_pk} />
    </>
  );
}
