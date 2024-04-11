import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
      this.items = [
          {
              label: 'Match',
              icon: 'pi pi-fw pi-file',
              routerLink: "match"

          },
          {
              label: 'Statistics',
              icon: 'pi pi-fw pi-pencil',
              routerLink: "statistics",


          }
      ];
  }
}
