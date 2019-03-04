import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlockchainComponent, BlockchainModule } from './blockchain/blockchain.module';
import { EnsComponent, EnsModule } from './ens/ens.module';
import { StorageComponent, StorageModule } from './storage/storage.module';
import { WhisperComponent, WhisperModule } from './whisper/whisper.module';
import { NotFoundComponent, NotFoundModule } from './not-found/not-found.module';
import {MyFirstContractComponent} from './my-first-contract/my-first-contract.component';
import {MyFirstContractModule} from './my-first-contract/my-first-contract.module';

const routes: Routes = [
  { path: 'my-first-contract', component: MyFirstContractComponent },
  { path: 'blockchain', component: BlockchainComponent },
  { path: 'storage', component: StorageComponent },
  { path: 'whisper', component: WhisperComponent },
  { path: 'ens', component: EnsComponent },
  { path: '',   redirectTo: '/my-first-contract', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
    MyFirstContractModule,
    BlockchainModule,
    EnsModule,
    NotFoundModule,
    StorageModule,
    WhisperModule,
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
