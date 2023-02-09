import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationClubComponent } from './vacation-club.component';

describe('VacationClubComponent', () => {
  let component: VacationClubComponent;
  let fixture: ComponentFixture<VacationClubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacationClubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacationClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
