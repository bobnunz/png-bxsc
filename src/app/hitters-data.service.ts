
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HitData } from './Models/hit-data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HittersDataService {
  private urlStr: string;

  constructor(private http: HttpClient) { }

  getHittersData(offset: number, limit?: number): Observable<HitData> {

    this.urlStr = 'https://apex.oracle.com/pls/apex/census_epd/bxsc/allHitters?offset=' + offset + '&limit=' + limit;
    return this.http.
      get<HitData>(this.urlStr);
  }

}
