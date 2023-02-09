import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EligibilityRequireComponent } from './eligibility-require.component';

describe('EligibilityRequireComponent', () => {
  let component: EligibilityRequireComponent;
  let fixture: ComponentFixture<EligibilityRequireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EligibilityRequireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EligibilityRequireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
