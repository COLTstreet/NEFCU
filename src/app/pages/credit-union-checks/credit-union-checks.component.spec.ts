import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditUnionChecksComponent } from './credit-union-checks.component';

describe('CreditUnionChecksComponent', () => {
  let component: CreditUnionChecksComponent;
  let fixture: ComponentFixture<CreditUnionChecksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditUnionChecksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditUnionChecksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
