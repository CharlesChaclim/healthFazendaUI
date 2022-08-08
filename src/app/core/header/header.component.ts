import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  items: MenuItem[];
  activeItem: MenuItem;
  
  constructor() { }

  ngOnInit(){

    this.items = [
      {label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['/']},
      {label: 'Dashboard', icon: 'pi pi-fw pi-desktop', routerLink: ['/dashboard']},
    ];
  
    this.activeItem = this.items[0];
    
  }

}
