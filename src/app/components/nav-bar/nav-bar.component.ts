import { Component } from '@angular/core';
import { GameFilterService } from '../../services/game-filter.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  platformOptions: string[] = [
    'PC (Windows)',
    'PC (Windows), Web Browser',
    'Web Browser',
  ];

  genreOptions: string[] = [
    'Action RPG',
    'ARPG',
    'Battle Royale',
    'Card Game',
    'Fantasy',
    'Fighting',
    'MMORPG',
    'Racing',
    'Shooter',
    'Social',
    'Sports',
    'Strategy',
  ];

  nameFilter: any;

  constructor(private gameFilterService: GameFilterService) {}

  onPlatformFilter(event: any) {
    this.gameFilterService.setPlatformFilter(event.target.value);
  }

  onGenreFilter(event: any) {
    this.gameFilterService.setGenreFilter(event.target.value);
  }

  onNameFilter(event: any) {
    this.gameFilterService.setNameFilter(event.target.value);
  }
}
