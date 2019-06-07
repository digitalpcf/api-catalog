import { TestBed } from '@angular/core/testing';

import { GetappdetailsService } from './getappdetails.service';

describe('GetappdetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetappdetailsService = TestBed.get(GetappdetailsService);
    expect(service).toBeTruthy();
  });
});
