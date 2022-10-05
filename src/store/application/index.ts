import { Reducer } from 'redux';

import {
  ApplicationActionType,
  ApplicationState,
  ApplicationTypes,
} from './types';

const INITIAL_STATE: ApplicationState = {
  drawerVisibility: false,
};

const reducerLayout: Reducer<ApplicationState, ApplicationActionType> = (
  state = INITIAL_STATE,
  action: ApplicationActionType
) => {
  switch (action.type) {
    case ApplicationTypes.SET_DRAWER_VISIBILITY:
      return {
        ...state,
        drawerVisibility: action.payload.visible,
      };

    default:
      return state;
  }
};

export default reducerLayout;
