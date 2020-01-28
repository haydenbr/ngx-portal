import { TestBed } from '@angular/core/testing';

import { NgxPortalsService } from './ngx-portals.service';

describe('NgxPortalsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxPortalsService = TestBed.get(NgxPortalsService);
    expect(service).toBeTruthy();
  });
});
