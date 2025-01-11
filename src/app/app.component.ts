import {Component, inject, signal} from '@angular/core';
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {CountSubmitDialogComponent} from "./zones-view/zone-item-count-submit-dialog/count-submit-dialog.component";
import {AddZoneDialogComponent} from "./zones-view/add-zone-dialog/add-zone-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'custom-inventory-ui';
  menuOpen = false;

  menuMode: 'over' | 'side' = 'side';  // Default to 'side'
  pageValue: string = 'login';

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointObserver.observe([Breakpoints.Handset])
      .subscribe(result => {
        this.menuMode = result.matches ? 'over' : 'side';
        if (result.matches) {
          this.menuOpen = false;  // Close the drawer on small screens
        }
      });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  setMenuClosed() {
    this.menuOpen = false;
  }

  menuSelect(select: string) {
    this.pageValue = select;
  }

  loggedIn() {
    this.pageValue = "allStores";
  }

  selectedStore() {
    this.pageValue = "zone";
  }

  switchToLogin() {
    this.pageValue = "login";
  }

  openRegister() {
    this.pageValue = "register";
  }

  userLogout() {
    this.pageValue = "login";
    this.setMenuClosed()
  }
}
