/* tslint:disable:no-unused-variable */

import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { LodashService } from './lodash.service';

describe('Service: Lodash', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LodashService]
    });
  });

  it('should ...', inject([LodashService], (service: LodashService) => {
    expect(service).toBeTruthy();
  }));
});
