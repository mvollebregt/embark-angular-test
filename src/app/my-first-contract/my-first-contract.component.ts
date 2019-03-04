import { Component, Inject } from '@angular/core';

import {myFirstContractToken, SIMPLE_STORAGE} from '../contracts.tokens';
import {from, Observable} from 'rxjs';

@Component({
  selector: 'app-my-first-contract',
  templateUrl: './my-first-contract.component.html',
})
export class MyFirstContractComponent {

  value: Observable<string>;

  constructor(
    @Inject(myFirstContractToken) readonly myFirstContract: EmbarkContracts.MyFirstContract,
  ) { }

  getValue(): void {
    this.value = from(this.myFirstContract.methods.get().call());
  }

}
