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

export const Gender: Array<string> = ['male', 'female', 'other'];
