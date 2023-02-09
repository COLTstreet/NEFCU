import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NightDropComponent } from './night-drop.component';

describe('NightDropComponent', () => {
  let component: NightDropComponent;
  let fixture: ComponentFixture<NightDropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NightDropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NightDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
