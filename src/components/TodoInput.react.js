/**
 * @flow strict-local
 * @returns
 */

import { TodoContext } from './TodoApp.react';

import isEmpty from 'fbjs/lib/isEmpty';
import React from 'react';
import { useContext, useRef } from 'react';

export default function TodoInput(): React$MixedElement {
  const inputRef = useRef(null);
  const { commitInsert } = useContext(TodoContext);

  return (
    <>
      <input
        type="text"
        id="todo-input"
        name="text"
        ref={inputRef}
        autoComplete="off"
      />
      <button
        type="submit"
        onClick={() =>
          !isEmpty(inputRef.current?.value) &&
          commitInsert({
            variables: { author_id: '1', title: inputRef.current?.value },
            updater: (store) => {
              const payload = store.getRootField('insert_todos_one');
              const authorRecord = store.get('1');
              const todos = authorRecord.getLinkedRecords('todos');
              authorRecord.setLinkedRecords([payload, ...todos], 'todos');
            },
            onCompleted: (data) => {
              console.log('***data:', data);
            },
          })
        }>
        Add
      </button>
    </>
  );
}
