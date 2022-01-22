import { NotFoundComponent } from './not-found/not-found.component';
import { DemoComponent } from './demo/demo.component';
import { SupportComponent } from './support/support.component';
import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'features', component: FeaturesComponent},
  {path: 'about', component: AboutComponent},
  {path: 'support', component: SupportComponent},
  {path: 'demo', component: DemoComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
