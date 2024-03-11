import {MutationFunction, useMutation} from '@apollo/client';

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
