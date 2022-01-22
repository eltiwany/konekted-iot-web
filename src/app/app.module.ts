import { HomeModule } from './components/home/home.module';
import { AuthModule } from './components/auth/auth.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './common/components/fragments/top-nav/top-nav.component';
import { FooterComponent } from './common/components/fragments/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
