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
    key: 'userEmail',
    inputLabel: 'Email',
    placeholder: 'Enter your email',
  },
  {
    key: 'userPassword',
    inputLabel: 'Password',
    placeholder: 'Enter password',
  },
];

// export const HelpSupport: InputSignUp[] = [
//   {
//     key: 'name',
//     inputLabel: 'Name',
//     placeholder: 'Enter your name',
//     isRequired: true,
//   },
//   {
//     key: 'email',
//     inputLabel: 'E-mail',
//     placeholder: 'Enter your Email',
//     isRequired: true,
//   },
//   {
//     key: 'message',
//     inputLabel: 'Message',
//     placeholder: 'Enter  your message',
//     isRequired: true,
//   },
// ];
