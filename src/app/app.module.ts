import { NgModule } from '@angular/core';

import { CoreModule } from '@app/core/core.module';
import { PagesModule } from '@app/pages/pages.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CoreModule,
    PagesModule,
    AppRoutingModule,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }