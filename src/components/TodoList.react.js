import type { PreloadedQuery } from 'react-relay/relay-hooks/EntryPointTypes.flow';
import type { TodoListQuery as TodoListQueryType } from './__generated__/TodoListQuery.graphql';

import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import { useMutation, usePreloadedQuery } from 'react-relay/hooks';

type Props = {
  queryRef: PreloadedQuery<TodoListQueryType>,
};

export default function TodoList(props: Props): React$MixedElement {
  const data = usePreloadedQuery(
    graphql`
      query TodoListQuery($id: oid!) {
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
      mutation TodoListDeleteMutation($id: uuid!) {
        delete_todos_by_pk(id: $id) {
          id
          title
          author_id
        }
      }
    `,
  );

  const listItems = data.authors_by_pk?.todos.map((todo) => (
    <li
      key={todo.id}
      onClick={() => {
        commitDelete({
          variables: { id: todo.id },
          updater: (store) => {
            const authorRecord = store.get('1');
            const todos = authorRecord.getLinkedRecords('todos');
            authorRecord.setLinkedRecords(
              todos.filter((todoRecord) => todoRecord.getDataID() !== todo.id),
              'todos',
            );
          },
        });
      }}>
      {todo.title}
    </li>
  ));

  return <ul>{listItems}</ul>;
}
