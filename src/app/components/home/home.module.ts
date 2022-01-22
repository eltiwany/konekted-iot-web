import { MyCommonModule } from './../../common/my-common.module';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FeaturesComponent } from './features/features.component';
import { DemoComponent } from './demo/demo.component';
import { AboutComponent } from './about/about.component';
import { SupportComponent } from './support/support.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';


@NgModule({
  declarations: [
    LandingPageComponent,
    FeaturesComponent,
    DemoComponent,
    AboutComponent,
    SupportComponent,
    NotFoundComponent,
    AccessDeniedComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MyCommonModule
  ]
})
export class HomeModule { }
