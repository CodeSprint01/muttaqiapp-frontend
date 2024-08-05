export const language: Array<{label: string; value: string}> = [
  {label: 'English', value: 'English'},
  {label: 'Urdu', value: 'Urdu'},
  {label: 'Arabic', value: 'Arabic'},
];
export const SecteList: Array<{label: string; value: string}> = [
  {label: 'Shia', value: 'Shia'},
  {label: 'Sunni', value: 'Sunni'},
];
export const Gender: Array<{label: string; value: string}> = [
  {label: 'male', value: 'male'},
  {label: 'Female', value: 'female'},
];
export const MartialStatus: Array<{label: string; value: string}> = [
  {label: 'Single', value: 'Single'},
  {label: 'Married', value: 'Married'},
  {label: 'Divored', value: 'Divored'},
];
export const CardArray: Array<{label: string; value: string}> = [
  {label: 'master', value: 'master'},
  {label: 'visa', value: 'visa'},
  {label: 'paypak', value: 'paypak'},
];
export const IdentityArray: Array<{label: string; value: string}> = [
  {
    label: 'National ID',
    value: 'National ID',
  },
  {
    label: 'Passport',
    value: 'Passport',
  },
];
export const IncomeType: Array<{label: string; value: string}> = [
  {label: 'Earned Income', value: 'Earned Income'},
  {label: 'Business Income', value: 'Business Income'},
  {label: 'Dividend Income', value: 'Dividend Income'},
  {label: 'Rental Income', value: 'Rental Income'},
];
export const relationship: Array<{label: string; value: string}> = [
  {label: 'Parent', value: 'Parent'},
  {label: 'Siblings', value: 'Siblings'},
  {label: 'Spouse', value: 'Spouse'},
  {label: 'Child', value: 'Child'},
];
export const maritalStatus: Array<{label: string; value: string}> = [
  {label: 'Single', value: 'Single'},
  {label: 'Married', value: 'Married'},
  {label: 'Divorced', value: 'Divorced'},
  {label: 'Widowed', value: 'Widowed'},
];
export const aliveStatus: Array<{label: string; value: string}> = [
  {label: 'Alive', value: 'Alive'},
  {label: 'Deceased', value: 'Deceased'},
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
  // {
  //   image: Icons.EmptyBookmark,
  //   title: 'bookmark',
  //   subTitle: '',
  //   routeName: screens.ALL_BOOKMARKS,
  // },
  // {
  //   image: Icons.FillHeart,
  //   title: 'Favourites',
  //   subTitle: '',
  //   routeName: screens.ALL_FAVOURITES,
  // },
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
          'Meaning: The word ‘Allah’, the proper name of God, indicates that Allah is the true God who alone deserves to be worshipped, whom all creatures worship out of love, praise His greatness, revere Him and turn to Him in times of need and adversity. In fact, this name comprises all the meanings of His beautiful names.',
        // occurrence: '2724 times.',
        // evidance:
        //   '“Surely I am Allah, there is no god but I; therefore, worship Me and keep up prayer for My remembrance.”',
      },
    ],
  },
  {
    id: 1,
    arabic: 'الرَّحْمَنُ',
    english: '(Ar-rahmaan)',
    meaning: 'The Beneficent',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: He is the One who blesses all His creation with prosperity and devoid from disparity. He is most merciful, kind, and loving towards all creation. His Rahma is all inclusive and embraces all.',
        // occurrence: '2724 times.',
        // evidance:
        //   'Surely I am Allah, there is no god but I; therefore, worship Me and keep up prayer for My remembrance.',
      },
    ],
  },

  {
    id: 2,
    arabic: 'الرَّحِيمُ',
    english: '(Ar-rahgeem)',
    meaning: 'TThe Merciful',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: The name Ar-Raheem (in Arabic: ٱلْرَّحِيْمُ) comes from the same root as Ar-Rahman which refers to Allah’s attribute of being Merciful. Although similarly related the meanings are different. Ar-Rahman can be understood to refer to Allah as the origination/source of all mercy, whereas Ar-Raheem refers to its sustaining/infiniteness. Some view the name of Ar-Raheem as being merciful to His creation deserving of mercy (primarily the mercy reserved for the believers).',
        // occurrence: '2724 times.',
        // evidance:
        //   '“Surely I am Allah, there is no god but I; therefore, worship Me and keep up prayer for My remembrance.”',
      },
    ],
  },

  {
    id: 3,
    arabic: 'الْمَلِكُ',
    english: '(Al- malik)',
    meaning: 'The King',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: the literal meaning in Arabic is "The King." He is the one who reigns dominion over the heavens and the earth and everything that resides within them. There is nothing above Him, and He is alone.',
        // occurrence: '2724 times.',
        // evidance:
        //   'Surely I am Allah, there is no god but I; therefore, worship Me and keep up prayer for My remembrance.”',
      },
    ],
  },
  {
    id: 4,
    arabic: 'الْقُدُّوسُ',
    english: '(Al-quddus)',
    meaning: 'The Most Sacred',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: the most pure or the most holy. He is so far removed from any imperfection and does not suffer from any shortcomings. The mere mention of being free from defects borders on insult as it implies the possibility of imperfection. He transcends all that we perceive as perfection, and all sublime attributes belong to Him.',
        // evidance:
        //   '“Surely I am Allah, there is no god but I; therefore, worship Me and keep up prayer for My remembrance.”',
      },
    ],
  },

  {
    id: 5,
    arabic: 'السَّلاَمُ',
    english: 'As-salam',
    meaning: 'The Source of Peace, The Flawless',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: He is the One who grants peace and security to all His creation. Allah is above and beyond all weaknesses and inflictions. The source of peace and security for mankind. Breaking away from As-Salam brings disturbance and destruction to oneself. It is because He is free of any defect that the one who is with Him experiences tranquility.',
        // occurrence: '2724 times.',
        // evidance:
        //   '“Surely I am Allah, there is no god but I; therefore, worship Me and keep up prayer for My remembrance.”',
      },
    ],
  },
  {
    id: 6,
    arabic: 'الْمُؤْمِنُ',
    english: 'Al-mumin',
    meaning: 'The Infuser of Faith',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning:  the one who witnessed for Himself that no one is God but Him. And He is the one who sent down Messengers and revealed His books as clear proofs.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 7,
    arabic: 'الْمُهَيْمِنُ',
    english: 'Al-muhaymin',
    meaning: 'The Preserver of Safety',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: one who ensures well being and protection over His creation. He is also the ever watchful. Nothing that can be hidden from Him, He is the knower of all the secrets we conceal.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 8,
    arabic: 'الْعَزِيزُ',
    english: 'Al-aziz',
    meaning: 'All Mighty',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: he one who is most powerful and strong. He is the conqueror that is never conquered and never harmed. This is because His strength, glory, and power are overwhelming, and cannot be overcome or resisted. He is the only one with complete mastery over all creation.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 9,
    arabic: 'الْجَبَّارُ',
    english: 'Al-jabbar',
    meaning: 'The Compeller, The Restorer',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning:  there are several accepted meanings to this name. The most often quoted is The Compeller. He implements His decree without any opposition. There is no one that prevails over Him. The other interpretation is the repairer. He restores all of creation. He heals the broken-hearted, binds their wounds, and brings comfort to the weak. He compels each and everything to His divine will but is never Himself compelled.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 10,
    arabic: 'الْمُتَكَبِّر',
    english: 'Al-mutakabbir',
    meaning: 'The Supreme, The Majestic',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: the supremely great one. He is exalted far above all creation, The One who is clear from the attributes of the creatures and from resembling them. He has rights, privileges, and qualities that others do not have. He is tremendous and manifests this greatness in all things and many ways.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 11,
    arabic: 'الْخَالِقُ',
    english: 'Al-khaaliq',
    meaning: 'The Creator, The Maker',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: He is the one who creates things from nothing with no precedents. He creates what He pleases and in a perfect manner. He is the only one who determines when, how, and what to create and does so from nothing.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 12,
    arabic: 'الْبَارِئُ',
    english: 'AL-BAARI',
    meaning: 'The Evolver',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: the one who decreed things to exist out of nothing in a specific manner. Creates shape from nothing that has no model or similarity. He manifests His creations in perfect harmony and in perfect proportions without any faults.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 13,
    arabic: 'الْمُصَوِّرُ',
    english: 'Al-musawwir',
    meaning: 'The Fashioner',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: He brings into existence whatever He wills and in whatever manner He wills it. He says, kun faya kun, “Be! and it is". He is the fashioner of every creation and has given it a special form whereby it is distinguished.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 14,
    arabic: 'الْغَفَّارُ',
    english: 'Al-ghaffar',
    meaning: 'The Constant Forgiver',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: He sees our sins and disobedience, yet He still forgives and accepts the repentance of the sincere. He shows never-ending compassion and forgiveness, no matter how big or small the sin. He is the most forgiving and loves to forgive.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 15,
    arabic: 'الْقَهَّارُ',
    english: 'Al-Qahhar',
    meaning: 'The All-Prevailing One',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: he one who prevails over all creation. The universe runs according to the laws laid down by Allah سُبْحَٰنَهُۥ وَتَعَٰلَىٰ. He is dominant, the master of all, and is victorious over all opposition. He has the perfect Power and is not unable over anything.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 16,
    arabic: 'الْوَهَّابُ',
    english: 'Al-wahhaab',
    meaning: 'The Supreme Bestower',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: which means the great giver whose blessings are freely and perpetually given. He gives with no purpose and expects nothing in return. Allah سُبْحَٰنَهُۥ وَتَعَٰلَىٰ is truly the most liberal giver, He gives to the deserving and undeserving, to the good and the evil.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 17,
    arabic: 'الرَّزَّاقُ',
    english: 'Ar-razzaaq',
    meaning: 'The Provider',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: He Provider, The Sustainer for all His creatures. He is The One who creates all means of nourishment and gives them their livelihood. He is the provider of growth for all things good for the body, the soul, and the mind.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 18,
    arabic: 'الْفَتَّاحُ',
    english: 'Al-fattaah',
    meaning: 'The Supreme Solver',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: the revealer, and the granter of success. He opens or locks His doors of mercy to whom He pleases. Through His guidance, whatever is unclear becomes clear. Allah سُبْحَٰنَهُۥ وَتَعَٰلَىٰ has the best judgment and holds the keys to victory and success.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 19,
    arabic: 'اَلْعَلِيْمُ',
    english: 'Al-aleem',
    meaning: 'The All-Knowing',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: the one whose knowledge is comprehensive and extends to all that is seen and unseen, apparent and hidden, present and future, near and far. His knowledge precedes, and He is intuitively aware of all things, even before they happen. He is the knower of all details, and nothing goes unnoticed or unrecorded. Indeed, He is the Omniscient One.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 20,
    arabic: 'الْقَابِضُ',
    english: 'Al-qaabid',
    meaning: 'The Withholder',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: Allah is Al-Qabid meaning whatever He wills comes to be. He is the one who enriches and makes poor. Al-Qabid decides to withhold something or to make it scarce. He is the taker of all souls at the time of death, and He stretches His hand out to the believers so that they may turn to him and repent. He is the one who constricts sustenance, our lives, and our hearts. The opposite, Al-Basit is the one who expands and widens it with His Generosity and Mercy.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 21,
    arabic: 'الْبَاسِطُ',
    english: 'Al-baasit',
    meaning: 'The Extender',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: Allah is Al-Baasit, The One who amplifies all abundance. He is the one who makes the way wide open. He expands and widens the hearts and our souls and gives us sustenance in His Generosity and Mercy. He gives plentifully to whoever He wills and reaches out a helping hand to all mankind.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 22,
    arabic: 'الْخَافِضُ',
    english: 'Al-khaafidh',
    meaning: 'The Reducer',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: The One who lowers whoever He willed by His destruction and (Ar-Rafi) The One who raises whoever He willed by His endowment.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 23,
    arabic: 'الرَّافِعُ',
    english: 'Ar-raafi',
    meaning: 'The Exalter, The Elevator',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: He is The One who lowers whoever He wills and raises whoever He wills. The One who chooses who will be raised in rank in every way.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 24,
    arabic: 'الْمُعِزُّ',
    english: 'Al-muizz',
    meaning: 'The Honourer, The Bestower',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: He gives esteem to whoever He willed; hence there will be no one to degrade them. He degrades whoever He willed; hence there is no one else to provide them with esteem. Al-Muizz is the one to give strength and honor to His obedient and loving servants. He gives material power to whoever He wills. He strengthens, glorifies, and makes it possible for someone or something to be respected.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 25,
    arabic: 'ٱلْمُذِلُّ',
    english: 'Al-muzil',
    meaning: 'The Dishonourer',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning:  He gives esteem to whoever He willed; hence there will be no one to degrade them. He degrades whoever He willed; hence there is no one else to provide them with esteem. Once a man is disgraced, He may never be honored without the permission of Allah.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 26,
    arabic: 'السَّمِيعُ',
    english: 'As-samee',
    meaning: 'The All-Hearing',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: Allah is As-Sami (in Arabic: ٱلْسَّمِيعُ) the perpetual hearer. He pays attention to every supplication, listening to all who reach out to Him. Whether we speak loudly or in secrecy, English or in French, Allah سُبْحَٰنَهُۥ وَتَعَٰلَىٰ hears it all.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 27,
    arabic: 'الْبَصِيرُ',
    english: 'Al-baseer',
    meaning: 'The All-Seeing',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: Allah is Al-Baseer (in Arabic: ٱلْبَصِيرُ), He sees everything, even if it is insignificant, like a black ant on a black stone when it is pitch black at night. There is nothing hidden from His sight. He has knowledge of all things, both in Heaven and on Earth. He does not miss any detail. His sight encompasses all, not just the superficial. He sees what is truly within.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 28,
    arabic: 'الْحَكَمُ',
    english: 'Al-hakam',
    meaning: 'The Impartial Judge',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: The Giver of Justice. His judgment, once rendered, cannot be thwarted. He always delivers justly in every situation and never makes a mistake. He is the best of judges.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 29,
    arabic: 'الْعَدْلُ',
    english: 'Al-adl',
    meaning: 'The Utterly Just',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: The one who rectifies and sets matters straight in a just and equitable manner. He always delivers absolute justice through His wisdom without failure. He gives each what he deserves and puts everything in its proper order.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 30,
    arabic: 'اللَّطِيفُ',
    english: 'AL-LATEEF',
    meaning: 'The Subtle One, The Most Gentle',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: The most gentle and gracious to people and cares for them, although they may be oblivious to his acts. His nature is kind, affectionate, and understanding of the subtle details of individual circumstances. His actions are so subtle that they can not be observable or understood. He does things for you that you will never know. This is the name of Allah سُبْحَٰنَهُۥ وَتَعَٰلَىٰ to call when asking for help through hardship.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 31,
    arabic: 'الْخَبِيرُ',
    english: 'Al-khabeer',
    meaning: 'The All-Aware',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: Allah is Al-Khabeer. The Knower of reality, The One whose knowledge is comprehensive, knowing the qualities and meanings of all things. He knows and understands the most hidden secrets. He is All-Aware and All-Acquainted. The One who knows the truth in every situation.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 32,
    arabic: 'الْحَلِيمُ',
    english: 'AL-haleem',
    meaning: 'The Most Forbearing',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: Allah is Al-Haleem (also spelt Al-Halim), the most serene, kind and gentle. He does not punish people for every sin. He tolerates and is most gracious and merciful. He is ever calm and deliberate, never acting hastily, even with the wrongdoers. He gives us the opportunity to learn and be kind.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 33,
    arabic: 'الْعَظِيمُ',
    english: 'Al-azeem',
    meaning: 'The Magnificent, The Supreme',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: Allah سُبْحَٰنَهُۥ وَتَعَٰلَىٰ is Al-Azeem, The Supreme Glory and The Greatest. His reality is too great to be fully understood under the human mind is capacity. He is infinitely greater than His creation. It is said, His throne (symbolic of His knowledge and authority) extends over the heavens and the earth, and their care burdens Him not. He is the One deserving the attributes of Exaltment, Glory, Extolement, and Purity from all imperfection.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 34,
    arabic: 'الْغَفُور',
    english: 'AL-GHAFOOR',
    meaning: 'The Great Forgiver',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: Allah سُبْحَٰنَهُۥ وَتَعَٰلَىٰ is Al-Ghafoor (in Arabic: ٱلْغَفُورُ), He is The One who completely forgives our sins and faults. His forgiveness is unlimited, and He is all compassionate. He is most high; His forgiveness extends to all who turn to him in humility and seek repentance.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 35,
    arabic: 'الشَّكُورُ',
    english: 'Ash-shakoor',
    meaning: 'The Most Appreciative',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: Allah سُبْحَٰنَهُۥ وَتَعَٰلَىٰ is Ash-Shakur (in Arabic: ٱلْشَّكُورُ), meaning the most grateful, the rewarder of good deeds, and is most appreciative. He notices the smallest of our acts of righteousness and rewards us for them in this life or the next. He is bountiful in giving and bestows great rewards for the smallest amount of good.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 36,
    arabic: 'الْعَلِيُّ',
    english: 'Al-alee',
    meaning: 'The Most High, The Exalted',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: Allah سُبْحَٰنَهُۥ وَتَعَٰلَىٰ is Al-Aliyy (in Arabic: ٱلْعَلِيُّ), the most exalted and all high. He exceeds all others, and there is nothing higher. He is the one whose rank and station are the highest. He is above all that has or will ever be.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 37,
    arabic: 'الْكَبِيرُ',
    english: 'Al-kabeer',
    meaning: 'The Most Great',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: The name Al-Kabeer (in Arabic: ٱلْكَبِيرُ) is the 37th name of Allah سُبْحَٰنَهُۥ وَتَعَٰلَىٰ meaning the perfection of greatness. The heart of the believer knows Allah is the essence of perfection and nothing is comparable to him. His greatness is beyond measure, and His being is unimaginable to the human mind.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 38,
    arabic: 'الْحَفِيظُ',
    english: 'Al-hafeedh',
    meaning: 'The Preserver',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: Allah سُبْحَٰنَهُۥ وَتَعَٰلَىٰ is Al-Hafiz (in Arabic: ٱلْحَفِيظُ), the guardian and protector of everything. He preserves all creations and remembers all that has ever been and all that is. He is the protector of The Quran and vowed to safeguard it from being changed or perverted, as was the case with previous scriptures.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 39,
    arabic: 'المُقيِت',
    english: 'Al-muqeet',
    meaning: 'The Sustainer',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: Allah سُبْحَٰنَهُۥ وَتَعَٰلَىٰ is Al-Muqeet (in Arabic: ٱلْمُقِيتُ) meaning the ultimate sustainer. He gives strength and nourishment to His creations and maintains all that exists. He oversees, guards, and preserves all. To Allah سُبْحَٰنَهُۥ وَتَعَٰلَىٰ we owe the satisfaction of all needs, but He is alone and independent of needs.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 40,
    arabic: 'اﻟْﺣَسِيبُ',
    english: 'Al-haseeb',
    meaning: 'The Reckoner',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: Allah سُبْحَٰنَهُۥ وَتَعَٰلَىٰ is Al-Haseeb (in Arabic: ٱلْحَسِيبُ). He is The One who takes account of all actions and reckons them on the day of judgment. There is nothing that goes unnoticed, however small. Allah سُبْحَٰنَهُۥ وَتَعَٰلَىٰ is the one who will take account of everything and will hold each person accountable. He will give whatever is sufficient and necessary in every situation.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 41,
    arabic: 'الْجَلِيلُ',
    english: 'Al-jaleel',
    meaning: 'The Majestic',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: Allah سُبْحَٰنَهُۥ وَتَعَٰلَىٰ is Al-Jaleel (in Arabic: ٱلْجَلِيلُ): He is the great one and above all in dignity and rank. He is majestic and the source of all attributes of greatness. To Him, all honor and sincere devotion are due.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 42,
    arabic: 'الْكَرِيمُ',
    english: 'Al-kareem',
    meaning: 'The Most Generous, The Most Esteemed',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: Allah سُبْحَٰنَهُۥ وَتَعَٰلَىٰ is Al-Kareem (in Arabic: ٱلْكَرِيمُ) meaning the one who is the most generous, bountiful and esteemed. He is The One whose kindness knows no bounds and continually gives precious gifts to whomever He wills. He is gracious in giving and forgiving.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 43,
    arabic: 'الرَّقِيبُ',
    english: 'Al-raqeeb',
    meaning: 'The Watchful',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: Allah is Ar-Raqib (in Arabic ٱلْرَّقِيبُ), meaning the one who sees what is hidden. He is the vigilant witness and acts as a guardian protecting His creation. It also relates to the attribute of knowledge. He is the one who sees the truth in everything. He knows the secrets of every soul, and on the day of recompense, Allah سُبْحَٰنَهُۥ وَتَعَٰلَىٰ will reward it for what it is earned.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 44,
    arabic: 'ٱلْمُجِيبُ',
    english: 'Al-mujeeb',
    meaning: 'The Responsive One',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: Allah سُبْحَٰنَهُۥ وَتَعَٰلَىٰ is Al-Mujeeb/Al-Mujib (in Arabic: ٱلْمُجِيبُ) meaning He is the one very close to His believers and readily available to hear and answer the supplications of those who ask. He is the responder to all needs, invitations, and prayers. Whoever needs help in difficulties, they should call upon this name of Allah سُبْحَٰنَهُۥ وَتَعَٰلَىٰ.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 45,
    arabic: 'الْوَاسِعُ',
    english: 'Al-waasi',
    meaning: 'The All-Encompassing, the Boundless',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: Allah سُبْحَٰنَهُۥ وَتَعَٰلَىٰ is Al-Wasi (in Arabic: ٱلْوَاسِعُ): The one who’s knowledge, mercy, and provision are vast. He is of limitless capacity and abundance and gives without expecting anything in return. Allah سُبْحَٰنَهُۥ وَتَعَٰلَىٰ embraces all things and His wisdom and mercy are boundless.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 46,
    arabic: 'الْحَكِيمُ',
    english: 'Al-hakeem',
    meaning: 'The All-Wise',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: Allah سُبْحَٰنَهُۥ وَتَعَٰلَىٰ is Al-Hakeem (in Arabic: ٱلْحَكِيمُ), the most judicious and the all-wise. He possesses the ability to determine right from wrong and is free from error and misunderstanding. His designs in nature and life are perfect and accurate. He is the only one qualified to judge the worth of all things.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 47,
    arabic: 'الْوَدُودُ',
    english: 'Al-wadud',
    meaning: 'The Most Loving',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: Allah سُبْحَٰنَهُۥ وَتَعَٰلَىٰ is Al-Wadud (in Arabic: ٱلْوَدُودُ), the most loving and affectionate. He is faithful to his servants and shows them the purest love. He is the singular source of all love and kindness. The One who loves His believing servants, and His believing servants adore Him.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 48,
    arabic: 'الْمَجِيدُ',
    english: 'Al-majeed',
    meaning: 'The Glorious, The Most Honorable',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: Allah سُبْحَٰنَهُۥ وَتَعَٰلَىٰ is Al-Majeed (in Arabic: ٱلْمَجِيدُ), meaning the one who is the most glorious, honorable, dignified, noble, and generous. It is another name that covers several attributes. He is the only one deserving all praise and honor because He is all-glorious.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 49,
    arabic: 'الْبَاعِثُ',
    english: 'Al-baith',
    meaning: 'The Infuser of New Life',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: Allah سُبْحَٰنَهُۥ وَتَعَٰلَىٰ is Al-Baith (in Arabic: ٱلْبَاعِثُ), meaning the One who chooses who will be awakened and be sent forth. He is the giver of life and who sends light into the world. The One who resurrects His servants after death for reward and/or punishment.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 50,
    arabic: 'الشَّهِيدُ',
    english: 'Ash-shaheed',
    meaning: 'The All Observing Witnessing',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: Allah سُبْحَٰنَهُۥ وَتَعَٰلَىٰ is Ash-Shaheed (in Arabic: ٱلْشَّهِيدُ) meaning the one who is omnipresent and all-observing. There is nothing that we do that goes unnoticed, as He is ever-present and sees everything. His knowledge comprehends all, and He will be the ultimate witness on the day of judgment.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 51,
    arabic: 'الْحَقُ',
    english: 'Al-haqq',
    meaning: 'The Absolute Truth',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: Allah سُبْحَٰنَهُۥ وَتَعَٰلَىٰ is Al-Haqq (in Arabic: ٱلْحَقُّ), meaning: the only reality, the one who is the embodiment of truth, the absolute. Since He is the sole and true God, He has every right to be worshipped. His essence is unavoidable and unchanged.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 52,
    arabic: 'الْوَكِيلُ',
    english: 'Al-wakeel',
    meaning: 'The Trustee, The Disposer of Affairs',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: Allah سُبْحَٰنَهُۥ وَتَعَٰلَىٰ is Al-Wakeel (in Arabic: ٱلْوَكِيلُ), the one and only who can be trusted with all our affairs. He is the supreme trustee, guardian, and administrator. A believer understands the rewards of his efforts come from Allah سُبْحَٰنَهُۥ وَتَعَٰلَىٰ, and therefore He entrusts his faith fully in Him.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 53,
    arabic: 'الْقَوِيُ',
    english: 'Al-qawiyy',
    meaning: 'The All-Strong',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: Allah ٱلْقَوِيُّ is Al-Qawiyy (in Arabic: ٱلْقَوِيُّ), meaning the one who commands all power and whose strength is unparalleled to anything else. His strength is truly unlimited and inexhaustible. Man is strength does not compare to that of Allah the Almighty.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 54,
    arabic: 'الْمَتِينُ',
    english: 'Al-mateen',
    meaning: 'The Firm, The Steadfast',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: Allah سُبْحَٰنَهُۥ وَتَعَٰلَىٰ is Al-Matin (in Arabic: ٱلْمَتِينُ), meaning His power is steadfast. It is the same as it was yesterday and will remain tomorrow. He is ever-constant and firm.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 55,
    arabic: 'الْوَلِيُّ',
    english: 'Al-waliyy',
    meaning: 'The Protecting Associate',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: Allah سُبْحَٰنَهُۥ وَتَعَٰلَىٰ is Al-Waliy (in Arabic: ٱلْوَلِيُّ), meaning the true protector. He is supportive and loves His servants, protecting them from evil. Allah سُبْحَٰنَهُۥ وَتَعَٰلَىٰ wants victory for us and will guide mankind towards the path of righteousness.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 56,
    arabic: 'الْحَمِيدُ',
    english: 'Al-hameed',
    meaning: 'The Praiseworthy',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: Allah سُبْحَٰنَهُۥ وَتَعَٰلَىٰ is Al-Hameed (in Arabic: ٱلْحَمِيدُ), meaning the one worthy of praise. He qualifies as the praiseworthy one because of all His attributes and because He has given us what we have. He is the only one deserving in every manner of praise, and He should be exalted. Join in extolling him by repeating al-hamdu lillah, meaning praise be to Allah.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 57,
    arabic: 'الْمُحْصِي',
    english: 'Al-muhsee',
    meaning: 'The All-Enumerating, The Counter',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: The One who considers all things in the universe and knows the details of every moment or change. He comprehends everything and possesses all knowledge. Allah سُبْحَٰنَهُۥ وَتَعَٰلَىٰ knows every deed, and written details are recorded by His angels.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 58,
    arabic: 'الْمُبْدِئُ',
    english: 'Al-mubdi',
    meaning: 'The Originator, The Initiator',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: Allah is Al-Mubdi, the originator of all creation. He is the beginner of all things, and nothing could have existed without His willing it to be. He is The One who initiates all things.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 59,
    arabic: 'ٱلْمُعِيدُ',
    english: 'Al-mueed',
    meaning: 'The Restorer, The Reinstater',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: Allah سُبْحَٰنَهُۥ وَتَعَٰلَىٰ is Al-Mueed (in Arabic: ٱلْمُعِيدُ), He is the restorer, the one who refashions a thing. He is the One who will restore us back to life on the day of resurrection.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 60,
    arabic: 'الْمُحْيِي',
    english: 'Al-muuhya',
    meaning: 'The Giver of Life',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: Allah سُبْحَٰنَهُۥ وَتَعَٰلَىٰ is Al-Muhyi (in Arabic:ٱلْمُحْيِى), the One who took out a living human from semen that does not have a soul. He gives life by giving the souls back and regenerating our bodies on the resurrection day. He is The One who makes the hearts alive by the light of knowledge.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 61,
    arabic: 'اَلْمُمِيتُ',
    english: 'Al-mumeet',
    meaning: 'The Creator of Death',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: the one who gives life and the one who takes it away. He ordains who will become lifeless. Eventually, we all return to Him.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 62,
    arabic: 'الْحَيُّ',
    english: 'Al-hayy',
    meaning: 'The Ever-Living',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: The One who is undying and will be forever. He is perfect and not subject to death or sickness. He is eternally whole and absolute, whom all life arises from.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 63,
    arabic: 'الْقَيُّومُ',
    english: 'Al-Qayyoom',
    meaning: 'The Sustainer, The Self-Subsisting',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: His essence/nature is to exist being utterly free from dependence on anything or anyone. Al-Qayyum is the one through whom all things arise. He is Ever-Living and Self-Sustaining. Everything else in existence depends on Al-Qayyum.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 64,
    arabic: 'الْوَاجِدُ',
    english: 'Al-waajid',
    meaning: 'The Perceiver',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: The one who does not need or lacks anything. He is the most resourceful and finds whatever He wills.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 65,
    arabic: 'الْمَاجِدُ',
    english: 'Al-maajid',
    meaning: 'The Illustrious, the Magnificent',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: The most noble, magnificent, and generous. Majid is very close to the meaning of Jalal (majesty and greatness) and Kareem (full of bounty and honor). He is the one who consistently gives, for His wealth is endless. Truly Allah سُبْحَٰنَهُۥ وَتَعَٰلَىٰ is the most glorious and highly esteemed.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 66,
    arabic: 'الْواحِدُ',
    english: 'Al-waahid',
    meaning: 'The One',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: the One and only God. There is no alternative. He is the sole originator from which all has arisen. He has no partners or relationships. None is equal to Him.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 67,
    arabic: 'اَلاَحَدُ',
    english: 'Al-ahad',
    meaning: 'The Unique, The Only One',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: He is incomparable, unequaled, and indivisible. Al-Ahad is the One who was, is, and will ever remain alone. No one can ever be equal to Him in the essence of all His beautiful attributes.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 68,
    arabic: 'الصَّمَدُ',
    english: 'As-samad',
    meaning: 'The Eternal, Satisfier of Needs',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: He is the one whom refuge is sought in times of adversity. He is eternal, whole and complete. There is no emptiness.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 69,
    arabic: 'الْقَادِرُ',
    english: 'Al-qadeer',
    meaning: 'The Omnipotent One',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: the most powerful with the ability to measure out everything. Whenever He decrees a thing, it is. Nothing can interrupt or disturb the will of Allah سُبْحَٰنَهُۥ وَتَعَٰلَىٰ. He is the most capable without any limitations.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 70,
    arabic: 'الْمُقْتَدِرُ',
    english: 'AL-MUQTADIR	',
    meaning: 'The Powerful',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: the all-powerful who delivers a suitable measure of all things. He has absolute strength, power, and mastery. Nothing is beyond his power.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 71,
    arabic: 'الْمُقَدِّمُ',
    english: 'Al-muqaddim',
    meaning: 'The Expediter, The Promoter',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: The One who promotes or brings forward. This includes promoting His servants to higher ranks.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 72,
    arabic: 'الْمُؤَخِّرُ',
    english: 'AL-MU’AKHKHIR	Al-muakhkhir',
    meaning: 'The Delayer',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: The One who wisely delays or holds back. By His will, he can detain unbelievers and hold them back on the day of judgment.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 73,
    arabic: 'الأوَّلُ',
    english: 'Al-awwal',
    meaning: 'The First',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: He is The One whose existence is without beginning. He is truly the first, and nothing was before Him.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 74,
    arabic: 'الآخِرُ',
    english: 'Al-aakhir',
    meaning: 'The Last',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: The One whose existence will extend past the end of this universe. He will be the last, just as He is the first.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 75,
    arabic: 'الظَّاهِرُ',
    english: 'Az-zaahir',
    meaning: 'The Manifest',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: The One who is evident and conspicuous. He made himself evident without being visible. The very essence and attributes are shown through all His creations.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 76,
    arabic: 'الْبَاطِنُ',
    english: 'Al-baatin',
    meaning: 'The Hidden One, Knower of the Hidden',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: The One who is hidden or secret. Allah سُبْحَٰنَهُۥ وَتَعَٰلَىٰ is unseen but His existence is known through signs. Allah سُبْحَٰنَهُۥ وَتَعَٰلَىٰ immanent operating within all of creation. The one who is the secret inner companion.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 77,
    arabic: 'الْوَالِي',
    english: 'Al-waali',
    meaning: 'The Sole Governor',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: The One who is the sole planner and governor of all things. He is fully supportive, helpful, and a master of all. He manages and disposes of things at His will based on His judgment.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 78,
    arabic: 'الْمُتَعَالِي',
    english: 'Al-mutaali',
    meaning: 'The Self Exalted',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: The highest One, and exalted above all creation. He is far beyond any imagination or thought, and the human mind is too narrow to understand his true greatness.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 79,
    arabic: 'الْبَرُّ',
    english: 'Al-barr',
    meaning: 'The Source of All Goodness',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: The One who is the great benefactor, the most righteous, and the source of goodness. He is ample in kindness and desires good for people bestowing them with health, wealth, and happiness. He is ever merciful and compassionate. He is The One who covered them with His sustenance and specified whoever He willed among them by His support, protection, and special mercy.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 80,
    arabic: 'التَّوَابُ',
    english: 'At-tawwab',
    meaning: 'The Ever-Pardoning',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: The One who beckons for our return. He repeatedly turns mankind towards repentance should they journey temporarily on the wrong path. Allah is lenient and restores grace to those who repent and forgives those who seek forgiveness.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 81,
    arabic: 'الْمُنْتَقِمُ',
    english: 'Al-muntaqim',
    meaning: 'The Avenger',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning:  The One who victoriously prevails over His enemies and punishes them for their sins. Allah is most patient, but the time will come when justice must be given. Avoid things which Allah سُبْحَٰنَهُۥ وَتَعَٰلَىٰ has forbidden, for He is swift and just with His punishment and does not let trespassing go unaccounted for.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 82,
    arabic: 'العَفُوُ',
    english: 'Al-afuww',
    meaning: 'The Pardoner',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: The One who pardons sins and leaves no trace of any fault. The difference between forgiving and effacing is there will be no trace or record of the offense being committed. It will be as if it had never happened.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 83,
    arabic: 'الرَّؤُوفُ',
    english: 'Ar-raoof',
    meaning: 'The Most Kind',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: The One who is extremely compassionate. He is The One whose mercy will endow whoever he willed among His creatures. Whatever Allah سُبْحَٰنَهُۥ وَتَعَٰلَىٰ decrees is done with perfect judgment, and He is never harsh or unjust in his rulings.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 84,
    arabic: 'َمَالِكُ ٱلْمُلْكُ',
    english: 'Maalik-ul-mulk',
    meaning: 'Master of the Kingdom, Owner of the Dominion',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: The Lord of the Kingdom. He is the sole owner of all creation and, with absolute authority, can act in any manner, at any time, and in any way.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 85,
    arabic: 'ذُوالْجَلاَلِ وَالإكْرَامِ',
    english: 'Dhul-jalaali wal-ikraam',
    meaning: 'Lord of Glory and Honour, Lord of Majesty and Generosity',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning:  The One who is glorious and majestic. He is the possessor of all glory and honor. He is The One who deserves to be Exalted and not denied.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 86,
    arabic: 'الْمُقْسِطُ',
    english: 'Al-muqsit',
    meaning: 'The Just One',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: The One who is most fair and just. He recognizes and provides rewards beyond measure for any good, however small. He is The One who leads mankind to justice and harmony.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 87,
    arabic: 'الْجَامِعُ',
    english: 'Al-jaami',
    meaning: 'The Gatherer, the Uniter',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: He is The One who has the power to assemble and arrange all that which has been dispersed. He is the one who composes and connects things together.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 88,
    arabic: 'ٱلْغَنيُّ',
    english: 'Al-ghaniyy',
    meaning: 'The Self-Sufficient, The Wealthy',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: He is The One who is self-sufficient and independent. He does not need anything as He is completely satisfied and free from dependence. Allah is The One whose wealth and riches all others depend on.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 89,
    arabic: 'ٱلْمُغْنِيُّ',
    english: 'Al-mughni',
    meaning: 'The Enricher',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: He is The One who gives abundantly and provides all that is needed. He enriches all of creation so that they may be satisfied and content.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 90,
    arabic: 'اَلْمَانِعُ',
    english: 'Al-mani',
    meaning: 'The Withholder',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: There is no one to give what he is withheld or to prevent what He gives. He protects people from harmful situations and prevents undesirable actions. All is done according to His infinite wisdom and mercy.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 91,
    arabic: 'الضَّارَ',
    english: 'Ad-dharr',
    meaning: 'The Distresser',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: The One who harms or benefits whoever He wills. He is the one whose wisdom may choose to use forceful corrections to discourage wrongful behavior.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 92,
    arabic: 'النَّافِعُ',
    english: 'An-nafi',
    meaning: 'The Propitious, the Benefactor',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: The Propitious, the one who grants success. He creates favorable outcomes. Everything that benefits creation is created by Him. The greatest gifts given to mankind is their intellect, consciousness, and faith.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 93,
    arabic: 'النُّورُ',
    english: 'An-nur',
    meaning: 'The Light, The Illuminator',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: The One who illuminates and reveals the divine light of all the worlds. His light illuminates the heart and provides clarity and guidance. Anyone who turns their back to the true light will be in darkness.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 94,
    arabic: 'الْهَادِي',
    english: 'Al-haadi',
    meaning: 'The Guide',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: The One who gives guidance to His believers. His Guidance is beneficial and protects them from whatever may be harmful. He is The One who sent prophets (may peace be upon them) as the deliverers of His message to ensure mankind is guided on the right path.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 95,
    arabic: 'الْبَدِيعُ',
    english: 'Al-badee',
    meaning: 'The Incomparable Originator',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: The One who created and formed the universe without any mold or preceding example. With His will, He invents all that exists without any prior material. His creation is made without any similarity to anything else that has ever existed.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 96,
    arabic: 'اَلْبَاقِي',
    english: 'Al-baaqi',
    meaning: 'The Everlasting',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: The one who has always existed and who will never cease to be. He is the one whose existence doesn’t have a beginning nor an end. The virtue of this name signifies Allah as being perpetual, endless, and everlasting. He will remain forever and unaffected by time.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 97,
    arabic: 'الْوَارِثُ',
    english: 'Al-waarith',
    meaning: 'The Inheritor, The Heir',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: The One who remains after all has past. He is everlasting, and to whom all possessions will be returned.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 98,
    arabic: 'الرَّشِيدُ',
    english: 'AR-RASHEED	Ar-rasheed',
    meaning: 'The Guide, Infallible Teacher',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: The one who guides to rectitude. Allah is the supreme director to the right path and belief. He does not compel people into religion. He has shown the right way through The Quran and His messengers.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
  {
    id: 99,
    arabic: 'الصَّبُورُ',
    english: 'As-saboor',
    meaning: 'The Forbearing, The Patient',
    allahNamesDescription: [
      {
        meaningDescription:
          'Meaning: The One who is most patient and enduring. He is not hasty in His actions but waits for the proper time. He has all the power to punish those who do wrong, but instead, He allows time for us to repent and change course to comeback to the right path.',
        // occurrence: '0 times.',
        // evidance: 'N/A',
      },
    ],
  },
];
