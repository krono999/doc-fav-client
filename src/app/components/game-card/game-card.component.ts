import { Component, OnInit } from '@angular/core';
import { GetGamesService } from '../../services/get-games.service';
import { environment } from 'src/app/environment/environment';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent implements OnInit {
  gamesList: any;

  constructor(private getGamesService: GetGamesService) { }
  protected API = environment.api_url;
  ngOnInit() {
    this.fetchGamesData(this.API);
  }

  onGameClick(game: any) {
    console.log('Clicked Game:', game);
  }

  fetchGamesData(url: string) {
    this.getGamesService.get('/games').subscribe(
      (data) => {
        this.processGameData(data);
        console.log('VIDEO GAMES LIST', data)
      },
      (error) => {
        console.error('Error', error);
      }
    );
  }

  processGameData(data: any) {
    this.gamesList = data;
   
  }
}
