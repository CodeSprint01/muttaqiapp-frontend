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
export interface AppState {
  error: string | undefined;
  loading?: boolean;
  userLocation?: location[];
  userInfo: UserInfo[];
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
  id?: number;
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
