import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Welcome, Genre, Platform } from 'src/app/interface/game.interface'; // Asumiendo que Genre y Platform son enumerados
import { GetGamesService } from 'src/app/services/get-games.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css'],
})
export class GameDetailsComponent implements OnInit {
  gameId: any;
  gameDetails?: any[];
  game: Welcome = {
    id: '',
    title: '',
    thumbnail: '',
    short_description: '',
    game_url: '',
    genre: '',
    platform: '',
    publisher: '',
    developer: '',
    release_date: '',
    freetogame_profile_url: undefined,
  };

  constructor(
    private route: ActivatedRoute,
    private getGamesService: GetGamesService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.gameId = params['id'];
      this.fetchGamesData(this.gameId);
    });
  }

  fetchGamesData(gameId: number) {
    const url = `/game?id=${gameId}`;
    this.getGamesService.getbyId(url).subscribe(
      (data) => {
        if (data) {
          this.game.id = data.id;
          this.game.title = data.title;
          this.game.thumbnail = data.thumbnail;
          this.game.short_description = data.short_description;
          this.game.game_url = data.game_url;
          this.game.genre = data.genre;
          this.game.platform = data.platform;
          this.game.publisher = data.publisher;
          this.game.developer = data.developer;
          this.game.release_date = data.release_date;
        }
        console.log('Selected Game Details', this.game);
      },
      (error) => {
        console.error('Error fetching game details:', error);
      }
    );
  }
}
