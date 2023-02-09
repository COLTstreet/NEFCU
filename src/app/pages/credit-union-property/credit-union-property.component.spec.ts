import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditUnionPropertyComponent } from './credit-union-property.component';

describe('CreditUnionPropertyComponent', () => {
  let component: CreditUnionPropertyComponent;
  let fixture: ComponentFixture<CreditUnionPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditUnionPropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditUnionPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
