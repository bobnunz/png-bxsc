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
import { MatTabsModule, MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [HittersComponent, PlayerStatsComponent, PitchersComponent, ManagersComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    TabViewModule,
    CommonModule,
    AgGridModule.withComponents([]),
    MatTabsModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule

  ],
  exports: [
    HittersComponent,
    PitchersComponent,
    ManagersComponent,
    PlayerStatsComponent
  ]
})
export class StatsModule { }
