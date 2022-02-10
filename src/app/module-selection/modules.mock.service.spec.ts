import { TestBed } from '@angular/core/testing';

import { MockModuleService } from './modules.mock.service';

describe('MockModuleService', () => {
  let service: MockModuleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockModuleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
