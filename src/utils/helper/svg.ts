import {COLORS} from '../../styles/color';

export const Icons = {
  HomeTabIcon: 'HOME_TAB_ICON',
  QiblaTabIcon: 'QIBLA_TAB_ICON',
  TrackerTabIcon: 'TRACKER_TAB_ICON',
  SettingTabIcon: 'setting_TAB_ICON',
};

export const Colors = {
  [Icons.HomeTabIcon]: {color: COLORS.light_gray},
  [Icons.QiblaTabIcon]: {color: COLORS.light_gray},
  [Icons.TrackerTabIcon]: {color: COLORS.light_gray},
  [Icons.SettingTabIcon]: {color: COLORS.light_gray},
};

const SvgIcons = {};

SvgIcons[Icons.HomeTabIcon] = require('../../../assets/images/home').default;
SvgIcons[Icons.QiblaTabIcon] = require('../../../assets/images/qibla').default;
SvgIcons[Icons.TrackerTabIcon] =
  require('../../../assets/images/tracker').default;
SvgIcons[Icons.SettingTabIcon] =
  require('../../../assets/images/setting').default;
export const getSvgIcon = (icon: string, color: string | boolean = false) => {
  const SvgIcon = SvgIcons[icon];
  if (typeof SvgIcon === 'function' && color) {
    return SvgIcon(color);
  }
  return SvgIcon;
};
