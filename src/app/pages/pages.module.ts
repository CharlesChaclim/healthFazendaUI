import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from "primeng/calendar";
import { FieldsetModule } from 'primeng/fieldset';

import { StringToIconPipe } from '@app/pipes/string-to-icon.pipe';

import { DashboardComponent } from './Dashboard/dashboard.component';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  declarations: [
    StringToIconPipe,
    DashboardComponent,
  ],
  imports: [
    CardModule,
    FormsModule,
    PanelModule,
    TableModule,
    ButtonModule,
    CalendarModule,
    FieldsetModule,
    HttpClientModule,
    PagesRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
})
export class PagesModule { }