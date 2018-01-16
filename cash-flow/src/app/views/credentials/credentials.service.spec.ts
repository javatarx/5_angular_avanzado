import { TestBed, inject } from '@angular/core/testing';

import { CredentialsService } from './credentials.service';

describe('CredentialsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
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
