import { Reducer } from 'redux';

import {
  ApplicationActionType,
  ApplicationState,
  ApplicationTypes,
} from './types';

import { generateWebsiteRoutes } from '../../utils/generateWebsiteRoutes';

const INITIAL_STATE: ApplicationState = {
  drawerVisibility: false,
  relativeUrlAndPageName: generateWebsiteRoutes(),
  currentPage: '/inicio',
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

    case ApplicationTypes.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload.currentPage,
      };

    default:
      return state;
  }
};

export default reducerLayout;
