import { TestBed } from '@angular/core/testing';

import { BlockUiService } from './block-ui.service';

describe('BlockUiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlockUiService = TestBed.get(BlockUiService);
    expect(service).toBeTruthy();
  });
});
