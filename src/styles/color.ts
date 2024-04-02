import {Platform} from 'react-native';

export const COLORS = {
  primary: '#1290A1',
  secondary: '#ECF6F8',
  tertiary: '#D9D9D9',
  quaternary: '#BDBDBD',
  light_gray: '#BBBBBB',
  light_blue: '#ECF6F8',
  sucess: '#3AA757',
  error: '#EA4335',
  white: '#FFFFFF',
  black: '#000000',
  lightBlack: '#333333',
  green: '#1DA28F',
  dark_green: '#188C7B',
  background: '#F6F8F7',
  very_dark_gray: '#2A2F2F',
  dark_gray: '#464646',
  medium_gray: '#6B6B6B',
  light_black_gray: '#B5C6C4',
  pale_mint: '#F5FFFE',
  light_blue_gray: '#BDD4E3',
  forest_Green: '#33A753',
  crimson: '#E64C3C',
  light_Steel_Blue: '#D2E0E0',
  light_Powder_Blue: '#EEFAFC',
  pumpkin_orange: '#E86B0F',
  turquoise_blue: '#00DCFC',
  royal_blue: '#5882DC',
  golden_rod: '#E5BD2B',
  light_greenish_blue: ' #AEF0DB',
  powder_blue: '#B4E2DC',
  blush: '#E97063',
  light_cyan: '#ECF7FA',
  pale_aqua: '#E2EEED',
  pale_gold: '#F5DC80',
  pale_gray: '#DBE4E3',
  off_white: '#FEF7FF',
} as const;

// font family is here

export const fonts = {
  dmSans: {
    200: 'DMSans-Light',
    300: 'DMSans-ExtraLight',
    400: 'DMSans-Regular',
    500: 'DMSans-Medium',
    600: 'DMSans-SemiBold',
    700: 'DMSans-Bold',
    800: 'DMSans-ExtraBold',
  },
};
export const arabicFnt = {
  0: 'AlQalamQuranMajeedWeb2_D',
  1: 'Arabic',
};

export const spacing = {
  bottomSheetHeader: 24,
  paddingNavigationBar: Platform.select({ios: 44, android: 56}),
  paddingBottomTabBar: 49,
  paddingTabViewBar: 50,
  marginInnerRowsHalf: 4,
  marginInnerRows: 8,
  marginInnerContent: 16,
};
