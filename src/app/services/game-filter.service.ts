import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameFilterService {
  private platformFilter: string | null = null;
  private genreFilter: string | null = null;
  private nameFilter: string = '';

  constructor() {}

  setPlatformFilter(value: any) {
    this.platformFilter = value;
  }

  setGenreFilter(value: any) {
    this.genreFilter = value;
  }

  setNameFilter(value: string) {
    this.nameFilter = value;
  }

  getPlatformFilter(): string | null {
    return this.platformFilter;
  }

  getGenreFilter(): string | null {
    return this.genreFilter;
  }

  getNameFilter(): string {
    return this.nameFilter;
  }
}
