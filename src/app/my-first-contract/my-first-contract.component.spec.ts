import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { myFirstContractToken } from '../contracts.tokens';
import {MyFirstContractComponent} from './my-first-contract.component';

describe('BlockchainComponent', () => {
  let component: MyFirstContractComponent;
  let fixture: ComponentFixture<MyFirstContractComponent>;
  const myFirstContract = {};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFirstContractComponent ],
      providers: [
        {
          provide: myFirstContractToken,
          useValue: myFirstContract,
        },
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFirstContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
