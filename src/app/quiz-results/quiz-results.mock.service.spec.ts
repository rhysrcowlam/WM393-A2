import { TestBed } from '@angular/core/testing';

import { MockQuizResultsService } from './quiz-results.mock.service';

describe('MockQuizResultsService', () => {
  let service: MockQuizResultsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockQuizResultsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});