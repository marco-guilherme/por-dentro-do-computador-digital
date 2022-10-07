export interface ApplicationState {
  drawerVisibility: boolean;
}

export enum ApplicationTypes {
  SET_DRAWER_VISIBILITY = '@drawer/SET_DRAWER_VISIBILITY',
}

interface SetDrawerVisibility {
  type: typeof ApplicationTypes.SET_DRAWER_VISIBILITY;
  payload: {
    visible: boolean;
  };
}

export type ApplicationActionType = SetDrawerVisibility;
