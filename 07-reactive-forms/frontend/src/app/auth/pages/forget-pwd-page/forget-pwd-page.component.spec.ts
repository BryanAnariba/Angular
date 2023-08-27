import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetPwdPageComponent } from './forget-pwd-page.component';

describe('ForgetPwdPageComponent', () => {
  let component: ForgetPwdPageComponent;
  let fixture: ComponentFixture<ForgetPwdPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForgetPwdPageComponent]
    });
    fixture = TestBed.createComponent(ForgetPwdPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
