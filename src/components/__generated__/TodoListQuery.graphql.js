/**
 * @generated SignedSource<<05d47342ed6d867a53f1f015c4234237>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
export type TodoListQuery$variables = {|
  id: any,
|};
export type TodoListQuery$data = {|
  +authors_by_pk: ?{|
    +id: any,
    +name: string,
    +age: number,
    +todos: $ReadOnlyArray<{|
      +id: any,
      +title: string,
      +author_id: any,
    |}>,
  |},
|};
export type TodoListQuery = {|
  variables: TodoListQuery$variables,
  response: TodoListQuery$data,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "authors",
    "kind": "LinkedField",
    "name": "authors_by_pk",
    "plural": false,
    "selections": [
      (v1/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "age",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "todos",
        "kind": "LinkedField",
        "name": "todos",
        "plural": true,
        "selections": [
          (v1/*: any*/),
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
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TodoListQuery",
    "selections": (v2/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TodoListQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "8e275b7e951c16ce5d4d25e27db83699",
    "id": null,
    "metadata": {},
    "name": "TodoListQuery",
    "operationKind": "query",
    "text": "query TodoListQuery(\n  $id: oid!\n) {\n  authors_by_pk(id: $id) {\n    id\n    name\n    age\n    todos {\n      id\n      title\n      author_id\n    }\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "0801ac8f64cfbb5a35a556fd324d768d";

module.exports = ((node/*: any*/)/*: Query<
  TodoListQuery$variables,
  TodoListQuery$data,
>*/);
