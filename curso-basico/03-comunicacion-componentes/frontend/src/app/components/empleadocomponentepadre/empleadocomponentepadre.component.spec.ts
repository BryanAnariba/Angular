import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadocomponentepadreComponent } from './empleadocomponentepadre.component';

describe('EmpleadocomponentepadreComponent', () => {
  let component: EmpleadocomponentepadreComponent;
  let fixture: ComponentFixture<EmpleadocomponentepadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleadocomponentepadreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadocomponentepadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
