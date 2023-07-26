import { Component, OnInit } from '@angular/core';
import { GetGamesService } from '../../services/get-games.service';
import { environment } from 'src/app/environment/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css'],
})
export class GameCardComponent implements OnInit {
  gamesList: any;

  constructor(private router: Router, private getGamesService: GetGamesService) {}

  protected API = environment.api_url;

  ngOnInit() {
    this.fetchGamesData();
  }

  onGameClick(game: any) {
    console.log('Clicked Game:', game);
    this.router.navigate(['/game', game.id]);
  }

  fetchGamesData() {
    this.getGamesService.get('/games').subscribe(
      (data) => {
        this.processGameData(data);
        console.log('VIDEO GAMES LIST', data);
      },
      (error) => {
        console.error('Error fetching games list:', error);
      }
    );
  }

  processGameData(data: any) {
    this.gamesList = data;
  }
}
