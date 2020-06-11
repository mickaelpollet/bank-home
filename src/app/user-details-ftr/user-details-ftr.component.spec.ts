import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsFtrComponent } from './user-details-ftr.component';

describe('UserDetailsFtrComponent', () => {
  let component: UserDetailsFtrComponent;
  let fixture: ComponentFixture<UserDetailsFtrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailsFtrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsFtrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
