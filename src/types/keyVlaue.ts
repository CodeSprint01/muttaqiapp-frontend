export enum screen {
  USER_PROFILE = 'user-profile',
  TAB_NAVIGATOR = 'tab-navigator',
  HOME_SCREEN = 'home-screen',
  QIBLA_SCREEN = 'qibla-screen',
  TRACKER_SCREEN = 'tracker-screen',
  SETTING_SCREEN = 'setting-screen',

  HOME_STACK = 'home-stack',
  QIBLA_STACK = 'qibla-stack',
  TRACKER_STACK = 'tracker-stack',
  SETTING_STACK = 'setting-stack',

  CHANGE_PASSWORD = 'change-password',
}

export interface keyValue {
  label: string;
  value: string;
}
export interface discover {
  image: string;
  name: string;
  type: DiscoverEnum;
}
export enum DiscoverEnum {
  DUAS,
  ALLAH_NAME,
  AZKAR,
  TASBIH,
  PLANNER,
  HADITH,
  QURAN,
  KNOWLEDGE,
}

export interface settingScreen {
  image: string;
  name: string;
  type: settingEnum;
}

export enum settingEnum {
  PROFILE,
  VAULT,
  NOTIFICATIONS,
  LANGUAGES,
  FAQ,
  FEEDBACK,
  SUPPORT,
  TERMS_CONDITION,
  PRIVACY,
  ABOUT,
}
