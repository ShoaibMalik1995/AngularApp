import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IProperty } from 'src/app/model/IProperty.interface';


@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('Form') addPropertyForm: NgForm;
  @ViewChild('FormTabs', { static: false }) formTabs: TabsetComponent;

  propertyType: Array<string> = ['House', 'Apartment', 'Duplex'];
  furnishType: Array<string> = ['Fully', 'Semi', 'Unfurnished'];
  entrance: Array<string> = ['East', 'West', 'North', 'South'];

  propertyView: IProperty = {
    Id: null,
    Name: null,
    Price: null,
    SellRent: null,
    PType: null,
    FType: null,
    BHK: null,
    BuiltArea: null,
    City: null,
    Description: null,
    RTM: null
  };

  constructor(private router: Router) { }

  ngOnInit() { }

  onSubmit(Form: NgForm) {
    console.log("Form is Submitted Successfully !!!");
    console.log(this.addPropertyForm);

  }

  onBack() {
    this.router.navigate(['/']);
  }

   selectTab(tabId: number) {
     this.formTabs.tabs[tabId].active = true;
   }
 }
