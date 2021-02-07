import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { AuthService } from './core/services/auth/auth.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { AppRoutes } from './app.routes';
import { AngularModule } from './core/modules/angular/angular.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,

   ],
  imports: [
    AppRoutes,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    AngularModule,
    ToastrModule.forRoot()
  ],
  providers: [ AuthService, ToastrService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
