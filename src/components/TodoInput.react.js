/**
 * @flow strict-local
 * @returns
 */

import React from "react";

export default function TodoInput(): React$MixedElement {
  return (
    <>
      <input type="text" id="todo-input" name="text" autoComplete="off" />
      <button type="submit">Add</button>
    </>
  );
}
