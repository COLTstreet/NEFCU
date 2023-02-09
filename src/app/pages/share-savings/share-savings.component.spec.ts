import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareSavingsComponent } from './share-savings.component';

describe('ShareSavingsComponent', () => {
  let component: ShareSavingsComponent;
  let fixture: ComponentFixture<ShareSavingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareSavingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareSavingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
