// vaultService.ts
import {contractInstance} from './ethersSetup';

interface SecurityNumbersData {
  informationType: string;
  name: string;
  securityNumber: string;
  confidentialAddress: string;
}

interface PasswordData {
  informationType: string;
  confidentialAddress: string;
  name: string;
  password: string;
  passwordType: string;
}

export const addSecurityNumbers = async (data: SecurityNumbersData) => {
  try {
    const response = await contractInstance.setSecurityInfo(
      data.informationType,
      data.confidentialAddress,
      data.name,
      data.securityNumber,
    );
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getSecurityNumbers = async (confidentialAddress: string) => {
  try {
    const response = await contractInstance.getSecurityInfo(
      confidentialAddress,
    );
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const addPassword = async (data: PasswordData) => {
  try {
    const response = await contractInstance.setPassword(
      data.informationType,
      data.confidentialAddress,
      data.name,
      data.password,
      data.passwordType,
    );
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getAllUserPasswords = async (confidentialAddress: string) => {
  try {
    const response = await contractInstance.getPasswords(confidentialAddress);
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};
