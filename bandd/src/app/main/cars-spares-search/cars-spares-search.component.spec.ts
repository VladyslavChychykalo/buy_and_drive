import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsSparesSearchComponent } from './cars-spares-search.component';

describe('CarsSparesSearchComponent', () => {
  let component: CarsSparesSearchComponent;
  let fixture: ComponentFixture<CarsSparesSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarsSparesSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsSparesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
