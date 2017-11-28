import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginInlineComponent } from './login-inline.component';

describe('LoginInlineComponent', () => {
  let component: LoginInlineComponent;
  let fixture: ComponentFixture<LoginInlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginInlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
