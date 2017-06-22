import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { ApolloProvider } from 'react-apollo';

import client from './Apollo/client';
import ProjectsContainer from './container';
import { projectsReducer } from './container/reducer';

const reducers = combineReducers({
  apollo: client.reducer(),
  projectsDomain: projectsReducer
});

const middleware = compose(
  applyMiddleware(client.middleware()),
  (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
);

const store = createStore(reducers, {}, middleware);

ReactDOM.render(
  <ApolloProvider client={client} store={store}>
    <ProjectsContainer />
  </ApolloProvider>,
  document.getElementById("app")
);