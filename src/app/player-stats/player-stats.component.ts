
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridNg2 } from 'ag-grid-angular';
import { PlayerData } from '../Models/player-data';
import { PlayersDataService } from '../players-data.service';
import { TabViewModule } from 'primeng/tabview';
import { element } from 'protractor';
import { Element } from '@angular/compiler/src/render3/r3_ast';
import { style } from '@angular/animations';

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
  multiSortKey;
  private gridApi;
  private gridColumnApi;
  private heightPx: number;
  styleHW: string;
 
  


  constructor(private hds: PlayersDataService) {
  
    this.multiSortKey = 'ctrl';
    this.styleHW = "width: 100%; height: 774px";
 
  }

  onGridReady(params) {

    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.heightPx = document.getElementById("mygrid").offsetHeight;
    let x = this.heightPx;
    let y = document.getElementById("mygrid").offsetWidth;
    console.log('inside ongridready '+x+' '+y);
    

  }
  saveToCsv() {
    let params = {
      skipHeader: true,
      columnGroups: false,
      skipFooters: true,
      skipGroups: true,
      skipPinnedTop: true,
      skipPinnedBottom: true,
      allColumns: true,
      onlySelected: false,
      suppressQuotes: false,
      fileName: "nunz"
     
    };
    console.log("inside export");
    this.gridApi.exportDataAsCsv(params);

  }

  async ngOnInit() {

    this.tempData.hasMore = true;
    let offset: number = this.offset;
    let limit: number = this.limit;
    let playerType: string = this.playerType;
    let times: number = 0;

    while (this.tempData.hasMore && times < 10) {
      times += 1;
      this.tempData = await this.hds.getAllPlayerData(this.playerType, this.offset, this.limit)
        .toPromise();
      if (offset > 0) {
        this.oracleData.items = this.oracleData.items.concat(this.tempData.items);
      }
      else {
        this.oracleData = this.tempData;
      }
      offset += limit;
    }
    /*
    this.heightPx = document.getElementById("mainTabs").offsetHeight;
    let x = this.heightPx;
    let y = document.getElementById("mygrid").offsetWidth;
    let gridSel = document.getElementById("mainTabs");
    gridSel.setAttribute('height', '648px');
    console.log('inside oninit '+x + ' ' + y);
    */
  }


}
