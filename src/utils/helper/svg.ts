import {COLORS} from '../../styles/color';

export const Icons = {
  HomeTabIcon: 'HOME_TAB_ICON',
  QiblaTabIcon: 'QIBLA_TAB_ICON',
  TrackerTabIcon: 'TRACKER_TAB_ICON',
  SettingTabIcon: 'SETTING_TAB_ICON',
  LocationPin: 'LOCATION_PIN',
  ThemeChange: 'THEME_CHANGE',
  GrayCompass: 'GRAY_COMPASS',
  BlueCompass: 'BLUE_COMPASS',
  BlackCompass: 'BLACK_COMPASS',
  GoldeCompass: 'GOLDE_COMPASS',
  GrayBlueCompPin: 'GRAYBLUE_COMP_PIN',
  BlackCompPin: 'BLACK_COMP_PIN',
  GoldeCompPin: 'GOLDE_COMP_PIN',
  Slient: 'SLIENT',
  Notification: 'NOTIFICATION',
  Adhan: 'ADHAN',
  Duas: 'DUAS',
  Names: 'NAMES',
  Azkar: 'AZKAR',
  Tasbih: 'TASBIH',
  Planner: 'PLANNER',
  Hadith: 'HADITH',
  Quran: 'QURAN',
  Knowledge: 'KNOWLEDGE',
  Setting: 'SETTING',
  Profile: 'PROFILE',
  Vault: 'VAULT',
  Languages: 'LANGUAGES',
  Faq: 'FAQ',
  Feedback: 'FEEDBACK',
  Support: 'SUPPORT',
  TermsConditions: 'TERMS_CONDITIONS',
  PrivacyPolicy: 'PRIVACY_POLICY',
  AboutMuttaqi: 'ABOUT_MUTTAQI',
  PlusIcon: 'PLUS_ICON',
  UserHeart: 'USER_HEART',
  OpenDetails: 'OPEN_DETAILS',
  CheckBoxTickIcon: 'CHECK_BOX_TICK_ICON',
  QuranExplore: 'QURAN_EXPLORE',
  Azkaar: 'AZKAAR',

  EmptyCircle: 'EMPTY_CIRCLE',
  TickCircle: 'TICK_CIRCLE',
  Alarm: 'ALARM',
  AlarmSlash: 'ALARM_SLASH',
  AlarmCross: 'ALARM_CROSS',
};

export const Colors = {
  [Icons.HomeTabIcon]: {color: COLORS.light_gray},
  [Icons.QiblaTabIcon]: {color: COLORS.light_gray},
  [Icons.TrackerTabIcon]: {color: COLORS.light_gray},
  [Icons.SettingTabIcon]: {color: COLORS.light_gray},
  [Icons.LocationPin]: {color: COLORS.light_gray},
  [Icons.ThemeChange]: {color: COLORS.light_gray},
  [Icons.GrayCompass]: {color: COLORS.light_gray},
  [Icons.BlueCompass]: {color: COLORS.light_gray},
  [Icons.BlackCompass]: {color: COLORS.light_gray},
  [Icons.GoldeCompass]: {color: COLORS.light_gray},
  [Icons.GrayBlueCompPin]: {color: COLORS.light_gray},
  [Icons.BlackCompPin]: {color: COLORS.light_gray},
  [Icons.GoldeCompPin]: {color: COLORS.light_gray},
  [Icons.Slient]: {color: COLORS.light_gray},
  [Icons.Notification]: {color: COLORS.light_gray},
  [Icons.Adhan]: {color: COLORS.light_gray},
  [Icons.Duas]: {color: COLORS.light_gray},
  [Icons.Names]: {color: COLORS.light_gray},
  [Icons.Azkar]: {color: COLORS.light_gray},
  [Icons.Tasbih]: {color: COLORS.light_gray},
  [Icons.Planner]: {color: COLORS.light_gray},
  [Icons.Hadith]: {color: COLORS.light_gray},
  [Icons.Quran]: {color: COLORS.light_gray},
  [Icons.Knowledge]: {color: COLORS.light_gray},
  [Icons.Profile]: {color: COLORS.light_gray},
  [Icons.Vault]: {color: COLORS.light_gray},
  [Icons.Languages]: {color: COLORS.light_gray},
  [Icons.Faq]: {color: COLORS.light_gray},
  [Icons.Feedback]: {color: COLORS.light_gray},
  [Icons.Support]: {color: COLORS.light_gray},
  [Icons.TermsConditions]: {color: COLORS.light_gray},
  [Icons.PrivacyPolicy]: {color: COLORS.light_gray},
  [Icons.AboutMuttaqi]: {color: COLORS.light_gray},
  [Icons.Setting]: {color: COLORS.light_gray},
  [Icons.PlusIcon]: {color: COLORS.light_gray},
  [Icons.UserHeart]: {color: COLORS.light_gray},
  [Icons.OpenDetails]: {color: COLORS.light_gray},
  [Icons.CheckBoxTickIcon]: {color: COLORS.light_gray},
  [Icons.QuranExplore]: {color: COLORS.light_gray},
  [Icons.Azkaar]: {color: COLORS.light_gray},

  [Icons.EmptyCircle]: {color: COLORS.light_gray},
  [Icons.TickCircle]: {color: COLORS.light_gray},
  [Icons.Alarm]: {color: COLORS.light_gray},
  [Icons.AlarmSlash]: {color: COLORS.light_gray},
  [Icons.AlarmCross]: {color: COLORS.light_gray},
};

const SvgIcons = {};

SvgIcons[Icons.HomeTabIcon] = require('../../../assets/images/home').default;
SvgIcons[Icons.QiblaTabIcon] = require('../../../assets/images/qibla').default;
SvgIcons[Icons.TrackerTabIcon] =
  require('../../../assets/images/tracker').default;
SvgIcons[Icons.SettingTabIcon] =
  require('../../../assets/images/setting').default;
SvgIcons[Icons.LocationPin] =
  require('../../../assets/images/locationPin').default;
SvgIcons[Icons.ThemeChange] =
  require('../../../assets/images/ThemeChange').default;
SvgIcons[Icons.GrayCompass] =
  require('../../../assets/images/compass-template/grayCompass').default;
SvgIcons[Icons.BlueCompass] =
  require('../../../assets/images/compass-template/blueCompass').default;
SvgIcons[Icons.GoldeCompass] =
  require('../../../assets/images/compass-template/goldeCompass').default;
SvgIcons[Icons.BlackCompass] =
  require('../../../assets/images/compass-template/blackCompass').default;
SvgIcons[Icons.GrayBlueCompPin] =
  require('../../../assets/images/compass-template/grayBlueCompPin').default;
SvgIcons[Icons.GoldeCompPin] =
  require('../../../assets/images/compass-template/goldeCompPin').default;
SvgIcons[Icons.BlackCompPin] =
  require('../../../assets/images/compass-template/blackCompPin').default;
SvgIcons[Icons.Slient] = require('../../../assets/images/slient').default;
SvgIcons[Icons.Notification] =
  require('../../../assets/images/notification').default;
SvgIcons[Icons.Adhan] = require('../../../assets/images/adhan').default;
SvgIcons[Icons.Duas] =
  require('../../../assets/images/discover-svg/Duas').default;
SvgIcons[Icons.Names] =
  require('../../../assets/images/discover-svg/names').default;
SvgIcons[Icons.Azkar] =
  require('../../../assets/images/discover-svg/azkar').default;
SvgIcons[Icons.Tasbih] =
  require('../../../assets/images/discover-svg/tasbih').default;
SvgIcons[Icons.Planner] =
  require('../../../assets/images/discover-svg/planner').default;
SvgIcons[Icons.Hadith] =
  require('../../../assets/images/discover-svg/hadith').default;
SvgIcons[Icons.Quran] =
  require('../../../assets/images/discover-svg/quran').default;
SvgIcons[Icons.Knowledge] =
  require('../../../assets/images/discover-svg/knowledge').default;
SvgIcons[Icons.Profile] =
  require('../../../assets/images/setting-screen-svg/myProfile').default;
SvgIcons[Icons.Vault] =
  require('../../../assets/images/setting-screen-svg/vault').default;
SvgIcons[Icons.Languages] =
  require('../../../assets/images/setting-screen-svg/languages').default;
SvgIcons[Icons.Faq] =
  require('../../../assets/images/setting-screen-svg/faq').default;
SvgIcons[Icons.Feedback] =
  require('../../../assets/images/setting-screen-svg/feedback').default;
SvgIcons[Icons.Support] =
  require('../../../assets/images/setting-screen-svg/support').default;
SvgIcons[Icons.TermsConditions] =
  require('../../../assets/images/setting-screen-svg/termsCond').default;
SvgIcons[Icons.PrivacyPolicy] =
  require('../../../assets/images/setting-screen-svg/privacy').default;
SvgIcons[Icons.AboutMuttaqi] =
  require('../../../assets/images/setting-screen-svg/about').default;
SvgIcons[Icons.Setting] =
  require('../../../assets/images/setting-screen-svg/setting').default;
SvgIcons[Icons.PlusIcon] = require('../../../assets/images/plusIcon').default;
SvgIcons[Icons.UserHeart] = require('../../../assets/images/userHeart').default;
SvgIcons[Icons.CheckBoxTickIcon] =
  require('../../../assets/images/checkBoxTickIcon').default;
SvgIcons[Icons.OpenDetails] =
  require('../../../assets/images/openDetails').default;

SvgIcons[Icons.QuranExplore] =
  require('../../../assets/images/explore-images/quran').default;
SvgIcons[Icons.Azkaar] =
  require('../../../assets/images/explore-images/azkaar').default;

SvgIcons[Icons.EmptyCircle] =
  require('../../../assets/images/prayer-time/emptyCircle').default;
SvgIcons[Icons.TickCircle] =
  require('../../../assets/images/prayer-time/tickCircle').default;
SvgIcons[Icons.Alarm] =
  require('../../../assets/images/prayer-time/alarm').default;
SvgIcons[Icons.AlarmSlash] =
  require('../../../assets/images/prayer-time/alarmSlash').default;
SvgIcons[Icons.AlarmCross] =
  require('../../../assets/images/prayer-time/alarmCross').default;

export const getSvgIcon = (icon: string, color: string | boolean = false) => {
  const SvgIcon = SvgIcons[icon];
  if (typeof SvgIcon === 'function' && color) {
    return SvgIcon(color);
  }
  return SvgIcon;
};
