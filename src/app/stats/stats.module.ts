import { CommonModule } from '@angular/common';
import { HittersComponent } from '../hitters/hitters.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { HttpClientModule } from '@angular/common/http';

import { AgGridModule } from 'ag-grid-angular';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TabViewModule } from 'primeng/tabview';
import { PlayerStatsComponent } from '../player-stats/player-stats.component';
import { PitchersComponent } from '../pitchers/pitchers.component';
import { ManagersComponent } from '../managers/managers.component';

@NgModule({
  declarations: [HittersComponent, PlayerStatsComponent, PitchersComponent, ManagersComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    TabViewModule,
    CommonModule,
    AgGridModule.withComponents([])

  ],
  exports: [
    HittersComponent,
    PitchersComponent,
    ManagersComponent,
    PlayerStatsComponent
  ]
})
export class StatsModule { }
