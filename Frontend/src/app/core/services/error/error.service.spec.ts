/* tslint:disable:no-unused-variable */

import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { ErrorService } from './error.service';

describe('Service: Error', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ErrorService]
    });
  });

  it('should ...', inject([ErrorService], (service: ErrorService) => {
    expect(service).toBeTruthy();
  }));
});
