import React from 'react';
import {AppIconSvg, Icons} from '../app-icon-svg';
import {COLORS} from '../../../styles/color';

interface botmtabbarProps {
  name: string;
  focused: boolean;
}
const BottomTabbarTabs = ({name, focused}: botmtabbarProps) => {
  let svgImage;

  switch (name) {
    case 'Home':
      svgImage = (
        <AppIconSvg
          icon={Icons.HomeTabIcon}
          width={24}
          height={24}
          color={focused ? COLORS.primary : COLORS.light_gray}
        />
      );
      break;
    case 'Qibla':
      svgImage = (
        <AppIconSvg
          icon={Icons.QiblaTabIcon}
          width={24}
          height={24}
          color={focused ? COLORS.primary : COLORS.light_gray}
        />
      );
      break;
    case 'Tracker':
      svgImage = (
        <AppIconSvg
          icon={Icons.TrackerTabIcon}
          width={24}
          height={24}
          color={focused ? COLORS.primary : COLORS.light_gray}
        />
      );
      break;
    case 'Setting':
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
