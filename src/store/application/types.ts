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

export type SingleInputGate = {
  key: number;
  inputA: number;
  outputQ: number;
};

export type TwoInputGate = {
  key: number;
  inputA: number;
  inputB: number;
  outputQ: number;
};

export type ASCIICharacter = {
  decimal: string;
  hexadecimal: string;
  binary: string;
  octal: string;
  character: string;
};

export type ApplicationActionType = SetDrawerVisibility;
