import {MutationFunction, useMutation} from '@apollo/client';
import {ResetPassData} from '../screens/authentication/NewPassword';

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
    const {data} = await forgotPasswordMutation({
      variables: {
        email: email,
        newPassword: 'Test@123',
        otp: '0383302',
      },
    });
    return data;
  } catch (error) {
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
