/**
 * @flow strict-local
 * @returns
 */

import { TodoContext } from "./TodoApp.react";

import isEmpty from "fbjs/lib/isEmpty";
import React from "react";
import { useContext, useRef } from "react";

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
            variables: { name: inputRef.current?.value },
          })
        }
      >
        Add
      </button>
    </>
  );
}
