import { NgModule } from '@angular/core';

import { TabMenuModule, } from 'primeng/tabmenu';

import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    TabMenuModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class CoreModule { }
