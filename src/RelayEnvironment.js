// @flow

import {
  Environment,
  Network,
  RecordSource,
  Store,
  type RequestParameters,
  type Variables,
  type GraphQLResponse,
} from "relay-runtime";

const endpoint = "https://ideal-vervet-75.hasura.app/v1/graphql";
const REACT_APP_HASURA_ADMIN_SECRET =
  process.env.REACT_APP_HASURA_ADMIN_SECRET ?? "";

async function fetchQuery(
  params: RequestParameters,
  variables: Variables
): Promise<GraphQLResponse> {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-hasura-admin-secret": `${REACT_APP_HASURA_ADMIN_SECRET}`,
    },
    body: JSON.stringify({
      query: params.text,
      variables,
    }),
  });

  return response.json();
}

export default (new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
}): Environment);
