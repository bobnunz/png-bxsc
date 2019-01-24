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
    { headerName: 'Year', field: 'year' },
    { headerName: 'Rnd.Ord', field: 'rd' },
    { headerName: 'Games', field: 'games' },
    { headerName: 'AB', field: 'ab' },
    { headerName: 'Runs', field: 'runs' },
    { headerName: 'Net Runs', field: 'netruns' },
    { headerName: 'Hits', field: 'hits' },
    { headerName: 'HRs', field: 'hr' },
    { headerName: 'RBIs', field: 'rbi' },
    { headerName: 'SB', field: 'sb' },
    { headerName: 'Errors', field: 'errors' },
    { headerName: 'BA', field: 'ba' },
    { headerName: 'Z', field: 'z' },
    { headerName: 'WPP', field: 'wpp' },
    { headerName: 'WPP pg', field: 'wpp_pg' },
    { headerName: 'Winning Bid', field: 'win_bid' },
    { headerName: 'Highest Bid', field: 'bid_highest' },
    { headerName: '2nd Highest Bid', field: 'bid_2_highest' },
    { headerName: '3rd Highest Bid', field: 'bid_3_highest' },
    { headerName: '4th Highest Bid', field: 'bid_4_highest' },
    { headerName: '5th Highest Bid', field: 'bid_5_highest' },
    { headerName: '6th Highest Bid', field: 'bid_6_highest' },
    { headerName: '7th Highest Bid', field: 'bid_7_highest' },
    { headerName: '8th Highest Bid', field: 'bid_8_highest' },
    { headerName: '9th Highest Bid', field: 'bid_9_highest' },
    { headerName: '10th Highest Bid', field: 'bid_10_highest' },
    { headerName: '11th Highest Bid', field: 'bid_11_highest' },
    { headerName: '12th Highest Bid', field: 'bid_12_highest' },
    { headerName: '13th Highest Bid', field: 'bid_13_highest' },
    { headerName: 'Lowest Bid', field: 'bid_lowest' },
    { headerName: 'Tie Bid Flag', field: 'tie_bid' },
    { headerName: 'Owned Flag', field: 'owned' }
  ];
  
 
  constructor() {
   
  }

 ngOnInit() {
 
  }

}
