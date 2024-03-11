import {MutationFunction, gql, useMutation} from '@apollo/client';
import {SIGN_IN, SIGN_UP} from './graphQL';
// user authtication CURD operations

export const useSignUpMutation = () => {
  return useMutation(SIGN_UP);
};
export const useSignInMutation = () => {
  return useMutation(SIGN_IN);
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
