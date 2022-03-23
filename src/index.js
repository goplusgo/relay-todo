import React from 'react';
import ReactDOM from 'react-dom';

import RelayEnvironment from './RelayEnvironment';
import TodoApp from './components/TodoApp.react';

import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { RelayEnvironmentProvider, loadQuery } from 'react-relay/hooks';
import * as TodoAppQuery from './components/__generated__/TodoAppQuery.graphql';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

const preloadedQuery = loadQuery(RelayEnvironment, TodoAppQuery.default, {
  id: '1',
});

ReactDOM.render(
  <React.StrictMode>
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={'Loading...'}>
          <TodoApp queryRef={preloadedQuery} />
        </Suspense>
      </ErrorBoundary>
    </RelayEnvironmentProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
