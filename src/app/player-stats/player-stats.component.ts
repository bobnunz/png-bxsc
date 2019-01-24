
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridNg2 } from 'ag-grid-angular';
import { PlayerData } from '../Models/player-data';
import { PlayersDataService } from '../players-data.service';
import { TabViewModule } from 'primeng/tabview';

@Component({
  selector: 'app-player-stats',
  templateUrl: './player-stats.component.html',
  styleUrls: ['./player-stats.component.css']
})
export class PlayerStatsComponent implements OnInit {

  @ViewChild('agGrid') agGrid: AgGridNg2;

  title = 'PrimeNG DataTable';
  @Input() offset: number;
  @Input() limit: number;
  @Input() playerType: string;
  @Input() columnDefs: any[];
  @Input() defaultColDef: any[];
  oracleData: PlayerData = new PlayerData;
  tempData: PlayerData = new PlayerData;
   private multiSortKey;

  constructor(private hds: PlayersDataService) {

    this.multiSortKey = 'ctrl';


  }

  async ngOnInit() {
    this.tempData.hasMore = true;
    let offset: number = this.offset;
    let limit: number = this.limit;
    let playerType: string = this.playerType;
    let times: number = 0;
  

    while (this.tempData.hasMore && times < 10) {
      times += 1;
      this.tempData = await this.hds.getAllPlayerData(playerType, offset, limit)
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
