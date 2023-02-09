import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareDraftCheckingComponent } from './share-draft-checking.component';

describe('ShareDraftCheckingComponent', () => {
  let component: ShareDraftCheckingComponent;
  let fixture: ComponentFixture<ShareDraftCheckingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareDraftCheckingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareDraftCheckingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
