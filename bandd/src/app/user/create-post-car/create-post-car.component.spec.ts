import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePostCarComponent } from './create-post-car.component';

describe('CreatePostCarComponent', () => {
  let component: CreatePostCarComponent;
  let fixture: ComponentFixture<CreatePostCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePostCarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePostCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
