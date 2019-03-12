import {Component, Inject} from '@angular/core';

import {myFirstContractToken} from '../contracts.tokens';
import {from, Observable} from 'rxjs';

@Component({
  selector: 'app-my-first-contract',
  templateUrl: './my-first-contract.component.html',
})
export class MyFirstContractComponent {

  value: Observable<string>;
  whoAmI: Observable<string>;

  constructor(
    @Inject(myFirstContractToken) readonly myFirstContract: EmbarkContracts.MyFirstContract,
    // private accountService: AccountService
  ) { }

  getValue(): void {
    this.value = from(this.myFirstContract.methods.get().call());
  }

  getWhoAmI(): void {
    web3.eth.getAccounts().then(accounts => {
      this.whoAmI = from(this.myFirstContract.methods.whoAmI().call({from: accounts[0]}));
    });
    // this.accountService.getAccount().pipe(take(1)).subscribe(account => {
    //   this.whoAmI = from(this.myFirstContract.methods.whoAmI().call({from: account}));
    // });
  }

}
