import { Injectable } from '@angular/core';
import { Login } from '../../modules/user/models/login.class';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 constructor() { }

 authenticateUser(user: Login) {
    let UserList = [];
    if(localStorage.getItem('Users')){
      UserList = JSON.parse(localStorage.getItem('Users'));
    }

    return UserList.find(u => (u.UserName === user.UserName || u.Email === user.UserName) && u.Password === user.Password);
 }
}
