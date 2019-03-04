import SimpleStorage from 'Embark/contracts/SimpleStorage';
import MyFirstContract from 'Embark/contracts/MyFirstContract';

import {myFirstContractToken, SIMPLE_STORAGE} from './contracts.tokens';

export const CONTRACTS_PROVIDERS = [
  {
    provide: SIMPLE_STORAGE,
    useValue: SimpleStorage,
  },
  {
    provide: myFirstContractToken,
    useValue: MyFirstContract,
  },
];
