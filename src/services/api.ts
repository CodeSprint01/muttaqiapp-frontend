import {MutationFunction, useMutation} from '@apollo/client';
import {ResetPassData} from '../screens/authentication/NewPassword';
import {BankAccount, CardInfo, NotesInfo} from '../types/types';
import {generateRendomNumber} from '../utils/helper/helpers';

export const schemaMutation = (schema: any) => {
  return useMutation(schema);
};
export const handleSignUp = async (signUpMutation: MutationFunction,userData: any) => {
  console.log(userData);

  try {
    const {data} = await signUpMutation({
      variables: {
        username: userData?.name,
        email: userData?.email,
        password: userData?.password,
      },
    });
    console.log (data, 'cosnole of response of data')
    return data;
  } catch (error) {
    throw error;
  }
};
export const handleLogin = async (
  signInMutation: MutationFunction,
  userData: {userEmail: string; userPassword: string },
) => {
  try {
    const {data} = await signInMutation({
      variables: {
        email: userData?.userEmail,
        password: userData?.userPassword,
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
export const handleCreateCreditCard = async (
  creditCard: MutationFunction,
  userData: CardInfo,
  // vaultId: string,
) => {
  console.log(userData, 'user data');

  try {
    const data = await creditCard({
      variables: {
        cardNumber: userData?.number,
        nameOnCard: userData?.name,
        expiryDate: userData?.expiry,
        cvc: userData?.cvv,
        vualtId: 'b6b84458-c08a-47c8-b694-08a4b4d70400',
        // vualtId: vaultId,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
};
export const handleCreateBankAccount = async (
  createBankAccount: MutationFunction,
  // bData: BankAccount,
  bData: any,
) => {
  console.log(bData, 'from api cretae');
  try {
    const data = await createBankAccount({
      variables: {
        bankName: bData?.name,
        accountNumber: bData?.number,
        vualtId: 'e5dd217d-9336-4ca6-afb2-4f1eca5cfac3',
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
};
export const handleUpdateBankAccount = async (
  updateBankAccount: MutationFunction,
  bankAccount: any,
  vualtId: string,
  accountId: string,
) => {
  console.log(bankAccount, vualtId, accountId, 'from api ');
  try {
    const data = await updateBankAccount({
      variables: {
        bankName: bankAccount?.name,
        accountNumber: bankAccount?.number,
        vualtId: vualtId,
        id: accountId,
      },
    });
    console.log(data, 'updated data ');
    return data;
  } catch (error) {
    throw error;
  }
};
export const handleDeleteBankAccount = async (
  deleteBank: MutationFunction,
  id: string,
) => {
  console.log(id, 'for delete');
  try {
    const data = await deleteBank({
      variables: {
        id: id,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
};
export const handleLoginVault = async (
  logVault: MutationFunction,
  userId: string,
  password: string,
) => {
  console.log(userId, password, 'rom api');
  try {
    const data = await logVault({
      variables: {
        password: password,
        userId: userId,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
};
