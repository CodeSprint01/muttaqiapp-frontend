import 'ethers/dist/shims.js';
import {ethers} from 'ethers';
import vaultAbi from './Vault.json';

const providerURL = 'HTTP://127.0.0.1:7545';
const privateKey =
  '0xab0d17e0fbb18606716fca803a4fd7eff8c93dfa18e4a8954df2c947a27d44aa';
const contractAddress = '0x767a0a3e195e7FaAD2D180C6D0C38c910860F011';

const provider = new ethers.providers.JsonRpcProvider(providerURL);
const signer = new ethers.Wallet(privateKey, provider);

const contractInstance = new ethers.Contract(contractAddress, vaultAbi, signer);

export {contractInstance};
