/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GameFilterService } from './game-filter.service';

describe('Service: GameFilter', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameFilterService]
    });
  });

  it('should ...', inject([GameFilterService], (service: GameFilterService) => {
    expect(service).toBeTruthy();
  }));
});
