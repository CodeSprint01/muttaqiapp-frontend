import {COLORS} from '../../styles/color';

export const Icons = {
  HomeTabIcon: 'HOME_TAB_ICON',
  QiblaTabIcon: 'QIBLA_TAB_ICON',
  TrackerTabIcon: 'TRACKER_TAB_ICON',
  SettingTabIcon: 'SETTING_TAB_ICON',
  CompassPin: 'COMPASS_PIN',
  CompassGray: 'COMPASS_GRAY',
};

export const Colors = {
  [Icons.HomeTabIcon]: {color: COLORS.light_gray},
  [Icons.QiblaTabIcon]: {color: COLORS.light_gray},
  [Icons.TrackerTabIcon]: {color: COLORS.light_gray},
  [Icons.SettingTabIcon]: {color: COLORS.light_gray},
  [Icons.CompassPin]: {color: COLORS.light_gray},
  [Icons.CompassGray]: {color: COLORS.light_gray},
};

const SvgIcons = {};

SvgIcons[Icons.HomeTabIcon] = require('../../../assets/images/home').default;
SvgIcons[Icons.QiblaTabIcon] = require('../../../assets/images/qibla').default;
SvgIcons[Icons.TrackerTabIcon] =
  require('../../../assets/images/tracker').default;
SvgIcons[Icons.SettingTabIcon] =
  require('../../../assets/images/setting').default;
SvgIcons[Icons.CompassPin] =
  require('../../../assets/images/compassPin').default;
SvgIcons[Icons.CompassGray] =
  require('../../../assets/images/CompassGray').default;

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
