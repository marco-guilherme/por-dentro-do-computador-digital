import { Store, createStore } from 'redux';

import rootReducer, { RootApplicationState } from './rootReducer';

export const store: Store<RootApplicationState> = createStore(rootReducer);
