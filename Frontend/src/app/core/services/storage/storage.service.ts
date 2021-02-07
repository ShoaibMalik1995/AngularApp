import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UtilService } from '../util/util.service';

@Injectable({
  providedIn: 'root'
})

export class StorageService {

  constructor(private cookies: CookieService, private _util: UtilService, private _router: Router) { }

  saveToken(token: string) {
    localStorage.setItem('sclk-token', token);
  }

  getToken() {
    return localStorage.getItem('sclk-token');
  }

  removeToken(){
    localStorage.removeItem('sclk-token');
  }

  setLocalObject(key: string, value: any) {
    localStorage.setItem(key,this._util.encrypt(JSON.stringify(value)));
  }

  getLocalObject(key: string) {
    return JSON.parse(this._util.decrypt(localStorage.getItem(key)));
  }

  /**
   * to get csrf token
   */
  getCsrfToken() {
    return this.cookies.get('csrftoken');
  }

}
