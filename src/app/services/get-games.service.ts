import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class GetGamesService {
  protected API = environment.api_url;
  constructor(private http: HttpClient) {}

  get(url: string): Observable<any> {
    return this.http.get(`${this.API}/${url}`);
  }
}
