import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePostCarPageComponent } from './create-post-car-page.component';

describe('CreatePostCarPageComponent', () => {
  let component: CreatePostCarPageComponent;
  let fixture: ComponentFixture<CreatePostCarPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePostCarPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePostCarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
