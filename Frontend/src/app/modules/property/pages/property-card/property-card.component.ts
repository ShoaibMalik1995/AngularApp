import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPropertyBase } from 'src/app/modules/property/interfaces/IPropertyBase.interface';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']

  //template: `<h1>I am a card.</h1>`,
  //styles: [`h1 {font-weight: normal; color: green; }`]
})

export class PropertyCardComponent implements OnInit {

  @Input() Property: IPropertyBase
  @Input() hideIcons: Boolean

  constructor(private router: Router){}

  ngOnInit(): void {
    //Check User is loggedin
    if(!localStorage.getItem('token')) {
      this.router.navigate(['/user/login']);
    }
  }

}
