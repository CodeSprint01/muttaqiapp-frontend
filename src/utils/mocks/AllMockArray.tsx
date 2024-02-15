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
import {allahNamesProps, exploreInterface, screens} from '../../types/types';
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

export const exploreArray: exploreInterface[] = [
  {
    image: Icons.EmptyBookmark,
    title: 'bookmark',
    subTitle: 'P.207',
    routeName: screens.ALL_BOOKMARKS,
  },
  {
    image: Icons.Quran,
    title: 'Quran',
    subTitle: 'P.207',
    routeName: screens.QURAN_SCREEN,
  },
  {
    image: Icons.Azkaar,
    title: 'Azkaar',
    subTitle: '1/3',
    routeName: screens.CARD_SCREEN,
  },
  {
    image: Icons.Duas,
    title: 'Dua',
    subTitle: '',
    routeName: screens.CARD_SCREEN,
  },
  {
    image: Icons.AllahNames,
    title: 'Allah names',
    subTitle: '99 names',
    routeName: screens.ALLAH_NAMES,
  },
  {
    image: Icons.Tasbih,
    title: 'Tasbih',
    subTitle: '',
    routeName: screens.TASBIH_COUNTER,
  },
  {
    image: Icons.Hadith,
    title: 'Hadith',
    subTitle: '',
    routeName: screens.CARD_SCREEN,
  },
  {
    image: Icons.Knowledge,
    title: 'Knowledge',
    subTitle: 'demo4',
    routeName: screens.KNOWLEDGE,
  },
];
// export interface exploreInterface {
//   image: any;
//   title: string;
//   subTitle: string;
// }

// export const pyayerArray: exploreInterface[] = [
//   {
//     image: Icons.GrayCompass,
//     title: 'gray',
//     subTitle: 'demo1',
//   },
//   {
//     image: Icons.BlueCompass,
//     title: 'blue',
//     subTitle: 'demo2',
//   },
//   {
//     image: Icons.GoldeCompass,
//     title: 'golden',
//     subTitle: 'demo3',
//   },
//   {
//     image: Icons.BlackCompass,
//     title: 'black',
//     subTitle: 'demo4',
//   },
// ];

// Allah names array

export const AllahNamesArray: allahNamesProps[] = [
  {
    id: 0,
    arabic: 'الله',
    english: '(Allah)',
    meaning: 'GOD',
    allahNamesDescription: [
      {
        meaningDescription:
          'The word ‘Allah’, the proper name of God, indicates that Allah is the true God who alone deserves to be worshipped, whom all creatures worship out of love, praise His greatness, revere Him and turn to Him in times of need and adversity. In fact, this name comprises all the meanings of His beautiful names.',
        occurrence: '2724 times.',
        evidance:
          '“Surely I am Allah, there is no god but I; therefore, worship Me and keep up prayer for My remembrance.”',
      },
    ],
  },
  {
    id: 1,
    arabic: 'الرحمن',
    english: '(Ar-rahmaan)',
    meaning: 'The Most Merciful',
    allahNamesDescription: [
      {
        meaningDescription:
          'The word ‘Allah’, the proper name of God, indicates that Allah is the true God who alone deserves to be worshipped, whom all creatures worship out of love, praise His greatness, revere Him and turn to Him in times of need and adversity. In fact, this name comprises all the meanings of His beautiful names.',
        occurrence: '2724 times.',
        evidance:
          'Surely I am Allah, there is no god but I; therefore, worship Me and keep up prayer for My remembrance.',
      },
    ],
  },

  {
    id: 2,
    arabic: 'الرحيم',
    english: '(Ar-rahmaan)',
    meaning: 'The Bestower of Mercy',
    allahNamesDescription: [
      {
        meaningDescription:
          'The word ‘Allah’, the proper name of God, indicates that Allah is the true God who alone deserves to be worshipped, whom all creatures worship out of love, praise His greatness, revere Him and turn to Him in times of need and adversity. In fact, this name comprises all the meanings of His beautiful names.',
        occurrence: '2724 times.',
        evidance:
          '“Surely I am Allah, there is no god but I; therefore, worship Me and keep up prayer for My remembrance.”',
      },
    ],
  },

  {
    id: 3,
    arabic: 'الملك',
    english: '(Al- malik)',
    meaning: 'The King and Owner of Dominion',
    allahNamesDescription: [
      {
        meaningDescription:
          'The word ‘Allah’, the proper name of God, indicates that Allah is the true God who alone deserves to be worshipped, whom all creatures worship out of love, praise His greatness, revere Him and turn to Him in times of need and adversity. In fact, this name comprises all the meanings of His beautiful names.',
        occurrence: '2724 times.',
        evidance:
          'Surely I am Allah, there is no god but I; therefore, worship Me and keep up prayer for My remembrance.”',
      },
    ],
  },
  {
    id: 4,
    arabic: 'الملك',
    english: '(Al- malik)',
    meaning: 'The King and Owner of Dominion',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: The word ‘Allah’, the proper name of God, indicates that Allah is the true God who alone deserves to be worshipped, whom all creatures worship out of love, praise His greatness, revere Him and turn to Him in times of need and adversity. In fact, this name comprises all the meanings of His beautiful names.',
        occurrence: '2724 times.',
        evidance:
          '“Surely I am Allah, there is no god but I; therefore, worship Me and keep up prayer for My remembrance.”',
      },
    ],
  },

  {
    id: 5,
    arabic: 'الملك',
    english: '(Al- malik)',
    meaning: 'The King and Owner of Dominion',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: The word ‘Allah’, the proper name of God, indicates that Allah is the true God who alone deserves to be worshipped, whom all creatures worship out of love, praise His greatness, revere Him and turn to Him in times of need and adversity. In fact, this name comprises all the meanings of His beautiful names.',
        occurrence: '2724 times.',
        evidance:
          '“Surely I am Allah, there is no god but I; therefore, worship Me and keep up prayer for My remembrance.”',
      },
    ],
  },
];
