import { TestBed } from '@angular/core/testing';

import { MockQuizService } from './quiz.mock.service';

describe('MockQuizService', () => {
  let service: MockQuizService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockQuizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
