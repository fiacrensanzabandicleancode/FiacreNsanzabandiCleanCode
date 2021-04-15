import { TestBed } from '@angular/core/testing';

import { ActualRouteKeeperService } from './actual-route-keeper.service';

describe('ActualRouteKeeperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActualRouteKeeperService = TestBed.get(ActualRouteKeeperService);
    expect(service).toBeTruthy();
  });
});
