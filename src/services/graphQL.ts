import {gql} from '@apollo/client';
// user authtication CARD operation
// user signUp schema
export const SIGN_UP = gql`
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
export const SIGN_IN = gql`
  mutation LoginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      user {
        id
        emailaddress
        username
      }
      token
    }
  }
`;
