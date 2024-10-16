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
export interface vaultScreen {
  image: string;
  name: string;
  type: VaultEnum;
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
  BOOKMARKS,
  FAVORITIES,
  ZAKAT_CALCULATION,
  INHERITANCE_CALCULATION,
  PASSWORD_SECURITY,
  VAULT,
  PERSONAL_FINANCIAL_INFO,
  NOTIFICATION_SETTINGS,
  LANGUAGE,
  FREQUENTLY_ASKED_QUESTION,
  HELP_SUPPORT,
  TERMS_CONDITION,
  PRIVACY_POLICY,
  ABOUT_MUTTAQI,
  LOG_OUT,
}
export enum VaultEnum {
  All_ITEMS,
  LOGINS,
  SECURE_NOTES,
  CREDIT_CARDS,
  IDENTITIES,
  PASSWORD,
  DOCUMENTS,
  BANK_ACCOUNTS,
  DRIVER_LICENSES,
  SOCIAL_SECURITY_NUMBER,
  ARCHIVE,
}
