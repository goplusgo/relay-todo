import React from 'react';
import TodoInput from './TodoInput.react';
import TodoList from './TodoList.react';
import type { PreloadedQuery } from 'react-relay/relay-hooks/EntryPointTypes.flow';
import type { TodoListQuery as TodoListQueryType } from './__generated__/TodoListQuery.graphql';
import graphql from 'babel-plugin-relay/macro';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import * as TodoListQuery from './__generated__/TodoListQuery.graphql';

import RelayEnvironment from '../RelayEnvironment';
import {
  RelayEnvironmentProvider,
  loadQuery,
  useMutation,
  usePreloadedQuery,
} from 'react-relay/hooks';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

const preloadedQuery = loadQuery(RelayEnvironment, TodoListQuery.default, {
  id: '1',
});

export default function TodoApp(props: Props): React$MixedElement {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={'Loading...'}>
          <TodoInput />
          <TodoList queryRef={preloadedQuery} />
        </Suspense>
      </ErrorBoundary>
    </RelayEnvironmentProvider>
  );
}
