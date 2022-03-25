import type { TodoList_authors$key } from 'TodoList_authors.graphql';

import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import { useFragment, useMutation } from 'react-relay/hooks';

type Props = {
  authors: TodoList_authors$key,
};

export default function TodoList(props: Props): React$MixedElement {
  const data = useFragment(
    graphql`
      fragment TodoList_authors on authors {
        todos {
          id
          title
          author_id
        }
      }
    `,
    props.authors,
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

  const listItems = data.todos.map((todo) => (
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
