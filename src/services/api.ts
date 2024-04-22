import {MutationFunction, useMutation, useQuery} from '@apollo/client';
import {ResetPassData} from '../screens/authentication/NewPassword';
import {NotesInfo} from '../types/types';
import {generateRendomNumber} from '../utils/helper/helpers';

export const schemaMutation = (schema: any) => {
  return useMutation(schema);
};
export const schemaQuery = (schema: any) => {
  const {loading, error, data} = useQuery(schema);
  return {loading, data, error};
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
  // console.log(userData, id, 'userdata create note');
  try {
    const data = await createSecureNoteMutation({
      variables: {
        title: userData?.title,
        content: userData?.details,
        vualtId: id,
      },
    });
    // console.log(data, 'after create note');
    return data;
  } catch (error) {
    // console.log(error, 'error create note Api');
    return error;
  }
};
export const handleGetAllSeecureNotes = async (
  getAllSecureNotesMutation: any,
) => {
  console.log('request');
  try {
    const data = await getAllSecureNotesMutation({});
    console.log(data, 'form inside api');
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
