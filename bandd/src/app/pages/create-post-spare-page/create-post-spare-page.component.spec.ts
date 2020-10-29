import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePostSparePageComponent } from './create-post-spare-page.component';

describe('CreatePostSparePageComponent', () => {
  let component: CreatePostSparePageComponent;
  let fixture: ComponentFixture<CreatePostSparePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePostSparePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePostSparePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
