
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { PlayerData } from './Models/player-data';

@Injectable({
  providedIn: 'root'
})
export class HittersDataService {
  private urlStr: string;
  
  constructor(private http: HttpClient) { }

  getHittersData(dataType: string,  offset: number, limit?: number): Observable<PlayerData> {

    if (dataType = 'H') {
      this.urlStr = 'https://apex.oracle.com/pls/apex/census_epd/bxsc/allHitters?offset=' + offset + '&limit=' + limit;
    }

    return this.http.
      get<PlayerData>(this.urlStr);
  }

}
