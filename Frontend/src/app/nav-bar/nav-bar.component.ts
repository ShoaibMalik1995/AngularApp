import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '../services/Alert.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isCollapsed = true;
  loggedInUser: string;
  constructor(private router: Router, private alertift: AlertService) { }

  ngOnInit() {
  }

  loggedIn() {
    this.loggedInUser = localStorage.getItem('token');
    return this.loggedInUser;
  }

  onLogout() {
    localStorage.removeItem('token');
    this.alertift.Success("You are logged out!")
    this.router.navigate(['/user/login']);
  }
}
