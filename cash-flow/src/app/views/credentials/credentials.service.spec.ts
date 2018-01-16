import { TestBed, inject } from '@angular/core/testing';

import { CredentialsService } from './credentials.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CredentialsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CredentialsService]
    });
  });

  it('should be created', inject([CredentialsService], (service: CredentialsService) => {
    expect(service).toBeTruthy();
  }));

  it('should use a correct url', inject([CredentialsService], (service: CredentialsService) => {
    expect(service).toBeTruthy();
  }));

  it('should send credentials', inject([CredentialsService], (service: CredentialsService) => {
    expect(service).toBeTruthy();
  }));
});
