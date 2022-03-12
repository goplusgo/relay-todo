/**
 * @generated SignedSource<<4f3bd6b2e32e32f788909ad2b4bc4e49>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
export type TodoAppQuery$variables = {||};
export type TodoAppQuery$data = {|
  +todo_list: $ReadOnlyArray<{|
    +name: string,
  |}>,
|};
export type TodoAppQuery = {|
  variables: TodoAppQuery$variables,
  response: TodoAppQuery$data,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "todo_list",
    "kind": "LinkedField",
    "name": "todo_list",
    "plural": true,
    "selections": [
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
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "TodoAppQuery",
    "selections": (v0/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "TodoAppQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "678bf6badc30b2b75a4a9e88bfdaaa4a",
    "id": null,
    "metadata": {},
    "name": "TodoAppQuery",
    "operationKind": "query",
    "text": "query TodoAppQuery {\n  todo_list {\n    name\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "cce3128c8b171706fb538dc06ed92fc3";

module.exports = ((node/*: any*/)/*: Query<
  TodoAppQuery$variables,
  TodoAppQuery$data,
>*/);
