/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetGamesService } from './get-games.service';

describe('Service: GetGames', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetGamesService]
    });
  });

  it('should ...', inject([GetGamesService], (service: GetGamesService) => {
    expect(service).toBeTruthy();
  }));
});
