import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {MenuComponent} from './menu/menu.component';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HomeComponent} from './home/home.component';
import {SignupComponent} from './signup/signup.component';
import {DatacentersComponent} from './datacenters/datacenters.component';
import {ServersComponent} from './servers/servers.component';

import {AuthGuard} from './_guards/auth.guard';
import {LoginService} from './login/login.service';
import {PlayerService} from './_services/player.service';
import {DashboardService} from './dashboard/dashboard.service';

import {routing} from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    SignupComponent,
    DatacentersComponent,
    ServersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    AuthGuard,
    LoginService,
    DashboardService,
    PlayerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
