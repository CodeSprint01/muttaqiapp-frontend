import {MutationFunction, gql, useMutation} from '@apollo/client';

// user authtication CURD operations
const SIGN_UP = gql`
  mutation SignUp(
    $username: String!
    $emailaddress: String!
    $password: String!
  ) {
    createUser(
      createUserInput: {
        username: $username
        emailaddress: $emailaddress
        password: $password
      }
    ) {
      user {
        id
        emailaddress
        username
      }
      token
    }
  }
`;
export const useSignUpMutation = () => {
  return useMutation(SIGN_UP);
};

export const handleSignUp = async (
  signUpMutation: MutationFunction,
  userData: any,
) => {
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
