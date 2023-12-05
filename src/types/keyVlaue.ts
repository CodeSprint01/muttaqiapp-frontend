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
