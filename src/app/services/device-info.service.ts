import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeviceInfoService {

  constructor() { }

  getDeviceInfo() {
    // Mock device info for demonstration purposes
    return {
      model: 'iPhone 12',
      platform: 'iOS',
      operatingSystem: 'iOS',
      osVersion: '14.4',
      manufacturer: 'Apple'
    };
  }
}
