import { TestBed } from '@angular/core/testing';

import { MockQuizSelectionService } from './quiz-selection.mock.service';

describe('MockQuizSelectionService', () => {
  let service: MockQuizSelectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockQuizSelectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
