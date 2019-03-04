import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MyFirstContractComponent} from './my-first-contract.component';

export * from './my-first-contract.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    MyFirstContractComponent,
  ],
})
export class MyFirstContractModule { }
