import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChristmasClubComponent } from './christmas-club.component';

describe('ChristmasClubComponent', () => {
  let component: ChristmasClubComponent;
  let fixture: ComponentFixture<ChristmasClubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChristmasClubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChristmasClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
