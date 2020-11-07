import { Injectable } from '@angular/core';
import { IUser } from '../model/IUser.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  addUser(user: IUser) {
    let users = [];
    if(localStorage.getItem('Users')) {
      users= JSON.parse(localStorage.getItem('Users'));
      // We can use Spreed Operater (...) to Add a User in list
      //users = [user, ...users]; //Add new User at first index
      user.UserId = users.length + 1;
      users = [...users, user];  //Add new User at last index
    }
    else {
      user.UserId = 1;
      users = [user];
    }

    localStorage.setItem('Users',JSON.stringify(users));
  }
}
