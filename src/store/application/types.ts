export interface ApplicationState {
  drawerVisibility: boolean;
  relativeUrlAndPageName: RelativeUrlAndPageName;
  currentPage: string;
}

export enum ApplicationTypes {
  SET_DRAWER_VISIBILITY = '@drawer/SET_DRAWER_VISIBILITY',
  SET_CURRENT_PAGE = '@navigation/SET_CURRENT_PAGE',
}

interface SetDrawerVisibility {
  type: typeof ApplicationTypes.SET_DRAWER_VISIBILITY;
  payload: {
    visible: boolean;
  };
}

interface SetCurrentPage {
  type: typeof ApplicationTypes.SET_CURRENT_PAGE;
  payload: {
    currentPage: string;
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
  releaseDate: React.ReactNode | string;
  version: React.ReactNode | string;
  changes: React.ReactNode | string;
  requirements: React.ReactNode;
};

export type UrlPiecesAndPageName = {
  [key: string]: {} | string;
};

export type RelativeUrlAndPageName = {
  [key: string]: string;
};

export type ApplicationActionType = SetDrawerVisibility | SetCurrentPage;
