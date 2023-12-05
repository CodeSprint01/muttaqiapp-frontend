import {settingEnum, settingScreen} from '../../types/keyVlaue';
import {Icons} from '../helper/svg';

export const settingArray: settingScreen[] = [
  {
    image: Icons.Profile,
    name: 'My Profile',
    type: settingEnum.PROFILE,
  },
  {
    image: Icons.Vault,
    name: 'Vault',
    type: settingEnum.VAULT,
  },
  {
    image: Icons.Notification,
    name: 'Notifications',
    type: settingEnum.NOTIFICATIONS,
  },
  {
    image: Icons.Languages,
    name: 'Languages',
    type: settingEnum.LANGUAGES,
  },
  {
    image: Icons.Faq,
    name: 'Frequently Asked Question',
    type: settingEnum.FAQ,
  },
  {
    image: Icons.Feedback,
    name: 'Feedback',
    type: settingEnum.FEEDBACK,
  },
  {
    image: Icons.Support,
    name: 'Support',
    type: settingEnum.SUPPORT,
  },
  {
    image: Icons.TermsConditions,
    name: 'Terms & Condition',
    type: settingEnum.TERMS_CONDITION,
  },
  {
    image: Icons.PrivacyPolicy,
    name: 'Privacy Policy',
    type: settingEnum.PRIVACY,
  },
  {
    image: Icons.AboutMuttaqi,
    name: 'About Muttaqi',
    type: settingEnum.ABOUT,
  },
];
