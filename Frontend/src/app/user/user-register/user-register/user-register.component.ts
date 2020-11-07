import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser } from 'src/app/model/IUser.interface';
import { AlertService } from 'src/app/services/Alert.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  userRegisterationForm: FormGroup;
  User: IUser;
  IsFormSubmitted: Boolean;

  constructor(private userService: UserService, private alertyfy: AlertService) { }

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

  getUserData(): IUser {
    return this.User = {
      UserId: 0,
      UserName: this.username.value,
      Email: this.email.value,
      Password: this.password.value,
      MobileNo: this.mobileNo.value
    }

  }

  onSubmit() {

    this.IsFormSubmitted = true;
    console.log(this.userRegisterationForm.value);

    if(this.userRegisterationForm.valid){
      //Object.assign() method is used to assign one Object value to another Object
      //this.User = Object.assign(this.User, this.userRegisterationForm.value);
      //Save User Data into local storage
      //this.userService.addUser(this.User);
      this.userService.addUser(this.getUserData());
      //Reset The Form Controls After Submit
      this.userRegisterationForm.reset();

      this.alertyfy.Success("Register Successfully!");
      this.IsFormSubmitted = false;
    }
    else {
      this.alertyfy.Error("Kindly provide the required fields!");
    }

  }
}
