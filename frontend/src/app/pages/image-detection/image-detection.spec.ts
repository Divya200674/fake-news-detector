import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageDetection } from './image-detection';

describe('ImageDetection', () => {
  let component: ImageDetection;
  let fixture: ComponentFixture<ImageDetection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageDetection],
    }).compileComponents();

    fixture = TestBed.createComponent(ImageDetection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
