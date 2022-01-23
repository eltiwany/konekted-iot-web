import { NgxBootstrapIconsModule, arrowLeftCircleFill, arrowRightCircleFill } from 'ngx-bootstrap-icons';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const icons = {
  arrowLeftCircleFill,
  arrowRightCircleFill
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxBootstrapIconsModule.pick(icons)
  ],
  exports: [
    NgxBootstrapIconsModule
  ]
})
export class MyCommonModule { }
