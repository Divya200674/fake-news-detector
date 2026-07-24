import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlDetection } from './url-detection';

describe('UrlDetection', () => {
  let component: UrlDetection;
  let fixture: ComponentFixture<UrlDetection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UrlDetection],
    }).compileComponents();

    fixture = TestBed.createComponent(UrlDetection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
