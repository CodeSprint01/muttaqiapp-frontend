import {VaultEnum, vaultScreen} from '../../../types/keyVlaue';
import {Icons} from '../../helper/svg';

export const vaultArray: vaultScreen[] = [
  {
    image: Icons.AllItems,
    name: 'All Items',
    type: VaultEnum.All_ITEMS,
  },
  {
    image: Icons.Lock,
    name: 'Logins',
    type: VaultEnum.LOGINS,
  },
  {
    image: Icons.SecureNotes,
    name: 'Secure notes',
    type: VaultEnum.SECURE_NOTES,
  },
  {
    image: Icons.CreditCards,
    name: 'Credit cards',
    type: VaultEnum.CREDIT_CARDS,
  },
  {
    image: Icons.Identities,
    name: 'Identities',
    type: VaultEnum.IDENTITIES,
  },
  {
    image: Icons.Passwords,
    name: 'Passwords',
    type: VaultEnum.PASSWORD,
  },
  {
    image: Icons.Documents,
    name: 'documents',
    type: VaultEnum.DOCUMENTS,
  },
  {
    image: Icons.Bank,
    name: 'Bank accounts',
    type: VaultEnum.BANK_ACCOUNTS,
  },
  {
    image: Icons.License,
    name: 'Driver licenses',
    type: VaultEnum.DRIVER_LICENSES,
  },
  {
    image: Icons.SocialSecurity,
    name: 'Social security numbers',
    type: VaultEnum.SOCIAL_SECURITY_NUMBER,
  },
  {
    image: Icons.archive,
    name: 'Archive',
    type: VaultEnum.ARCHIVE,
  },
];
