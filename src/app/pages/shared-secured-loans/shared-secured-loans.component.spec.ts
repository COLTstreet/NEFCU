import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedSecuredLoansComponent } from './shared-secured-loans.component';

describe('SharedSecuredLoansComponent', () => {
  let component: SharedSecuredLoansComponent;
  let fixture: ComponentFixture<SharedSecuredLoansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedSecuredLoansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedSecuredLoansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
