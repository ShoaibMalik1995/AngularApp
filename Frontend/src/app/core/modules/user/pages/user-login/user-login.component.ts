import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Login } from '../../models/login.class';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  userloginForm: FormGroup;
  loginmodel: Login;

  constructor(private authenticate: AuthService,private alertify: ToastrService, private router: Router) { }

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

  getloginData(): Login {
    return this.loginmodel = {
      UserName: this.username.value,
      Password: this.password.value
    }
  }

  onSubmit() {
    console.log(this.userloginForm);
    if(this.userloginForm.valid){
      const token = this.authenticate.authenticateUser(this.getloginData());
      if(token) {
        localStorage.setItem('token', token.UserName);
        this.alertify.success("User login successfully!");
        //this.userloginForm.reset();
        this.router.navigate(['/property']);
      }
      else {
        this.alertify.error("Invalid username & password!");
      }
    }
    else {
      this.alertify.error("Invalid username & password!");
    }
  }
}
