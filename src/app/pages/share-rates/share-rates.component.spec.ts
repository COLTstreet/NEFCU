import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareRatesComponent } from './share-rates.component';

describe('ShareRatesComponent', () => {
  let component: ShareRatesComponent;
  let fixture: ComponentFixture<ShareRatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareRatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
