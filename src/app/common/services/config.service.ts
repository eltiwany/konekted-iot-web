import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  title = 'Konekted IoT';
  bgImageUrl = 'assets/images/home-bg.jpg';
  bgImageAlt = 'Connected Devices';

  logoImageUrl = 'assets/images/konekted.png';
  mobileMenu = false;

  toggleMobileMenu() {
    this.mobileMenu = !this.mobileMenu;
  }

  hideMobileMenu() {
    this.mobileMenu = false;
  }
  
  constructor() { }
}
