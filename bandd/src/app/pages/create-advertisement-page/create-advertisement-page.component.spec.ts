import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAdvertisementPageComponent } from './create-advertisement-page.component';

describe('CreateAdvertisementPageComponent', () => {
  let component: CreateAdvertisementPageComponent;
  let fixture: ComponentFixture<CreateAdvertisementPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAdvertisementPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAdvertisementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
