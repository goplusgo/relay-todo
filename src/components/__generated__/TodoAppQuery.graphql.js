/**
 * @generated SignedSource<<d58fdf2d1a3096744fd9c94acd99ad5e>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
type TodoList_authors$fragmentType = any;
export type TodoAppQuery$variables = {|
  id: any,
|};
export type TodoAppQuery$data = {|
  +authors_by_pk: ?{|
    +id: any,
    +name: string,
    +age: number,
    +$fragmentSpreads: TodoList_authors$fragmentType,
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
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "age",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TodoAppQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "authors",
        "kind": "LinkedField",
        "name": "authors_by_pk",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "TodoList_authors"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TodoAppQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "authors",
        "kind": "LinkedField",
        "name": "authors_by_pk",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "todos",
            "kind": "LinkedField",
            "name": "todos",
            "plural": true,
            "selections": [
              (v2/*: any*/),
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
    ]
  },
  "params": {
    "cacheID": "7f0cf55fe071b2614ac67795bc6a451e",
    "id": null,
    "metadata": {},
    "name": "TodoAppQuery",
    "operationKind": "query",
    "text": "query TodoAppQuery(\n  $id: oid!\n) {\n  authors_by_pk(id: $id) {\n    id\n    name\n    age\n    ...TodoList_authors\n  }\n}\n\nfragment TodoList_authors on authors {\n  todos {\n    id\n    title\n    author_id\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "6203c35c06ec45e911c56772a544c34e";

module.exports = ((node/*: any*/)/*: Query<
  TodoAppQuery$variables,
  TodoAppQuery$data,
>*/);
