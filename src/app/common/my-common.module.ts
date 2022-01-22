import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxBootstrapIconsModule.pick(allIcons)
  ],
  exports: [
    NgxBootstrapIconsModule
  ]
})
export class MyCommonModule { }
