/**
 * @generated SignedSource<<f01861abca8570291f08f678773480db>>
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
    +id: any,
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
    "cacheID": "07459e958c819a4a8e0b2e11eaeb7854",
    "id": null,
    "metadata": {},
    "name": "TodoAppQuery",
    "operationKind": "query",
    "text": "query TodoAppQuery {\n  todo_list {\n    id\n    name\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "c021621a46fcbc771152b7e912743f42";

module.exports = ((node/*: any*/)/*: Query<
  TodoAppQuery$variables,
  TodoAppQuery$data,
>*/);
