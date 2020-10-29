import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePostSpareComponent } from './create-post-spare.component';

describe('CreatePostSpareComponent', () => {
  let component: CreatePostSpareComponent;
  let fixture: ComponentFixture<CreatePostSpareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePostSpareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePostSpareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
