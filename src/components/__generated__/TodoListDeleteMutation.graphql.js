/**
 * @generated SignedSource<<24a6006313e7d921a9403ab9a750c451>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Mutation } from 'relay-runtime';
export type TodoListDeleteMutation$variables = {|
  id: any,
|};
export type TodoListDeleteMutation$data = {|
  +delete_todos_by_pk: ?{|
    +id: any,
    +title: string,
    +author_id: any,
  |},
|};
export type TodoListDeleteMutation = {|
  variables: TodoListDeleteMutation$variables,
  response: TodoListDeleteMutation$data,
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
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "todos",
    "kind": "LinkedField",
    "name": "delete_todos_by_pk",
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TodoListDeleteMutation",
    "selections": (v1/*: any*/),
    "type": "mutation_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TodoListDeleteMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "d2ad0bcf1d65752c43d0670ea9f2e97f",
    "id": null,
    "metadata": {},
    "name": "TodoListDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation TodoListDeleteMutation(\n  $id: uuid!\n) {\n  delete_todos_by_pk(id: $id) {\n    id\n    title\n    author_id\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "05a415ece4b8630ed11ba80daa8fbf6c";

module.exports = ((node/*: any*/)/*: Mutation<
  TodoListDeleteMutation$variables,
  TodoListDeleteMutation$data,
>*/);
