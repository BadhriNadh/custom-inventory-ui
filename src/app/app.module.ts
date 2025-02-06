import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatListModule} from "@angular/material/list";
import { MenuDrawComponent } from './menu/menu-draw/menu-draw.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatInputModule} from "@angular/material/input";
import { ItemCountCardComponent } from './zone-items-view/zone-item-card/item-count-card.component';
import { ItemInfoDialogComponent } from './zone-items-view/zone-item-info-dialog/item-info-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import { CountSubmitDialogComponent } from './zone-items-view/zone-item-count-submit-dialog/count-submit-dialog.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AddZoneDialogComponent } from './zones-view/add-zone-dialog/add-zone-dialog.component';
import { ItemsByZoneComponent } from './zone-items-view/items-by-zone/items-by-zone.component';
import { ItemsByVendorComponent } from './vendor-items-view/items-by-vendor/items-by-vendor.component';
import { AllItemsComponent } from './items-view/all-items/all-items.component';
import { AllZonesComponent } from './zones-view/all-zones/all-zones.component';
import { AllVendorsComponent } from './vendors-view/all-vendors/all-vendors.component';
import {MatTooltipModule} from "@angular/material/tooltip";
import { ZoneCardComponent } from './zones-view/zone-card/zone-card.component';
import { VendorCardComponent } from './vendors-view/vendor-card/vendor-card.component';
import {ItemCardComponent} from "./items-view/item-card/item-card.component";
import { AddVendorDialogComponent } from './vendors-view/add-vendor-dialog/add-vendor-dialog.component';
import { AddItemDialogComponent } from './items-view/add-item-dialog/add-item-dialog.component';
import { LoginComponent } from './users-view/login/login.component';
import { ProfileComponent } from './users-view/profile/profile.component';
import { LogoutDialogComponent } from './users-view/logout-dialog/logout-dialog.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RegisterComponent } from './users-view/register/register.component';
import {HttpClientModule} from "@angular/common/http";
import { VendorItemCardComponent } from './vendor-items-view/vendor-item-card/vendor-item-card.component';
import { AllStoresComponent } from './stores-view/all-stores/all-stores.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import { StoreCardComponent } from './stores-view/store-card/store-card.component';
import { AddStoreDialogComponent } from './stores-view/add-store-dialog/add-store-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuDrawComponent,
    ItemCountCardComponent,
    ItemInfoDialogComponent,
    CountSubmitDialogComponent,
    AddZoneDialogComponent,
    ItemsByZoneComponent,
    ItemsByVendorComponent,
    AllItemsComponent,
    AllZonesComponent,
    AllVendorsComponent,
    ZoneCardComponent,
    VendorCardComponent,
    ItemCardComponent,
    AddVendorDialogComponent,
    AddItemDialogComponent,
    LoginComponent,
    ProfileComponent,
    LogoutDialogComponent,
    RegisterComponent,
    VendorItemCardComponent,
    AllStoresComponent,
    StoreCardComponent,
    AddStoreDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatListModule,
    MatExpansionModule,
    MatInputModule,
    MatDialogModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    MatTooltipModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatGridListModule,
    MatCardModule
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {subscriptSizing: 'dynamic'}} // Remove wrapper spacing in form elements
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
