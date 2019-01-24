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
    { headerName: 'Player', field: 'player', rowDrag: true, suppressMovable: true },
    { headerName: 'Team', field: 'team' },
    { headerName: 'Position', field: 'pos' },
    { headerName: 'Year', field: 'year' }
  ];

  defaultColDef = { resizable: true, sortable: true, filter: true };

  constructor() { }

  ngOnInit() {
  }

}
