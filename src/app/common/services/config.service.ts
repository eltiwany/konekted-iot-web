import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  landingPage = {
    line1: 'Connecting IoT devices',
    line2: 'should be simpler and faster ⚡'
  }

  title = 'Konekted IoT';
  imagePath = 'assets/images/';

  images = {
    notFound: this.imagePath + '404.svg',
    accessDenied: this.imagePath + '401.svg',
    logo: this.imagePath + 'konekted.svg',
  };

  mobileMenu = false;

  toggleMobileMenu() {
    this.mobileMenu = !this.mobileMenu;
  }

  hideMobileMenu() {
    this.mobileMenu = false;
  }

  /**
   * Open modal with specified modal id
   * if modal Id is not specified it will
   * use modal class 'modal'
   * @param modalId
   */
  openModal(modalId?: any) {
    let modal = modalId ?
                document.getElementById(modalId) :
                document.getElementsByClassName('modal')[0];
    modal?.classList.remove('hidden');
  }

  /**
   * Close modal with specified modal id
   * if modal Id is not specified it will
   * use modal class 'modal'
   * @param modalId modalId
   */
  closeModal(modalId?: any) {
      let modal = modalId ?
                  document.getElementById(modalId) :
                  document.getElementsByClassName('modal')[0];
      modal?.classList.add('hidden');
  }

  /**
   * Close all modals with  modal class 'modal'
   * @param void
   */
  closeAllModals() {
    let modal = document.getElementsByClassName('modal')[0];
    modal?.classList.add('hidden');
  }

  constructor() { }
}
