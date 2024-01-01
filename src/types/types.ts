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
}
