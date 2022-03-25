import React from 'react';
import ReactDOM from 'react-dom';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { RelayEnvironmentProvider } from 'react-relay/hooks';
import RelayEnvironment from './RelayEnvironment';

import TodoApp from './components/TodoApp.react';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={'Loading...'}>
          <TodoApp />
        </Suspense>
      </ErrorBoundary>
    </RelayEnvironmentProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
