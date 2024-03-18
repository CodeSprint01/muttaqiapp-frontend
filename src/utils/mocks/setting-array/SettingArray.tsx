import {settingEnum, settingScreen} from '../../../types/keyVlaue';
import {Icons} from '../../helper/svg';

export const settingArray: settingScreen[] = [
  {
    image: Icons.EmptyBookmark,
    name: 'Bookmarks',
    type: settingEnum.BOOKMARKS,
  },
  {
    image: Icons.EmptyHeart,
    name: 'Favorities',
    type: settingEnum.FAVORITIES,
  },
  {
    image: Icons.ZakatCal,
    name: 'Zakat calculation',
    type: settingEnum.ZAKAT_CALCULATION,
  },
  {
    image: Icons.InheritanceCal,
    name: 'Inheritance calculation',
    type: settingEnum.INHERITANCE_CALCULATION,
  },
  {
    image: Icons.PasswordSecurity,
    name: 'Password & security',
    type: settingEnum.PASSWORD_SECURITY,
  },
  {
    image: Icons.Vault,
    name: 'Vault',
    type: settingEnum.VAULT,
  },
  {
    image: Icons.PersonalFinancialInfo,
    name: 'Personal/financial info',
    type: settingEnum.PERSONAL_FINANCIAL_INFO,
  },
  {
    image: Icons.EmptyNotification,
    name: 'Notification settings',
    type: settingEnum.NOTIFICATION_SETTINGS,
  },
  {
    image: Icons.Language,
    name: 'Language',
    type: settingEnum.LANGUAGE,
  },
  {
    image: Icons.Faq,
    name: 'Frequently asked questions',
    type: settingEnum.FREQUENTLY_ASKED_QUESTION,
  },
  {
    image: Icons.HelpSupport,
    name: 'Help & support',
    type: settingEnum.HELP_SUPPORT,
  },
  {
    image: Icons.TermsConditions,
    name: 'Terms & conditions',
    type: settingEnum.TERMS_CONDITION,
  },
  {
    image: Icons.PrivacyPolicy,
    name: 'Privacy policy',
    type: settingEnum.PRIVACY_POLICY,
  },
  {
    image: Icons.AboutMuttaqi,
    name: 'About Muttaqi',
    type: settingEnum.ABOUT_MUTTAQI,
  },
  {
    image: Icons.LogOut,
    name: 'Log out',
    type: settingEnum.LOG_OUT,
  },
];
