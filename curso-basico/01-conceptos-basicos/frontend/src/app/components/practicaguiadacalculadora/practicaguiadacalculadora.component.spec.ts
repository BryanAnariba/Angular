import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticaguiadacalculadoraComponent } from './practicaguiadacalculadora.component';

describe('PracticaguiadacalculadoraComponent', () => {
  let component: PracticaguiadacalculadoraComponent;
  let fixture: ComponentFixture<PracticaguiadacalculadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticaguiadacalculadoraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticaguiadacalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
