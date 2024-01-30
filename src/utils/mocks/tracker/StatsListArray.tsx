import {COLORS} from '../../../styles/color';

export interface StatsList {
  boxColor: string;
  text: string;
  isShowEye: boolean;
}

export const StatsListArray: StatsList[] = [
  {
    boxColor: COLORS.turquoise_blue,
    text: 'Obligatory prayers',
    isShowEye: true,
  },
  {
    boxColor: COLORS.royal_blue,
    text: 'Voluntary prayers',
    isShowEye: true,
  },
  {
    boxColor: COLORS.golden_rod,
    text: 'Fasting',
    isShowEye: true,
  },
];
