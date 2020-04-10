import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMidifieComponent } from './user-midifie.component';

describe('UserMidifieComponent', () => {
  let component: UserMidifieComponent;
  let fixture: ComponentFixture<UserMidifieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMidifieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMidifieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
