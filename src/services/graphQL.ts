import {gql} from '@apollo/client';

export const SIGN_UP = gql`
  mutation SignUp($username: String!, $email: String!, $password: String!) {
    createUser(
      createUserInput: {username: $username, email: $email, password: $password}
    ) {
      success
      statusCode
      message
      data {
        token
        user {
          id
          username
          email
        }
      }
    }
  }
`;
export const SIGN_IN = gql`
  mutation LoginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      success
      message
      statusCode
      data {
        token
        user {
          id
          username
          email
        }
      }
    }
  }
`;

// needs fixing from backend
export const CHANGE_PASSWORD = gql`
  mutation changePassword($currentPassword: String!, $newPassword: String!) {
    changePassword(currentPassword: $currentPassword, newPassword: $newPassword)
  }
`;

export const SEND_EMAIL_OTP = gql`
  mutation ForgotPassword($email: String!) {
    forgotPassword(forgotPasswordInput: {email: $email}) {
      success
      statusCode
      message
    }
  }
`;

export const VERIFY_OTP = gql`
  mutation VerifyOtp($otp: String!) {
    verifyOtp(otpInput: {otp: $otp}) {
      success
      statusCode
      message
    }
  }
`;

export const RESET_PASSWORD = gql`
  mutation ResetPassword($otp: String!, $newPassword: String!) {
    resetPassword(ResetPasswordInput: {otp: $otp, newPassword: $newPassword}) {
      success
      statusCode
      message
    }
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

// needs fixing from backend
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

// needs fixing from backend
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

// needs fixing from backend
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

// needs fixing from backend
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
  mutation CreateVault($password: String!, $userId: String!) {
    createVault(createVaultInput: {password: $password, userId: $userId}) {
      success
      statusCode
      message
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
export const LOGIN_VAULT = gql`
  mutation logVault($password: String!, $userId: String!) {
    loginVault(vaultLoginInput: {password: $password, userId: $userId}) {
      message
      success
    }
  }
`;
