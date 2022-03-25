/**
 * @generated SignedSource<<0547e4454a187ac5ee40fb2482692f90>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type TodoList_authors$fragmentType: FragmentType;
export type TodoList_authors$data = {|
  +todos: $ReadOnlyArray<{|
    +id: any,
    +title: string,
    +author_id: any,
  |}>,
  +$fragmentType: TodoList_authors$fragmentType,
|};
export type TodoList_authors$key = {
  +$data?: TodoList_authors$data,
  +$fragmentSpreads: TodoList_authors$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TodoList_authors",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "todos",
      "kind": "LinkedField",
      "name": "todos",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "title",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "author_id",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "authors",
  "abstractKey": null
};

(node/*: any*/).hash = "8c8f47255c03134d8ad04cb98fa48b41";

module.exports = ((node/*: any*/)/*: Fragment<
  TodoList_authors$fragmentType,
  TodoList_authors$data,
>*/);
