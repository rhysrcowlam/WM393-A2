import { TestBed } from '@angular/core/testing';

import { MockLoginService } from './login.mock.service';

describe('MockLoginService', () => {
  let service: MockLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
