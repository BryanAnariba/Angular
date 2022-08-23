import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticaguiadadosempleadosComponent } from './practicaguiadadosempleados.component';

describe('PracticaguiadadosempleadosComponent', () => {
  let component: PracticaguiadadosempleadosComponent;
  let fixture: ComponentFixture<PracticaguiadadosempleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticaguiadadosempleadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticaguiadadosempleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
