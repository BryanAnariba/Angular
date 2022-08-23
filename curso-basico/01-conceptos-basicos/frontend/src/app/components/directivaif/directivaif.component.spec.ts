import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivaifComponent } from './directivaif.component';

describe('DirectivaifComponent', () => {
  let component: DirectivaifComponent;
  let fixture: ComponentFixture<DirectivaifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivaifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivaifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
