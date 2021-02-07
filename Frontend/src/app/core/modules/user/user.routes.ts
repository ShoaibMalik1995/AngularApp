import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { UserLoginComponent } from './pages/user-login/user-login.component';
import { UserRegisterComponent } from './pages/user-register/user-register.component';

const routes: Routes = [
  {path: '', component: UserLoginComponent, children: [
    {path: 'user-login', component: UserLoginComponent},
    {path: 'user-register', component: UserRegisterComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserRoutingModule {

}
