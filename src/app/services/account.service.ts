import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject, Observable, Subject, timer} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountService implements OnDestroy {

  private account = new BehaviorSubject<string>(null);
  private destroyed = new Subject<void>();

  constructor() {
    timer(0, 100).pipe(
      takeUntil(this.destroyed)
    ).subscribe(() => {
      web3.eth.getAccounts().then(accounts => {
        if (accounts[0] !== this.account.getValue()) {
          this.account.next(accounts[0]);
        }
      });
    });
  }

  getAccount(): Observable<string> {
    return this.account;
  }

  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }


}
