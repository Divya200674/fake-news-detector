import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioDetection } from './audio-detection';

describe('AudioDetection', () => {
  let component: AudioDetection;
  let fixture: ComponentFixture<AudioDetection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AudioDetection],
    }).compileComponents();

    fixture = TestBed.createComponent(AudioDetection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
