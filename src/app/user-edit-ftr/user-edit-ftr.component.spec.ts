import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEditFtrComponent } from './user-edit-ftr.component';

describe('UserEditFtrComponent', () => {
  let component: UserEditFtrComponent;
  let fixture: ComponentFixture<UserEditFtrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserEditFtrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEditFtrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
