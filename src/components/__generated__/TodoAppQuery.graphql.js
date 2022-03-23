/**
 * @generated SignedSource<<a4dae748f3c6770b5b3f144619106153>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
export type TodoAppQuery$variables = {|
  id: any,
|};
export type TodoAppQuery$data = {|
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
export type TodoAppQuery = {|
  variables: TodoAppQuery$variables,
  response: TodoAppQuery$data,
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
    "name": "TodoAppQuery",
    "selections": (v2/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TodoAppQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "d23a99500f304fe9b46b448210d849db",
    "id": null,
    "metadata": {},
    "name": "TodoAppQuery",
    "operationKind": "query",
    "text": "query TodoAppQuery(\n  $id: oid!\n) {\n  authors_by_pk(id: $id) {\n    id\n    name\n    age\n    todos {\n      id\n      title\n      author_id\n    }\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "05ac13ce342e881df9ad434795a726db";

module.exports = ((node/*: any*/)/*: Query<
  TodoAppQuery$variables,
  TodoAppQuery$data,
>*/);
