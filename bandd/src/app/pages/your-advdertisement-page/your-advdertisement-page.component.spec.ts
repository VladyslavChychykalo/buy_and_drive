import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourAdvdertisementPageComponent } from './your-advdertisement-page.component';

describe('YourAdvdertisementPageComponent', () => {
  let component: YourAdvdertisementPageComponent;
  let fixture: ComponentFixture<YourAdvdertisementPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourAdvdertisementPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YourAdvdertisementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
