import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { ProgressComponent } from './progress/progress.component';
import { Graphic1Component } from './graphic1/graphic1.component';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from '../app-routing.module';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  declarations: [
    ProgressComponent,
    Graphic1Component,
    PagesComponent,
    DashboardComponent
  ],
  exports: [
    ProgressComponent,
    Graphic1Component,
    PagesComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    AppRoutingModule
  ]
})
export class PagesModule { }
