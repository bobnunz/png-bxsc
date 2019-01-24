import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-managers',
  templateUrl: './managers.component.html',
  styleUrls: ['./managers.component.css']
})
export class ManagersComponent implements OnInit {
  offset: number = 0;
  limit: number = 500;
  playerType: string = 'M';
  columnDefs = [
    { headerName: 'Player', field: 'player', rowDrag: true },
    { headerName: 'Team', field: 'team' },
    { headerName: 'Position', field: 'pos' },
    { headerName: 'Year', field: 'year' }
  ];  constructor() { }

  ngOnInit() {
  }

}
