import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextDetection } from './text-detection';

describe('TextDetection', () => {
  let component: TextDetection;
  let fixture: ComponentFixture<TextDetection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextDetection],
    }).compileComponents();

    fixture = TestBed.createComponent(TextDetection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
