import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import 'leaflet-geocoder-mapzen/dist/leaflet-geocoder-mapzen.css';

import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [AppComponent, ProfileComponent, MapComponent],
  imports: [BrowserModule, LeafletModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
