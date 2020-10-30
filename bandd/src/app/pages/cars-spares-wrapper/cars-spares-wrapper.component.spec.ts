import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsSparesWrapperComponent } from './cars-spares-wrapper.component';

describe('CarsSparesWrapperComponent', () => {
  let component: CarsSparesWrapperComponent;
  let fixture: ComponentFixture<CarsSparesWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarsSparesWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsSparesWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
