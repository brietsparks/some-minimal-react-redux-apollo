import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import ProjectsContainer from './container';
import { projectsReducer } from './container/reducer';

const store = createStore(projectsReducer, applyMiddleware(...[]))

ReactDOM.render(
  <Provider store={store}>
    <ProjectsContainer />
  </Provider>,
  document.getElementById("app")
)