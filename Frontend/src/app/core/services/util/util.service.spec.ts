/* tslint:disable:no-unused-variable */

import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { UtilService } from './util.service';

describe('Service: Util', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UtilService]
    });
  });

  it('should ...', inject([UtilService], (service: UtilService) => {
    expect(service).toBeTruthy();
  }));
});
