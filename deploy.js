import { makeZoeService, makeSmartContract } from '@agoric/zoe';
import subscriptionContract from '../contracts/subscription';


async function deployContract() {
  const zcf = await makeZoeService();
  const contractInstance = await makeSmartContract(subscriptionContract, zcf);
  
  console.log('Contract deployed!');
  return contractInstance;
}

deployContract();
