import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracteristicasempleadoComponent } from './caracteristicasempleado.component';

describe('CaracteristicasempleadoComponent', () => {
  let component: CaracteristicasempleadoComponent;
  let fixture: ComponentFixture<CaracteristicasempleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaracteristicasempleadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaracteristicasempleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
