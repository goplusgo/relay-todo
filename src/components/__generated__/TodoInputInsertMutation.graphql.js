/**
 * @generated SignedSource<<275d564a324a3cccbd30e8e5f38f228c>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Mutation } from 'relay-runtime';
export type TodoInputInsertMutation$variables = {|
  title: string,
  author_id: any,
|};
export type TodoInputInsertMutation$data = {|
  +insert_todos_one: ?{|
    +id: any,
    +title: string,
    +author_id: any,
  |},
|};
export type TodoInputInsertMutation = {|
  variables: TodoInputInsertMutation$variables,
  response: TodoInputInsertMutation$data,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "author_id"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "title"
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "author_id",
            "variableName": "author_id"
          },
          {
            "kind": "Variable",
            "name": "title",
            "variableName": "title"
          }
        ],
        "kind": "ObjectValue",
        "name": "object"
      }
    ],
    "concreteType": "todos",
    "kind": "LinkedField",
    "name": "insert_todos_one",
    "plural": false,
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
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "TodoInputInsertMutation",
    "selections": (v2/*: any*/),
    "type": "mutation_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "TodoInputInsertMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "55520f444a76d9cf33293cf2e4f83fe6",
    "id": null,
    "metadata": {},
    "name": "TodoInputInsertMutation",
    "operationKind": "mutation",
    "text": "mutation TodoInputInsertMutation(\n  $title: String!\n  $author_id: oid!\n) {\n  insert_todos_one(object: {author_id: $author_id, title: $title}) {\n    id\n    title\n    author_id\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "2287e91751e09ce7453df8d7349937f0";

module.exports = ((node/*: any*/)/*: Mutation<
  TodoInputInsertMutation$variables,
  TodoInputInsertMutation$data,
>*/);
