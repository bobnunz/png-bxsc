import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridNg2 } from 'ag-grid-angular';
import { PlayerData } from './Models/player-data';
import { HitPlayer } from './Models/hit-player';
import { HittersDataService } from './hitters-data.service';
import { TabViewModule } from 'primeng/tabview';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

  @ViewChild('agGrid') agGrid: AgGridNg2;

  title = 'PrimeNG DataTable';
  //oracleData: PlayerData = new PlayerData;
  //tempData: PlayerData = new PlayerData;
  oracleData: HitPlayer = new HitPlayer;
  tempData: HitPlayer = new HitPlayer;
  private defaultColDef;
  private multiSortKey;


  columnDefs = [
    { headerName: 'Player', field: 'player', rowDrag: true },
    { headerName: 'Team', field: 'team' },
    { headerName: 'Position', field: 'pos' },
    { headerName: 'Year', field: 'year' }
  ];



  constructor(private hds: HittersDataService) {
    this.defaultColDef = { resizable: true, sortable: true, filter: true };
    this.multiSortKey = 'ctrl';
  }

  async ngOnInit() {
    this.tempData.hasMore = true;
    let offset: number = 0;
    let limit: number = 500;
    let times: number = 0;

    while (this.tempData.hasMore && times < 10) {
      times += 1;
      this.tempData = await this.hds.getHittersData('H', offset, limit)
        .toPromise();
      if (offset > 0) {
        this.oracleData.items = this.oracleData.items.concat(this.tempData.items);
      }
      else {
        this.oracleData = this.tempData;
      }
      offset += limit;
    }

  }

}
