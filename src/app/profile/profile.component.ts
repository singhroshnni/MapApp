// src/app/profile/profile.component.ts

import { Component } from '@angular/core';
import * as L from 'leaflet';

import 'leaflet-control-geocoder';

interface Profile {
  name: string;
  photoUrl: string;
  description: string;
  address: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  
  profiles: Profile[] = [
    {
      name: 'Amrita Rao',
      photoUrl: 'assets/img3.jpg',
      description: 'Software Engineer',
      address: 'Patilnagar, Chikhali, Pune, Maharashtra, India',
    },
    {
      name: 'Ayan Mehta',
      photoUrl: 'assets/img1.jpg',
      description: 'Designer',
      address: 'Sweety Apartments,Laxminagar, Nigdi, Pune, Maharashtra, India',
    },
    {
      name: 'Mira Shaikh',
      photoUrl: 'assets/img2.jpg',
      description: 'Software Engineer',
      address: 'Tushar Apartments,Akurdi,Pune, Maharashtra, India',
    },

    {
      name: 'Shweta Singh',
      photoUrl: 'assets/img4.jpg',
      description: 'Software Engineer',
      address: 'Pune, Maharashtra, India',
    },

    {
      name: 'Ved Sharma',
      photoUrl: 'assets/img5.jpg',
      description: 'Software Engineer',
      address: 'Pune, Maharashtra, India',
    },

    {
      name: 'Gaurav Kale',
      photoUrl: 'assets/img6.jpg',
      description: 'Software Engineer',
      address: 'Pune, Maharashtra, India',
    },

    {
      name: 'David Tennant',
      photoUrl: 'assets/img7.jpg',
      description: 'Software Engineer',
      address: 'Pune, Maharashtra, India',
    },
  ];


  showMap(address: string): void {
    
    const map = L.map('map').setView([40.7128, -74.0060], 10);

  
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    }).addTo(map);

   
    L.Control.geocoder()
      .on('markgeocode', (event: any) => {
        const { latlng, name } = event.geocode;
      
        L.marker(latlng).addTo(map).bindPopup(`<b>${name}</b>`).openPopup();
      })
      .addTo(map);


    L.Control.Geocoder.nominatim().geocode(address, (results: any) => {
      if (results && results.length > 0) {
      
        L.Control.Geocoder.nominatim()
          .markGeocode(results[0], map)
          .addTo(map)
          .openPopup();
      } else {
        console.log('No results found for address:', address);
      }
    });
  }

}
