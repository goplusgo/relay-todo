/**
 * @generated SignedSource<<29acece0a32e9b5f1a9541a693a168c8>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Mutation } from 'relay-runtime';
export type TodoAppDeleteMutation$variables = {|
  id: any,
|};
export type TodoAppDeleteMutation$data = {|
  +delete_todos_by_pk: ?{|
    +id: any,
    +title: string,
    +author_id: any,
  |},
|};
export type TodoAppDeleteMutation = {|
  variables: TodoAppDeleteMutation$variables,
  response: TodoAppDeleteMutation$data,
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
    "name": "TodoAppDeleteMutation",
    "selections": (v1/*: any*/),
    "type": "mutation_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TodoAppDeleteMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "21d3c570b95b9db01fb25f10b217dbf2",
    "id": null,
    "metadata": {},
    "name": "TodoAppDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation TodoAppDeleteMutation(\n  $id: uuid!\n) {\n  delete_todos_by_pk(id: $id) {\n    id\n    title\n    author_id\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "26a3870608a5c43f46cc7fcf43746028";

module.exports = ((node/*: any*/)/*: Mutation<
  TodoAppDeleteMutation$variables,
  TodoAppDeleteMutation$data,
>*/);
