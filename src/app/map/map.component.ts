
import { Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent {
  options: any;
  layersControl: any;
  layers: any[];

  constructor() {
    this.options = {
      layers: [
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
        }),
      ],
      zoom: 10,
      center: L.latLng(51.505, -0.09),
    };

    this.layersControl = {
      baseLayers: {
        'OpenStreetMap': L.tileLayer(
          'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          { maxZoom: 19 }
        ),
      },
    };

    this.layers = [];
  }

  onMapReady(map: L.Map) {
    L.control
      .geocoder({
        geocoder: L.Control.Geocoder.mapzen(
          'bf9a8acd55e044e2b127a404b54c374b',
          {}
        ),
      })
      .addTo(map);
  }
}
