import { Injectable } from '@angular/core';
import { Marker } from '../models';

@Injectable()
export class LocationsService {

  // @Todo: replace markers by an API
  markers: Marker[] = [
    {
      lat: 28.557020,
      lng: 77.326240,
      title: 'The Haven International Coffee House',
      draggable: false,
      street: 'Shop no 3, Gardenia Gateway, Sector 75',
      city: 'Noida',
      state: 'Uttar Pradesh',
      postalcode: '201301',
      email: 'abc@example.com',
      phone: '+91-0000000000',
      website: 'http://example.com',
      detail: 'InfoWindow content'
    },
    {
      lat: 28.570900,
      lng: 77.372060,
      title: 'The Chai Art',
      draggable: false,
      street: 'The Chai Art, Kiosk No. 3, Amrapali Crystal Homes, Sector 76',
      city: 'Noida',
      state: 'Uttar Pradesh',
      postalcode: '201301',
      email: 'abc@example.com',
      phone: '+91-0000000000',
      website: 'http://example.com',
      detail: 'InfoWindow content'
    },
    {
      lat: 28.557020,
      lng: 77.326240,
      title: 'Cold Rock Cafe',
      draggable: false,
      street: 'Shop no. 28,Amarpali Silicon City, Sector 76, ',
      city: 'Noida',
      state: 'Uttar Pradesh',
      postalcode: '201301',
      email: 'abc@example.com',
      phone: '+91-0000000000',
      website: 'http://example.com',
      detail: 'InfoWindow content'
    }
  ];

  constructor() { }

  getMarkers() {
    return this.markers;
  }

}