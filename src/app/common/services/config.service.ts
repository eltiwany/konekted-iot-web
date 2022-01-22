import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  title = 'Konekted IoT';
  imagePath = 'assets/images/';

  images = {
    notFound: this.imagePath + '404.svg',
    logo: this.imagePath + 'konekted.png',
  };

  mobileMenu = false;

  toggleMobileMenu() {
    this.mobileMenu = !this.mobileMenu;
  }

  hideMobileMenu() {
    this.mobileMenu = false;
  }

  constructor() { }
}
