export interface AppState {
  loading?: boolean;
  userLocation?: location[];
}

export interface Types {
  type: string;
  payload: any;
}
// export interface Action<T, P> {
//   type: T;
//   payload: P;
// }
export interface exploreInterface {
  image: any;
  firstTxt: string;
  secondTxt: string;
  index?: number;
  routeName: any;
}
export interface allahNamesProps {
  id: number;
  arabic: string;
  english: string;
  meaning: string;
  allahNamesDescription: {};
}
export interface allahNamesDescription {
  meaningDescription: string;
  occurrence: string;
  evidance: string;
}

export interface location {
  latitude: number;
  longitude: number;
}

// screens names
export enum screens {
  TAB_HOME = 'tab-home',
  TAB_QIBLA = 'tab-qibla',
  TAB_TO_DO = 'tab-to-do',
  TAB_TRACKER = 'tab-tracker',
  TAB_SETTING = 'tab-setting',
  KNOWLEDGE = 'knowledge',
  HADITH = 'hadith',
  ALLAH_NAMES_DESCRIPTION = 'allah-names-description',
  ALLAH_NAMES = 'allah-names',
}
