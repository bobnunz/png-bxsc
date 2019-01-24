
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { PlayerData } from './Models/player-data';

@Injectable({
  providedIn: 'root'
})
export class PlayersDataService {
  private urlStr: string;
  
  constructor(private http: HttpClient) { }

  getAllPlayerData(dataType: string,  offset: number, limit?: number): Observable<PlayerData> {

    switch (dataType) {
      case 'H': {
        this.urlStr = 'https://apex.oracle.com/pls/apex/census_epd/bxsc/allHitters?offset=' + offset + '&limit=' + limit;
        break;
      }
      case 'P': {
        this.urlStr = 'https://apex.oracle.com/pls/apex/census_epd/bxsc/allPitchers?offset=' + offset + '&limit=' + limit;
        break;
      }     
      case 'M': {
        this.urlStr = 'https://apex.oracle.com/pls/apex/census_epd/bxsc/allMgrs?offset=' + offset + '&limit=' + limit;
        break;
      }
    }

    return this.http.
      get<PlayerData>(this.urlStr);
  }

}
