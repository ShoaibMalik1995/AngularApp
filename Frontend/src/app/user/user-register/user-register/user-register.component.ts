import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  userRegisterationForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.userRegisterationForm = new FormGroup({
      userName: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(25)]),
      email: new FormControl(null, [Validators.required, Validators.email, Validators.maxLength(25)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      confirmpassword: new FormControl(null, [Validators.required]),
      mobileNo: new FormControl(null, [Validators.required, Validators.maxLength(15)])
    }, this.passwordMatchingValidator);

    //We Can Set the Values of reactive form fields By Accessing the controls
    //this.userRegisterationForm.controls['userName'].setValue('Defaul Value');
  }

  //Custom Validator for Checking PAssword And ConfirmPAssoword Match
  passwordMatchingValidator(fg: FormGroup) : Validators {
    return fg.get('password').value === fg.get('confirmpassword').value ? null : {notmatched: true};
  }

  /*************************************************************************/
  /*************** Getter Methods For All Form Controls *******************/
  /*************************************************************************/
  get username() {
    return this.userRegisterationForm.get('userName') as FormControl;
  }

  get email() {
    return this.userRegisterationForm.get('email') as FormControl;
  }

  get password() {
    return this.userRegisterationForm.get('password') as FormControl;
  }

  get confirmpassword() {
    return this.userRegisterationForm.get('confirmpassword') as FormControl;
  }

  get mobileNo() {
    return this.userRegisterationForm.get('mobileNo') as FormControl;
  }

  onSubmit() {
    console.log(this.userRegisterationForm);
  }

}
