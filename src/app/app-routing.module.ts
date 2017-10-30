import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import  { RegistrationComponent } from './registration/registration.component';
import { PermissionsComponent } from './permissions/permissions.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'permissions', component: PermissionsComponent}
  // {path: '**', component: PageNotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
