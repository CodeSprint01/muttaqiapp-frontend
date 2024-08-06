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
  FORGOT_PASSWORD = 'forgot-password',
  OTP_SCREEN = 'otp-screen',
  NEW_PASSWORD = 'new-password',
  TAB_NAVIGATOR = 'tab-navigator',
  MAIN_SETTING = 'main-setting',

  ALL_BOOKMARKS = 'all-bookmarks',
  ALL_BOOKMARK = 'all-bookmark',
  QURAN_BOOKMARK = 'quran-bookmark',
  AZKAR_BOOKMARK = 'azkar-bookmark',
  DUA_BOOKMARK = 'dua-bookmark',
  HADITH_BOOKMARK = 'hadith-bookmark',
  TRACKER_SCREEN = 'tracker-Screen',
  ALL_DETAILS_STATS = 'all-details-stats',

  ALL_FAVOURITES = 'all-favourites',
  ALL_FAVOURITE = 'all-favourite',
  QURAN_FAVOURITE = 'quran-favourite',
  AZKAR_FAVOURITE = 'azkar-favourite',
  DUA_FAVOURITE = 'dua-favourite',
  HADITH_FAVOURITE = 'hadith-favourite',
  WEEKLY_STATS = 'weekly-stats',
  MONTHLY_STATS = 'monthly-stats',
  YEARLY_STATS = 'yearly-stats',

  USER_INFO_STACK = 'user-info-stack',
  GENERAL_INFORMATION = 'general-information',
  FAMILY_INFORMATION_FIRST_FORM = 'family-information-first-form',
  ALL_TODO_STATS_SCREENS = 'all-todo-stats-screens',
  WEEKLY_TODO_STAT = 'weekly-todo-stat',
  MONTHLY_TODO_STAT = 'monthly-todo-stat',
  YEARLY_TODO_STAT = 'yearly-todo-stat',
  HOME_STACK = 'home-stack',

  PROFILE_STACK = 'profile-stack',
  USER_PROFILE_SETTING = 'user-profile-setting',
  BOOKMARKS_SETTING = 'bookmarks-setting',
  FAVORITIES_SETTING = 'favorities-setting',
  ZAKAT_CALCULATION_SETTING = 'zakat-calculation-setting',
  INHERITANCE_CALCULATION_SETTING = 'inheritance-calculation-setting',
  PASSWORD_SECURITY_SETTING = 'password-security-setting',
  VAULT_SETTING = 'vault-setting',
  VAULT_STACK = 'vault-stack',
  PERSONAL_FINANCIAL_INFO_SETTING = 'personal-financial-info-setting',
  NOTIFICATION_SETTINGS = 'notification-setting',
  LANGUAGE_SETTING = 'language-setting',
  FREQUENTLY_ASKED_QUESTION_SETTING = 'frequently-asked-question-setting',
  HELP_SUPPORT_SETTING = 'help-support-setting',
  TERMS_CONDITION_SETTING = 'terms-condition-setting',
  PRIVACY_POLICY_SETTING = 'privacy-policy-setting',
  ABOUT_MUTTAQI_SETTING = 'about-muttaqi-app',
  LOG_OUT_SETTING = 'logout-setting',

  All_ITEMS_SETTING = 'all-items-setting',
  VAULT_LOGINS_SETTING = 'vault-logins-setting',
  SECURE_NOTES_SETTING = 'secure-notes-setting',
  CREDIT_CARDS_SETTING = 'credit-cards-setting',
  IDENTITIES_SETTING = 'identities-setting',
  PASSWORD_SETTING = 'password-setting',
  DOCUMENTS_SETTING = 'documents-setting',
  BANK_ACCOUNTS_SETTING = 'bank-account-setting',
  DRIVER_LICENES_SETTING = 'driver-license-setting',
  SOCAIL_SECURITY_NUMBERS_SETTING = 'social-security-numbers-setting',
  ARCHIVE_SETTING = 'archive-setting',
  LOGINS_CREDENTIALS = 'login-credentials',
  VAULT_SECURE_NOTES_SETTING = 'vault-secure-notes-setting',
  VAULT_SECURE_NOTES_READ = 'vault-secure-notes-read',
  VAULT_SECURE_NOTES_UPDATE = 'vault-secure-notes-update',
  VAULT_CREDIT_CARD_ADD = 'vault-credit-card-add',
  VAULT_CREDIT_CARD_CREATE_UPDATE = 'vault-credit-card-create-update',
  VAULT_IDENTITIES_SETTING = 'vault-identities-setting',
  VAULT_IDENTITIES_CREATE_UPDATE = 'vault-identities-create-update',
  VAULT_PASSWORD_ADD = 'vault-password-add',
  VAULT_PASSWORD_CREATE_UPDATE = 'vault-password-create-update',
  VAULT_DOCUMENT_ADD_DELETE = 'vault-document-add-delete',
  VAULT_DOCUMENT_READ = 'vault-document-read',
  VAULT_BANK_ACCOUNT_ADD = 'vault-bank-account-add',
  VAULT_BANK_ACCOUNT_CREATE_UPDATE = 'vault-bank-account-create-update',
  VAULT_SOCIAL_SECURITY_ADD = 'vault-social-security-add',
  VAULT_SOCIAL_SECURITY_CREATE_UPDATE = 'vault-social-security-create-update',
  VAULT_DRIVER_LICENSE_ADD = 'vault-driver-license-add',
  VAULT_DRIVER_LICENSE_CREATE_UPDATE = 'vault-driver-license-create-update',
  PASSWORD_SECURITY_STACK = 'password-security-stack',
  ALL_PASSWORDS_SETTING = 'all-passwords-setting',
  CHANGE_PASSWORD = 'change-password',
  CREATE_NEW_VAULT = 'create-new-vault',
  VAULT_CREATE_DETAILS = 'vault-create-details',
  FORGOT_VAULT_PASSWORD = 'forgot-vault-password',
  VAULT_OTP_VERIFY = 'vault-otp-verify',
}

export type RootStackParamList = {
  [screens.TAB_HOME]: undefined;
  [screens.TAB_QIBLA]: undefined;
  [screens.TAB_TO_DO]: undefined;
  [screens.TAB_TRACKER]: undefined;
  [screens.TAB_SETTING]: undefined;
  [screens.KNOWLEDGE]: undefined;
  [screens.HADITH]: undefined;
  [screens.ALLAH_NAMES_DESCRIPTION]: undefined;
  [screens.ALLAH_NAMES]: undefined;
  [screens.QURAN_SCREEN]: undefined;
  [screens.DETAIL_SCREENN]: undefined;
  [screens.CARD_SCREEN]: undefined;
  [screens.SURAH_DETAILS_SCREEN]: undefined;
  [screens.TASBIH_COUNTER]: undefined;
  [screens.AUTH_STACK]: undefined;
  [screens.APP_STACK]: undefined;
  [screens.SIGN_UP]: undefined;
  [screens.SIGN_IN]: undefined;
  [screens.WELCOME_USER]: undefined;
  [screens.FORGOT_PASSWORD]: undefined;
  [screens.OTP_SCREEN]: {email: string};
  [screens.NEW_PASSWORD]: {otp: string};
  [screens.TAB_NAVIGATOR]: undefined;
  [screens.MAIN_SETTING]: undefined;

  [screens.ALL_BOOKMARKS]: undefined;
  [screens.ALL_BOOKMARK]: undefined;
  [screens.QURAN_BOOKMARK]: undefined;
  [screens.AZKAR_BOOKMARK]: undefined;
  [screens.DUA_BOOKMARK]: undefined;
  [screens.HADITH_BOOKMARK]: undefined;
  [screens.TRACKER_SCREEN]: undefined;
  [screens.ALL_DETAILS_STATS]: undefined;

  [screens.ALL_FAVOURITES]: undefined;
  [screens.ALL_FAVOURITE]: undefined;
  [screens.QURAN_FAVOURITE]: undefined;
  [screens.AZKAR_FAVOURITE]: undefined;
  [screens.DUA_FAVOURITE]: undefined;
  [screens.HADITH_FAVOURITE]: undefined;
  [screens.WEEKLY_STATS]: undefined;
  [screens.MONTHLY_STATS]: undefined;
  [screens.YEARLY_STATS]: undefined;

  [screens.USER_INFO_STACK]: undefined;
  [screens.GENERAL_INFORMATION]: undefined;
  [screens.FAMILY_INFORMATION_FIRST_FORM]: undefined;
  [screens.ALL_TODO_STATS_SCREENS]: undefined;
  [screens.WEEKLY_TODO_STAT]: undefined;
  [screens.MONTHLY_TODO_STAT]: undefined;
  [screens.YEARLY_TODO_STAT]: undefined;
  [screens.HOME_STACK]: undefined;

  [screens.PROFILE_STACK]: undefined;
  [screens.USER_PROFILE_SETTING]: undefined;
  [screens.BOOKMARKS_SETTING]: undefined;
  [screens.FAVORITIES_SETTING]: undefined;
  [screens.ZAKAT_CALCULATION_SETTING]: undefined;
  [screens.INHERITANCE_CALCULATION_SETTING]: undefined;
  [screens.PASSWORD_SECURITY_SETTING]: undefined;
  [screens.VAULT_SETTING]: undefined;
  [screens.VAULT_STACK]: undefined;
  [screens.PERSONAL_FINANCIAL_INFO_SETTING]: undefined;
  [screens.NOTIFICATION_SETTINGS]: undefined;
  [screens.LANGUAGE_SETTING]: undefined;
  [screens.FREQUENTLY_ASKED_QUESTION_SETTING]: undefined;
  [screens.HELP_SUPPORT_SETTING]: undefined;
  [screens.TERMS_CONDITION_SETTING]: undefined;
  [screens.PRIVACY_POLICY_SETTING]: undefined;
  [screens.ABOUT_MUTTAQI_SETTING]: undefined;
  [screens.LOG_OUT_SETTING]: undefined;

  [screens.All_ITEMS_SETTING]: undefined;
  [screens.VAULT_LOGINS_SETTING]: {data: string};
  [screens.SECURE_NOTES_SETTING]: undefined;
  [screens.CREDIT_CARDS_SETTING]: undefined;
  [screens.IDENTITIES_SETTING]: undefined;
  [screens.PASSWORD_SETTING]: undefined;
  [screens.DOCUMENTS_SETTING]: undefined;
  [screens.BANK_ACCOUNTS_SETTING]: undefined;
  [screens.DRIVER_LICENES_SETTING]: undefined;
  [screens.SOCAIL_SECURITY_NUMBERS_SETTING]: undefined;
  [screens.ARCHIVE_SETTING]: undefined;
  [screens.LOGINS_CREDENTIALS]: undefined;
  [screens.VAULT_SECURE_NOTES_SETTING]: undefined;
  [screens.VAULT_SECURE_NOTES_READ]: undefined;
  [screens.VAULT_SECURE_NOTES_UPDATE]: undefined;
  [screens.VAULT_CREDIT_CARD_ADD]: undefined;
  [screens.VAULT_CREDIT_CARD_CREATE_UPDATE]: undefined;
  [screens.VAULT_IDENTITIES_SETTING]: undefined;
  [screens.VAULT_IDENTITIES_CREATE_UPDATE]: undefined;
  [screens.VAULT_PASSWORD_ADD]: undefined;
  [screens.VAULT_PASSWORD_CREATE_UPDATE]: undefined;
  [screens.VAULT_DOCUMENT_ADD_DELETE]: undefined;
  [screens.VAULT_DOCUMENT_READ]: undefined;
  [screens.VAULT_BANK_ACCOUNT_ADD]: undefined;
  [screens.VAULT_BANK_ACCOUNT_CREATE_UPDATE]: undefined;
  [screens.VAULT_SOCIAL_SECURITY_ADD]: undefined;
  [screens.VAULT_SOCIAL_SECURITY_CREATE_UPDATE]: undefined;
  [screens.VAULT_DRIVER_LICENSE_ADD]: undefined;
  [screens.VAULT_DRIVER_LICENSE_CREATE_UPDATE]: undefined;
  [screens.PASSWORD_SECURITY_STACK]: undefined;
  [screens.ALL_PASSWORDS_SETTING]: undefined;
  [screens.CHANGE_PASSWORD]: undefined;
  [screens.CREATE_NEW_VAULT]: undefined;
  [screens.VAULT_CREATE_DETAILS]: undefined;
  [screens.FORGOT_VAULT_PASSWORD]: undefined;
  [screens.VAULT_OTP_VERIFY]: undefined;
};

export interface AppState {
  error: string | undefined;
  loading?: boolean;
  userLocation?: location[];
  userInfo: UserInfo;
}

export interface SettingState {
  loginsData: LoginsInfo[];
  secureNotes: NotesInfo[];
  creditCard: CardInfo[];
  identities: IdentityInfo[];
  passwords: PasswordsInfo[];
  documents: DocumentInfo[];
  bankAccount: BankAccount[];
  socialNumbers: SocialNumbers[];
  licenses: DriverLicense[];
  vault: Vault[];
}
export interface PrayerState {
  task: TodoTask[];
  prayerData: UserPrayers[];
}

export interface State {
  userReducer: AppState;
  settingReducer: SettingState;
}

export interface Types {
  type: string;
  payload: any;
}
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

// export interface Surah {
//   number: number;
//   name: string;
//   enName: string;
//   type: string;
//   enTranslation: string;
//   numberOfAyahs: number;
//   numberOfRukoos: number;
//   ayahs: Ayah[];
// }

// export interface Ayah {
//   number: number;
//   numberInSurah: number;
//   text: string;
//   enText: string;
//   manzil: number;
//   ruku: number;
//   sajda: boolean;
// }
// surah intterface
export interface Surah {
  number: number;
  name: string;
  enName: string;
  type: string;
  rukuos: number[];
  sajda: number[] | null;
  enTranslation: string;
  numberOfAyahs: number;
  numberOfRukoos: number;
  ayahs: Ayah[];
  seprater?: Seprater[];
}

export interface Ayah {
  number: number;
  numberInSurah: number;
  text: string;
  enText: string;
  manzil: number;
  ruku: number;
  sajda?: boolean;
}
export interface Seprater {
  name: string;
  rukuSajdaNumber: number;
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
export interface BarChartInter {
  value: number;
  spacing?: number;
  frontColor: string;
  label?: string;
}
export interface UserPrayers {
  id: number;
  name: string;
  prayerTime: Date;
  notification: number;
  isOffered: boolean;
  isOfferedTimePassed: boolean;
}
export interface AlarmUpdate {
  id: number;
  // notification: number;
}
export interface UserInfo {
  userID: string;
  token: string;
  name: string;
  email: string;
  isLoged: boolean;
}
export interface LoginsInfo {
  id?: number;
  title?: string;
  email: string;
  password: string;
}
export interface NotesInfo {
  id?: number;
  title?: string;
  details: string;
}
export interface CardInfo {
  id?: number;
  number?: string;
  name: string;
  expiry: string;
  cvv: string;
  type: string;
}
export interface IdentityInfo {
  id?: number;
  type: string;
  name: string;
  number: string;
  photo: string;
  photoName: string;
}
export interface PasswordsInfo {
  id?: number;
  name: string;
  email: string;
  password: string;
}
export interface DocumentInfo {
  id?: number;
  docName: string;
  docUri: string;
}
export interface BankAccount {
  id: string;
  bankName: string;
  accountNumber: string;
}
export interface SocialNumbers {
  id?: number;
  name: string;
  number: string;
}
export interface DriverLicense {
  id?: number;
  name: string;
  number: string;
}
export interface Vault {
  vaultId: string;
  userId: string;
}
export interface TodoTask {
  id?: number;
  taskName: string;
  repeat?: string;
  isChecked: boolean;
}

export interface ErrorMessage {
  message: string;
}

export interface Child {
  name: '';
  age: 0;
}
export interface Siblings {
  name: '';
  age: 0;
  cnic: '';
  relationship: null;
}
