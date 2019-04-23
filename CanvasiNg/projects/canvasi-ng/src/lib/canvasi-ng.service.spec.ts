import { TestBed } from '@angular/core/testing';

import { CanvasiNgService } from './canvasi-ng.service';

describe('CanvasiNgService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CanvasiNgService = TestBed.get(CanvasiNgService);
    expect(service).toBeTruthy();
  });
});
