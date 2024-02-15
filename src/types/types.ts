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
  QURAN_SCREEN = 'quran-screen',
  DETAIL_SCREENN = 'detail-screen',
  CARD_SCREEN = 'card-screen',
  SURAH_DETAILS_SCREEN = 'surah-details-screen',
  TASBIH_COUNTER = 'tasbih-counter',
  AUTH_STACK = 'auth-stack',
  APP_STACK = 'app-stack',
  SIGN_UP = 'sign-up',
  SIGN_IN = 'sign-in',
  WELCOME_USER = 'welcome-user',
  TAB_NAVIGATOR = 'tab-navigator',

  ALL_BOOKMARKS = 'all-bookmarks',
  ALL_BOOKMARK = 'all-bookmark',
  QURAN_BOOKMARK = 'quran-bookmark',
  AZKAR_BOOKMARK = 'azkar-bookmark',
  DUA_BOOKMARK = 'dua-bookmark',
  HADITH_BOOKMARK = 'hadith-bookmark',

  ALL_FAVOURITES = 'all-favourites',
  ALL_FAVOURITE = 'all-favourite',
  QURAN_FAVOURITE = 'quran-favourite',
  AZKAR_FAVOURITE = 'azkar-favourite',
  DUA_FAVOURITE = 'dua-favourite',
  HADITH_FAVOURITE = 'hadith-favourite',
}
import {SuplicationData} from './types';
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
  title: string;
  subTitle: string;
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

export interface SuplicationData {
  id: number;
  name: string;
  purpose: string;
  repeat?: number;
  supplication: string;
  translation: string | null;
  virtue: string;
  references?: string | null;
}

// inter face for 'azkaar', 'duas', 'hadith',
export interface Suplications {
  title: string;
  subTitle: string;
  data: SuplicationData[];
}

export interface Ayat {
  id: number;
  isBookmark: boolean;
  isFavourite: boolean;
  arabic: string;
  translation: string; //english tarjuma
  surahName: string;
  verseNo: number;
  details: string;
  audio: string;
}

export interface InputSignUp {
  key: string;
  inputLabel: string;
  isRequired: boolean;
  placeholder: string;
}

export interface InputSignIn {
  key: string;
  inputLabel: string;
  placeholder: string;
}

export interface Surah {
  number: number;
  name: string;
  enName: string;
  type: string;
  enTranslation: string;
  numberOfAyahs: number;
  numberOfRukoos: number;
  ayahs: Ayah[];
}

export interface Ayah {
  number: number;
  numberInSurah: number;
  text: string;
  enText: string;
  manzil: number;
  ruku: number;
  sajda: boolean;
}

export interface Juz {
  juz: number;
  juzData: JuzData[];
}
export interface JuzData {
  part: number;
  arabic: string;
  surahName: string;
  verse: number;
}
export interface TodoTask {
  dayName: string;
  isDo: boolean;
}
export interface AllBookmarksInter {
  name: string;
  bookmarkData: bookmarkData[];
}
export interface bookmarkData {
  icon: any;
  name: string;
  verse: string | null;
  detailText: string;
}
export interface AllFavouritesInter {
  name: string;
  favouriteData: FavouriteData[];
}
export interface FavouriteData {
  icon: any;
  name: string;
  verse: string | null;
  detailText: string;
}
