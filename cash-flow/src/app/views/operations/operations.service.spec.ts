import { TestBed, inject } from '@angular/core/testing';

import { OperationsService } from './operations.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('OperationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [OperationsService]
    });
  });

  it('should be created', inject([OperationsService], (service: OperationsService) => {
    expect(service).toBeTruthy();
  }));
});
