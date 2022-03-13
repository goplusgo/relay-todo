/**
 * @generated SignedSource<<d4bf54d699c758562987f4e5e40effb5>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Mutation } from 'relay-runtime';
export type TodoAppInsertMutation$variables = {|
  name: string,
|};
export type TodoAppInsertMutation$data = {|
  +insert_todo_list_one: ?{|
    +id: any,
    +name: string,
  |},
|};
export type TodoAppInsertMutation = {|
  variables: TodoAppInsertMutation$variables,
  response: TodoAppInsertMutation$data,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "name"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "name",
            "variableName": "name"
          }
        ],
        "kind": "ObjectValue",
        "name": "object"
      }
    ],
    "concreteType": "todo_list",
    "kind": "LinkedField",
    "name": "insert_todo_list_one",
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
    "name": "TodoAppInsertMutation",
    "selections": (v1/*: any*/),
    "type": "mutation_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TodoAppInsertMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "7c9d48970f97a92dfc8b50443c7429b6",
    "id": null,
    "metadata": {},
    "name": "TodoAppInsertMutation",
    "operationKind": "mutation",
    "text": "mutation TodoAppInsertMutation(\n  $name: String!\n) {\n  insert_todo_list_one(object: {name: $name}) {\n    id\n    name\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "492730895236af0389a3edde57cbee77";

module.exports = ((node/*: any*/)/*: Mutation<
  TodoAppInsertMutation$variables,
  TodoAppInsertMutation$data,
>*/);
