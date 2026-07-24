import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoDetection } from './video-detection';

describe('VideoDetection', () => {
  let component: VideoDetection;
  let fixture: ComponentFixture<VideoDetection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoDetection],
    }).compileComponents();

    fixture = TestBed.createComponent(VideoDetection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
