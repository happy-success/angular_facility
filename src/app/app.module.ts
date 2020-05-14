import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { DescriptionComponent } from './mainpage/description/description.component';
import { AddressComponent } from './mainpage/address/address.component';
import { ImagesComponent } from './mainpage/images/images.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    DescriptionComponent,
    AddressComponent,
    ImagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
