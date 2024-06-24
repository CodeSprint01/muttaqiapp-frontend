// import Web3 from 'web3';

// const provider = new Web3.providers.HttpProvider('HTTP://127.0.0.1:7545');
// const web3Provider = new Web3(provider);

// const vaultABI = require('./Vault.json');
// const valutAddress = '0x767a0a3e195e7FaAD2D180C6D0C38c910860F011';

// const vaultInstance = new web3Provider.eth.Contract(vaultABI, valutAddress);

// export const dummyConfidentialAddress =
//   '0x13e2B319d499Ce173D8FEe8BC523016b9DA57c05';

// export default {web3Provider, vaultInstance};

import {ethers} from 'ethers';

const provider = new ethers.providers.JsonRpcProvider('http://127.0.0.1:7545');
