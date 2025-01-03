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
import { MenuDrawComponent } from './menu-draw/menu-draw.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatInputModule} from "@angular/material/input";
import { ItemCountCardComponent } from './item-count-card/item-count-card.component';
import { ItemInfoDialogComponent } from './item-info-dialog/item-info-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import { CountSubmitDialogComponent } from './count-submit-dialog/count-submit-dialog.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AddZoneDialogComponent } from './add-zone-dialog/add-zone-dialog.component';
import { ItemsByZoneComponent } from './items-by-zone/items-by-zone.component';
import { ItemsByVendorComponent } from './items-by-vendor/items-by-vendor.component';
import { AllItemsComponent } from './all-items/all-items.component';
import { AllZonesComponent } from './all-zones/all-zones.component';
import { AllVendorsComponent } from './all-vendors/all-vendors.component';
import {MatTooltipModule} from "@angular/material/tooltip";
import { ZoneCardComponent } from './zone-card/zone-card.component';
import { VendorCardComponent } from './vendor-card/vendor-card.component';
import {ItemCardComponent} from "./item-card/item-card.component";
import { AddVendorDialogComponent } from './add-vendor-dialog/add-vendor-dialog.component';
import { AddItemDialogComponent } from './add-item-dialog/add-item-dialog.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { LogoutDialogComponent } from './logout-dialog/logout-dialog.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RegisterComponent } from './register/register.component';
import {HttpClientModule} from "@angular/common/http";

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
    RegisterComponent
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
    FormsModule
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {subscriptSizing: 'dynamic'}} // Remove wrapper spacing in form elements
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
