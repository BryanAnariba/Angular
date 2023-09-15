import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkedScreenPageComponent } from './marked-screen-page.component';

describe('MarkedScreenPageComponent', () => {
  let component: MarkedScreenPageComponent;
  let fixture: ComponentFixture<MarkedScreenPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarkedScreenPageComponent]
    });
    fixture = TestBed.createComponent(MarkedScreenPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
