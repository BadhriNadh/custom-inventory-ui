import { NgModule } from '@angular/core';
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
import { ItemCardComponent } from './item-card/item-card.component';
import { ItemInfoDialogComponent } from './item-info-dialog/item-info-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import { CountSubmitDialogComponent } from './count-submit-dialog/count-submit-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuDrawComponent,
    ItemCardComponent,
    ItemInfoDialogComponent,
    CountSubmitDialogComponent
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
    MatDialogModule
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {subscriptSizing: 'dynamic'}} // Remove wrapper spacing in form elements
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
