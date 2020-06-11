import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafeDetailsFtrComponent } from './safe-details-ftr.component';

describe('SafeDetailsFtrComponent', () => {
  let component: SafeDetailsFtrComponent;
  let fixture: ComponentFixture<SafeDetailsFtrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafeDetailsFtrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafeDetailsFtrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
