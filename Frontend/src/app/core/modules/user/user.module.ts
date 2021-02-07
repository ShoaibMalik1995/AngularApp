import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user.routes';
import { UserService } from './services/user.service';
import { UserLoginComponent } from './pages/user-login/user-login.component';
import { UserRegisterComponent } from './pages/user-register/user-register.component';
import { AngularModule } from '../angular/angular.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    UserLoginComponent,
    UserRegisterComponent
  ],
  imports: [
    UserRoutingModule,
    CommonModule,
    AngularModule,
    MaterialModule,
  ],
  providers: [ UserService ],
  bootstrap: []
})

export class UserModule { }
