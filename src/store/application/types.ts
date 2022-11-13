export interface ApplicationState {
  drawerVisibility: boolean;
  relativeUrlAndPageName: RelativeUrlAndPageName;
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
  key: number;
  decimal: string | number;
  hexadecimal: string;
  binary: string;
  octal: string;
  character: string;
};

export type VersionControl = {
  key: number;
  releaseDate: string;
  version: string;
  changes: string;
};

export type UrlPiecesAndPageName = {
  [key: string]: {} | string;
};

export type RelativeUrlAndPageName = {
  [key: string]: string;
};

export type ApplicationActionType = SetDrawerVisibility;
