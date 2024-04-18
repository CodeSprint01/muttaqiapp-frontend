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
        email: $emailaddress
        password: $password
      }
    ) {
      user {
        id
        email
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
        email
        username
      }
      token
    }
  }
`;
export const CHANGE_PASSWORD = gql`
  mutation changePassword($currentPassword: String!, $newPassword: String!) {
    changePassword(currentPassword: $currentPassword, newPassword: $newPassword)
  }
`;

export const SEND_EMAIL_OTP = gql`
  mutation SendEmail($email: String!) {
    forgotPassword(forgotPasswordInput: {email: $email})
  }
`;
export const VERIFY_OTP = gql`
  mutation VerifyOtp($otp: String!) {
    verifyOtp(forgotPasswordInput: {otp: $otp})
  }
`;
export const RESET_PASSWORD = gql`
  mutation SetNewPassword($otp: String!, $newPassword: String!) {
    resetPassword(forgotPasswordInput: {otp: $otp, newPassword: $newPassword})
  }
`;
