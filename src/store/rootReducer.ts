import { combineReducers } from 'redux';

import reducerApplication from './application/index';
import { ApplicationState } from './application/types';

export interface RootApplicationState {
  application: ApplicationState;
}

const reducers = combineReducers({
  application: reducerApplication,
});

export default reducers;
