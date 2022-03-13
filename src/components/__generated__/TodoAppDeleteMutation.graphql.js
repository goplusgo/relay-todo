/**
 * @generated SignedSource<<86a2b7f27436c9a4569f9fe00fdae6ad>>
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
  +delete_todo_list_by_pk: ?{|
    +id: any,
    +name: string,
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
    "concreteType": "todo_list",
    "kind": "LinkedField",
    "name": "delete_todo_list_by_pk",
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
        "name": "name",
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
    "cacheID": "b27a8ce47e5035bdf98fd0893c7510f4",
    "id": null,
    "metadata": {},
    "name": "TodoAppDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation TodoAppDeleteMutation(\n  $id: oid!\n) {\n  delete_todo_list_by_pk(id: $id) {\n    id\n    name\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "77400006b8433d4582be68852fd48777";

module.exports = ((node/*: any*/)/*: Mutation<
  TodoAppDeleteMutation$variables,
  TodoAppDeleteMutation$data,
>*/);
