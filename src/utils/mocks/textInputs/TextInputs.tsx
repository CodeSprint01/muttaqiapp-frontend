import {InputSignIn, InputSignUp} from '../../../types/types';

export const SignUpArray: InputSignUp[] = [
  {
    key: 'name',
    inputLabel: 'Username',
    isRequired: true,
    placeholder: 'Enter your Username',
  },
  {
    key: 'email',
    inputLabel: 'Email Address',
    isRequired: true,
    placeholder: 'name@mail.com',
  },
  {
    key: 'password',
    inputLabel: 'Password',
    isRequired: true,
    placeholder: 'Enter your Username',
  },
  {
    key: 'confPassowrd',
    inputLabel: 'Re-enter password',
    isRequired: true,
    placeholder: 'Enter confirm password',
  },
];

export const SignInArray: InputSignIn[] = [
  {
    key: 'userOrEmail',
    inputLabel: 'Email',
    placeholder: 'Enter your username or e-mail address',
  },
  {
    key: 'password',
    inputLabel: 'Password',
    placeholder: 'Enter password',
  },
];
