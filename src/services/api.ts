import {MutationFunction, useMutation} from '@apollo/client';
import {useSelector} from 'react-redux';
import {State} from '../types/types';
import {Alert} from 'react-native';

// get user token
// get user schema and set
export const schhemaMutation = (schema: any) => {
  return useMutation(schema);
};
export const handleSignUp = async (
  signUpMutation: MutationFunction,
  userData: any,
) => {
  console.log(userData, 'api call');

  try {
    const {data} = await signUpMutation({
      variables: {
        username: userData?.name,
        emailaddress: userData?.email,
        password: userData?.password,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
};
export const handleLogin = async (
  signInMutation: MutationFunction,
  userData: any,
) => {
  console.log(userData, 'AApi call');

  try {
    const {data} = await signInMutation({
      variables: {
        email: userData?.userOrEmail,
        password: userData?.password,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export const changePassword = async (
  changePasswordMutation: MutationFunction,
  userData: any,
  token: string,
) => {
  console.log(userData, token, 'AApi call');
  try {
    const {data} = await changePasswordMutation({
      variables: {
        currentPassword: userData?.currentPass,
        newPassword: userData?.newPass,
      },
      context: {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
};
