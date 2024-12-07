import {Component, inject, signal} from '@angular/core';
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {CountSubmitDialogComponent} from "./count-submit-dialog/count-submit-dialog.component";
import {AddZoneDialogComponent} from "./add-zone-dialog/add-zone-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'custom-inventory-ui';
  drawerOpen = false;

  drawerMode: 'over' | 'side' = 'side';  // Default to 'side'
  remove: boolean = false;
  menuSelectValue: string = 'login';

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointObserver.observe([Breakpoints.Handset])
      .subscribe(result => {
        this.drawerMode = result.matches ? 'over' : 'side';
        if (result.matches) {
          this.drawerOpen = false;  // Close the drawer on small screens
        }
      });
  }

  toggleDrawer() {
    this.drawerOpen = !this.drawerOpen;
  }

  drawerClosed() {
    this.drawerOpen = false;
  }

  menuSelect(select: string) {
    this.menuSelectValue = select;
  }

  loggedIn() {
    this.menuSelectValue = "zone";
  }

  switchToLogin() {
    this.menuSelectValue = "login";
  }

  openRegister() {
    this.menuSelectValue = "register";
  }
}
