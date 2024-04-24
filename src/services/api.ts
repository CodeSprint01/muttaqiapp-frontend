import {MutationFunction, useMutation} from '@apollo/client';
import {ResetPassData} from '../screens/authentication/NewPassword';
import {BankAccount, NotesInfo} from '../types/types';
import {generateRendomNumber} from '../utils/helper/helpers';

export const schemaMutation = (schema: any) => {
  return useMutation(schema);
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
export const handleLogin = async (
  signInMutation: MutationFunction,
  userData: any,
) => {
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

export const handleSendOtpEmail = async (
  forgotPasswordMutation: MutationFunction,
  email: string,
) => {
  try {
    console.log(email, 'ee');
    const {data} = await forgotPasswordMutation({
      variables: {
        email: email,
      },
    });
    console.log(data, 'dd');

    return data;
  } catch (error) {
    console.log(error, 'ee');

    throw error;
  }
};

export const handleOtpVerify = async (
  otpVerifyMutation: MutationFunction,
  otp: string,
) => {
  try {
    const data = await otpVerifyMutation({
      variables: {otp: otp},
    });
    return data;
  } catch (error) {
    throw error;
  }
};
export const handleResetPassword = async (
  resetPasswordMutation: MutationFunction,
  userData: ResetPassData,
) => {
  try {
    const data = await resetPasswordMutation({
      variables: {otp: userData?.otp, newPassword: userData?.password},
    });
    return data;
  } catch (error) {
    throw error;
  }
};
export const handleCreateSeecureNotes = async (
  createSecureNoteMutation: MutationFunction,
  userData: NotesInfo,
) => {
  const id = generateRendomNumber();
  try {
    const data = await createSecureNoteMutation({
      variables: {
        title: userData?.title,
        content: userData?.details,
        vualtId: id,
      },
    });
    return data;
  } catch (error) {
    return error;
  }
};
// remove below code because we use it on its current screen
// export const handleGetAllSeecureNotes = async (
//   getAllSecureNotesMutation: MutationFunction,
// ) => {
//   console.log('request');
//   try {
//     const data = await getAllSecureNotesMutation({});
//     console.log(data, 'form inside api');
//     return data;
//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// };
export const handleCreateBankAccount = async (
  createBankAccount: MutationFunction,
  bData: BankAccount,
) => {
  const id = generateRendomNumber();
  try {
    const data = await createBankAccount({
      variables: {
        bankName: bData?.name,
        accountNumber: bData?.number,
        vualtId: id,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
};
export const handleCreateVault = async (
  createUserVault: MutationFunction,
  password: any,
  userid: string,
) => {
  console.log(password, userid, 'usman nn');
  try {
    const data = await createUserVault({
      variables: {
        password: password,
        userId: userid,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
};
