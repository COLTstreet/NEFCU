import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuredLendingComponent } from './secured-lending.component';

describe('SecuredLendingComponent', () => {
  let component: SecuredLendingComponent;
  let fixture: ComponentFixture<SecuredLendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecuredLendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecuredLendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
