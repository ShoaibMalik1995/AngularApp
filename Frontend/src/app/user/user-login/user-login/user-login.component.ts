import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  userloginForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.userloginForm = new FormGroup({
      username: new FormControl(null,[Validators.required]),
      password: new FormControl(null,[Validators.required])
    });
  }

  /*************************************************************************/
  /*************** Getter Methods For All Form Controls *******************/
  /*************************************************************************/
  get username() {
    return this.userloginForm.get('username') as FormControl;
  }

  get password() {
    return this.userloginForm.get('password') as FormControl;
  }

  onSubmit() {
    console.log(this.userloginForm);
  }
}
