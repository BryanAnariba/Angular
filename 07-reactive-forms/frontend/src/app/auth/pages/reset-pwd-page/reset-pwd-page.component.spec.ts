import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPwdPageComponent } from './reset-pwd-page.component';

describe('ResetPwdPageComponent', () => {
  let component: ResetPwdPageComponent;
  let fixture: ComponentFixture<ResetPwdPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResetPwdPageComponent]
    });
    fixture = TestBed.createComponent(ResetPwdPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
