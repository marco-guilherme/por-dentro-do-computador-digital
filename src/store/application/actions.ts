import { action } from 'typesafe-actions';

import { ApplicationTypes } from './types';

export const setDrawerVisibility = (visible: boolean) =>
  action(ApplicationTypes.SET_DRAWER_VISIBILITY, { visible });
