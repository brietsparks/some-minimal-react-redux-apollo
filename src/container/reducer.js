import { cloneDeep } from 'lodash';

import * as actions from './actions';

const INITIAL_STATE = {
  modulo: 2,
};

export const projectsReducer = (initialState = INITIAL_STATE, action) => {
  const state = cloneDeep(initialState);

  switch (action.type) {
    case actions.DEFAULT_ACTION:
      console.log('reducer: DEFAULT_ACTION')
  }

  return state;
};
