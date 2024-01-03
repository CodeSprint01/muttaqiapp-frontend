import React from 'react';
import {AppIconSvg, Icons} from '../app-icon-svg';
import {COLORS} from '../../../styles/color';
import {screens} from '../../../types/types';

interface botmtabbarProps {
  name: string;
  focused: boolean;
}
const BottomTabbarTabs = ({name, focused}: botmtabbarProps) => {
  let svgImage;

  switch (name) {
    case screens.TAB_HOME:
      svgImage = (
        <AppIconSvg
          icon={Icons.HomeTabIcon}
          width={24}
          height={24}
          color={focused ? COLORS.primary : COLORS.light_gray}
        />
      );
      break;
    case screens.TAB_QIBLA:
      svgImage = (
        <AppIconSvg
          icon={Icons.QiblaTabIcon}
          width={24}
          height={24}
          color={focused ? COLORS.primary : COLORS.light_gray}
        />
      );
      break;
    case screens.TAB_TRACKER:
      svgImage = (
        <AppIconSvg
          icon={Icons.TrackerTabIcon}
          width={24}
          height={24}
          color={focused ? COLORS.primary : COLORS.light_gray}
        />
      );
      break;
    case screens.TAB_SETTING:
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
