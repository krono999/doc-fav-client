import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { GetGamesService } from '../../services/get-games.service';
import { environment } from 'src/app/environment/environment';
import { GameFilterService } from '../../services/game-filter.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit, OnChanges {
  gamesList!: any[];
  platformFilter: string | null = null;
  genreFilter: string | null = null;
  nameFilter: string = '';

  protected API = environment.api_url;

  constructor(private getGamesService: GetGamesService, private gameFilterService: GameFilterService) { }

  ngOnInit() {
    this.fetchGamesData(this.API);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['platformFilter'] || changes['genreFilter'] || changes['nameFilter']) {
      this.applyFilters();
    }
  }

  fetchGamesData(url: string) {
    this.getGamesService.get('/games').subscribe(
      (data) => {
        this.gamesList = data;
        this.applyFilters();
        console.log('VIDEO GAMES LIST', data);
      },
      (error) => {
        console.error('Error :$', error);
      }
    );
  }

  applyFilters() {
    const platformFilter = this.gameFilterService.getPlatformFilter();
    const genreFilter = this.gameFilterService.getGenreFilter();
    const nameFilter = this.gameFilterService.getNameFilter();

    let filteredGames = this.gamesList;


    if (platformFilter) {
      filteredGames = filteredGames.filter((game) => game.platform === platformFilter);
    }

    if (genreFilter) {
      filteredGames = filteredGames.filter((game) => game.genre === genreFilter);
    }

    if (nameFilter) {
      filteredGames = filteredGames.filter((game) =>
        game.title.toLowerCase().includes(nameFilter.toLowerCase())
      );
    }

    this.gamesList = filteredGames;
  }
}
