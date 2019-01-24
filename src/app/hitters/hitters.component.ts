import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridNg2 } from 'ag-grid-angular';
import { PlayerData } from '../Models/player-data';
import { HitPlayer } from '../Models/hit-player';
import { Hit } from '../Models/hit-player';
import { PlayersDataService } from '../players-data.service';
import { TabViewModule } from 'primeng/tabview';

@Component({
  selector: 'app-hitters',
  templateUrl: './hitters.component.html',
  styleUrls: ['./hitters.component.css']
})
export class HittersComponent implements OnInit {
  title = 'PrimeNG DataTable';
  offset: number = 0;
  limit: number = 500;
  playerType: string = 'H';
  columnDefs = [
    { headerName: 'Player', field: 'player', rowDrag: true },
    { headerName: 'Team', field: 'team' },
    { headerName: 'Position', field: 'pos' },
    { headerName: 'Year', field: 'year' }
  ];
  
 
  constructor() {
   
  }

 ngOnInit() {
 
  }

}
