import {gql} from '@apollo/client';
export const SIGN_UP = gql`
  mutation SignUp($username: String!, $email: String!, $password: String!) {
    createUser(
      createUserInput: {username: $username, email: $email, password: $password}
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
export const CREATE_BANK_ACCOUNT = gql`
  mutation bankAccount(
    $bankName: String!
    $accountNumber: String!
    $vualtId: String!
  ) {
    createBankAccount(
      createBankAccountInput: {
        bankName: $bankName
        accountNumber: $accountNumber
        vualtId: $vualtId
      }
    ) {
      id
      bankName
      accountNumber
    }
  }
`;
export const GET_BANK_ACCOUNTS_DETAILS = gql`
  query FindAllBankAccount {
    findAllBankAccount {
      id
      bankName
      accountNumber
      createdAt
      updatedAt
    }
  }
`;
export const FIND_BANK_ACCOUNT = gql`
  query OneBankAccount($id: String!) {
    findOneBankAccount(id: $id) {
      bankName
      accountNumber
      createdAt
      updatedAt
      id
    }
  }
`;
export const UPDATE_BANK_ACCOUNT = gql`
  mutation bankAccount(
    $bankName: String
    $accountNumber: String
    $vualtId: String!
    $id: String!
  ) {
    updateBankAccount(
      updateBankAccountInput: {
        bankName: $bankName
        accountNumber: $accountNumber
        vualtId: $vualtId
        id: $id
      }
    ) {
      id
      bankName
    }
  }
`;
export const DELETE_BANK_ACCOUNT = gql`
  mutation deleteBank($id: String!) {
    RemoveBankAccount(removeBankAccount: {id: $id}) {
      id
      bankName
      accountNumber
      createdAt
    }
  }
`;
export const CREATE_VALUT = gql`
  mutation vault($password: String!, $userId: String!) {
    createVault(createVaultInput: {password: $password, userId: $userId}) {
      id
    }
  }
`;
export const CREATE_CREDIT_CARD = gql`
  mutation creditCard(
    $cardNumber: String!
    $nameOnCard: String!
    $expiryDate: String!
    $cvc: String!
    $vualtId: String!
  ) {
    createCreditCard(
      createCreditCardInput: {
        cardNumber: $cardNumber
        nameOnCard: $nameOnCard
        expiryDate: $expiryDate
        cvc: $cvc
        vualtId: $vualtId
      }
    ) {
      id
    }
  }
`;
export const FIND_USER_VAULT = gql`
  query VerifyUserVault($userId: String!) {
    verifyUserVault(userId: $userId) {
      message
      success
    }
  }
`;
