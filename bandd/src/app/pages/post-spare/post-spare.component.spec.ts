import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSpareComponent } from './post-spare.component';

describe('PostSpareComponent', () => {
  let component: PostSpareComponent;
  let fixture: ComponentFixture<PostSpareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostSpareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostSpareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
