import {Routes, RouterModule} from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import {LoginComponent} from './login/login.component';

import {AuthGuard} from './_guards/index';
import {HomeComponent} from './home/home.component';
import {SignupComponent} from './signup/signup.component';
import {DatacentersComponent} from './datacenters/datacenters.component';
import {ServersComponent} from './servers/servers.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'datacenters', component: DatacentersComponent, canActivate: [AuthGuard]},
  {path: 'servers', component: ServersComponent, canActivate: [AuthGuard]},

  // otherwise redirect to home
  {path: '**', redirectTo: 'home'}
];

export const routing = RouterModule.forRoot(appRoutes);
