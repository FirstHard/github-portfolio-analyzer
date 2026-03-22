import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyzeResult } from './analyze-result';

describe('AnalyzeResult', () => {
  let component: AnalyzeResult;
  let fixture: ComponentFixture<AnalyzeResult>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalyzeResult],
    }).compileComponents();

    fixture = TestBed.createComponent(AnalyzeResult);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
