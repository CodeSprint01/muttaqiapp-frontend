import React from 'react';
import {AppIconSvg, Icons} from '../app-icon-svg';
import {COLORS} from '../../../styles/color';
import {screen} from '../../../types/keyVlaue';

interface botmtabbarProps {
  name: string;
  focused: boolean;
}
const BottomTabbarTabs = ({name, focused}: botmtabbarProps) => {
  let svgImage;

  switch (name) {
    case screen.HOME_STACK:
      svgImage = (
        <AppIconSvg
          icon={Icons.HomeTabIcon}
          width={24}
          height={24}
          color={focused ? COLORS.primary : COLORS.light_gray}
        />
      );
      break;
    case screen.QIBLA_STACK:
      svgImage = (
        <AppIconSvg
          icon={Icons.QiblaTabIcon}
          width={24}
          height={24}
          color={focused ? COLORS.primary : COLORS.light_gray}
        />
      );
      break;
    case screen.TRACKER_STACK:
      svgImage = (
        <AppIconSvg
          icon={Icons.TrackerTabIcon}
          width={24}
          height={24}
          color={focused ? COLORS.primary : COLORS.light_gray}
        />
      );
      break;
    case screen.SETTING_STACK:
      svgImage = (
        <AppIconSvg
          icon={Icons.SettingTabIcon}
          width={24}
          height={24}
          color={focused ? COLORS.primary : COLORS.light_gray}
        />
      );
      break;
    default:
      svgImage = null;
  }

  return svgImage;
};

export default BottomTabbarTabs;
