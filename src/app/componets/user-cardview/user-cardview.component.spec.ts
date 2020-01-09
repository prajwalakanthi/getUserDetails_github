import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCardviewComponent } from './user-cardview.component';

describe('UserCardviewComponent', () => {
  let component: UserCardviewComponent;
  let fixture: ComponentFixture<UserCardviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCardviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCardviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
