import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pitchers',
  templateUrl: './pitchers.component.html',
  styleUrls: ['./pitchers.component.css']
})
export class PitchersComponent implements OnInit {

  offset: number = 0;
  limit: number = 500;
  playerType: string = 'P';
  columnDefs = [
    { headerName: 'Player', field: 'player', rowDrag: true, suppressMovable: true, filter: "agTextColumnFilter" },
    { headerName: 'Team', field: 'team', filter: "agTextColumnFilter" },
    { headerName: 'Position', field: 'pos', filter: "agTextColumnFilter" },
    { headerName: 'Year', field: 'year', filter: "agNumberColumnFilter" }
  ];

  defaultColDef = { resizable: true, sortable: true, filter: true };

  constructor() { }

  ngOnInit() {
  }

}
