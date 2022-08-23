import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadocomponentehijoComponent } from './empleadocomponentehijo.component';

describe('EmpleadocomponentehijoComponent', () => {
  let component: EmpleadocomponentehijoComponent;
  let fixture: ComponentFixture<EmpleadocomponentehijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleadocomponentehijoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadocomponentehijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
