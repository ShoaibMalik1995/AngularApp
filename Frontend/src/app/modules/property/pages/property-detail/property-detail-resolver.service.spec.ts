/* tslint:disable:no-unused-variable */

import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { PropertyDetailResolverService } from './property-detail-resolver.service';

describe('Service: PropertyDetailResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PropertyDetailResolverService]
    });
  });

  it('should ...', inject([PropertyDetailResolverService], (service: PropertyDetailResolverService) => {
    expect(service).toBeTruthy();
  }));
});
