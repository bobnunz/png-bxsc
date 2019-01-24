import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridNg2 } from 'ag-grid-angular';
import { PlayerData } from './Models/player-data';
import { HitPlayer } from './Models/hit-player';
import { PlayersDataService } from './players-data.service';
import { TabViewModule } from 'primeng/tabview';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

 
  
  
  ngOnInit() {
 
 
  }

}
