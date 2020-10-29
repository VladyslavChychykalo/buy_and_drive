import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterSparesComponent } from './filter-spares.component';

describe('FilterSparesComponent', () => {
  let component: FilterSparesComponent;
  let fixture: ComponentFixture<FilterSparesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterSparesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterSparesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
