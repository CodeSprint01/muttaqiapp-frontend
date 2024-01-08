export interface keyValue {
  label: string;
  value: string;
}
export interface discover {
  image: string;
  name: string;
  type: DiscoverEnum;
}

export interface settingScreen {
  image: string;
  name: string;
  type: settingEnum;
}

export interface fivePrayer {
  id: number;
  backgroundImg: any;
  label: string;
  prayerName: string;
  time: string;
  icon: any;
  heartValue: number;
}

// enum
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



