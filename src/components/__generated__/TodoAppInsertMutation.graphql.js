/**
 * @generated SignedSource<<8081267b89d3364bed3b24832f126954>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Mutation } from 'relay-runtime';
export type TodoAppInsertMutation$variables = {|
  title: string,
  author_id: any,
|};
export type TodoAppInsertMutation$data = {|
  +insert_todos_one: ?{|
    +id: any,
    +title: string,
    +author_id: any,
  |},
|};
export type TodoAppInsertMutation = {|
  variables: TodoAppInsertMutation$variables,
  response: TodoAppInsertMutation$data,
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
    "name": "TodoAppInsertMutation",
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
    "name": "TodoAppInsertMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "e9e71340595cb3bf72cd1b2291cac1b6",
    "id": null,
    "metadata": {},
    "name": "TodoAppInsertMutation",
    "operationKind": "mutation",
    "text": "mutation TodoAppInsertMutation(\n  $title: String!\n  $author_id: oid!\n) {\n  insert_todos_one(object: {author_id: $author_id, title: $title}) {\n    id\n    title\n    author_id\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "65e4ea13f3fd451ef787da9a77a6ba48";

module.exports = ((node/*: any*/)/*: Mutation<
  TodoAppInsertMutation$variables,
  TodoAppInsertMutation$data,
>*/);
