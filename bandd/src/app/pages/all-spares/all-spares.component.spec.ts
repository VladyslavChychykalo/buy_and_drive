import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSparesComponent } from './all-spares.component';

describe('AllSparesComponent', () => {
  let component: AllSparesComponent;
  let fixture: ComponentFixture<AllSparesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllSparesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSparesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
