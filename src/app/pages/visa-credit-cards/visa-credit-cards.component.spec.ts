import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisaCreditCardsComponent } from './visa-credit-cards.component';

describe('VisaCreditCardsComponent', () => {
  let component: VisaCreditCardsComponent;
  let fixture: ComponentFixture<VisaCreditCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisaCreditCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisaCreditCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
