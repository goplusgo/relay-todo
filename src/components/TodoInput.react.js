import isEmpty from 'fbjs/lib/isEmpty';
import React from 'react';
import { useState } from 'react';
import graphql from 'babel-plugin-relay/macro';
import { useMutation } from 'react-relay/hooks';

export default function TodoInput(): React$MixedElement {
  const [todo, setTodo] = useState('');

  const [commitInsert] = useMutation(
    graphql`
      mutation TodoInputInsertMutation($title: String!, $author_id: oid!) {
        insert_todos_one(object: { author_id: $author_id, title: $title }) {
          id
          title
          author_id
        }
      }
    `,
  );

  return (
    <>
      <input
        type="text"
        id="todo-input"
        name="text"
        value={todo}
        autoComplete="off"
        onChange={(e) => {
          setTodo(e.currentTarget.value);
        }}
      />
      <button
        type="submit"
        onClick={() =>
          !isEmpty(todo) &&
          commitInsert({
            variables: { author_id: '1', title: todo },
            updater: (store) => {
              const payload = store.getRootField('insert_todos_one');
              const authorRecord = store.get('1');
              const todos = authorRecord.getLinkedRecords('todos');
              authorRecord.setLinkedRecords([payload, ...todos], 'todos');
            },
          })
        }>
        Add
      </button>
    </>
  );
}
