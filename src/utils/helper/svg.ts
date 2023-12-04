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
  Slient: 'slient',
  Duas: 'DUAS',
  names: 'NAMES',
  azkar: 'AZKAR',
  tasbih: 'TASBIH',
  planner: 'PLANNER',
  hadith: 'HADITH',
  quran: 'QURAN',
  knowledge: 'KNOWLEDGE',
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
  [Icons.Duas]: {color: COLORS.light_gray},
  [Icons.names]: {color: COLORS.light_gray},
  [Icons.azkar]: {color: COLORS.light_gray},
  [Icons.tasbih]: {color: COLORS.light_gray},
  [Icons.planner]: {color: COLORS.light_gray},
  [Icons.hadith]: {color: COLORS.light_gray},
  [Icons.quran]: {color: COLORS.light_gray},
  [Icons.knowledge]: {color: COLORS.light_gray},
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

SvgIcons[Icons.Duas] =
  require('../../../assets/images/discover-svg/Duas').default;
SvgIcons[Icons.names] =
  require('../../../assets/images/discover-svg/names').default;
SvgIcons[Icons.azkar] =
  require('../../../assets/images/discover-svg/azkar').default;
SvgIcons[Icons.tasbih] =
  require('../../../assets/images/discover-svg/tasbih').default;
SvgIcons[Icons.planner] =
  require('../../../assets/images/discover-svg/planner').default;
SvgIcons[Icons.hadith] =
  require('../../../assets/images/discover-svg/hadith').default;
SvgIcons[Icons.quran] =
  require('../../../assets/images/discover-svg/quran').default;
SvgIcons[Icons.knowledge] =
  require('../../../assets/images/discover-svg/knowledge').default;

export const getSvgIcon = (icon: string, color: string | boolean = false) => {
  const SvgIcon = SvgIcons[icon];
  if (typeof SvgIcon === 'function' && color) {
    return SvgIcon(color);
  }
  return SvgIcon;
};

// export const getSvgIcon = (icon: string, color: string | boolean = false) => {
//   const SvgIcon = SvgIcons[icon];
//   if (typeof SvgIcon === 'function') {
//     return color
//       ? SvgIcon(color)
//       : Colors[icon].subColor
//       ? SvgIcon(Colors[icon].color, Colors[icon].subColor)
//       : SvgIcon(Colors[icon].color);
//   } else {
//     return SvgIcons[icon];
//   }
// };
