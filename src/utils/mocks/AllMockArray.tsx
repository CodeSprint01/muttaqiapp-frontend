export const language: Array<{label: string; value: string}> = [
  {label: 'English', value: 'English'},
  {label: 'Urdu', value: 'Urdu'},
  {label: 'Arabic', value: 'Arabic'},
];
export const SecteList: Array<{label: string; value: string}> = [
  {label: 'Shia', value: 'Shia'},
  {label: 'Sunni', value: 'Sunni'},
];
export const MartialStatus: Array<{label: string; value: string}> = [
  {label: 'Single', value: 'Single'},
  {label: 'Married', value: 'Married'},
  {label: 'Divored', value: 'Divored'},
];
import {Icons} from '../helper/svg';

// compass template array svg Image
export const compassTemplate: Array<{
  name: string;
  compassImage: any;
  compassPin: any;
}> = [
  {
    name: 'grayCompass',
    compassImage: Icons.GrayCompass,
    compassPin: Icons.GrayBlueCompPin,
  },
  {
    name: 'blueCompass',
    compassImage: Icons.BlueCompass,
    compassPin: Icons.GrayBlueCompPin,
  },
  {
    name: 'goldenCompass',
    compassImage: Icons.GoldeCompass,
    compassPin: Icons.GoldeCompPin,
  },
  {
    name: 'blackCompass',
    compassImage: Icons.BlackCompass,
    compassPin: Icons.BlackCompPin,
  },
];
export interface exploreInterface {
  image: any;
  firstTxt: string;
  secondTxt: string;
}

export const exploreArray: exploreInterface[] = [
  {
    image: Icons.QuranExplore,
    firstTxt: 'Quran',
    secondTxt: 'P.207',
  },
  {
    image: Icons.Azkaar,
    firstTxt: 'Azkaar',
    secondTxt: '1/3',
  },
  {
    image: Icons.GoldeCompass,
    firstTxt: 'golden',
    secondTxt: 'demo3',
  },
  {
    image: Icons.BlackCompass,
    firstTxt: 'black',
    secondTxt: 'demo4',
  },
];
export interface exploreInterface {
  image: any;
  firstTxt: string;
  secondTxt: string;
}

export const pyayerArray: exploreInterface[] = [
  {
    image: Icons.GrayCompass,
    firstTxt: 'gray',
    secondTxt: 'demo1',
  },
  {
    image: Icons.BlueCompass,
    firstTxt: 'blue',
    secondTxt: 'demo2',
  },
  {
    image: Icons.GoldeCompass,
    firstTxt: 'golden',
    secondTxt: 'demo3',
  },
  {
    image: Icons.BlackCompass,
    firstTxt: 'black',
    secondTxt: 'demo4',
  },
];
