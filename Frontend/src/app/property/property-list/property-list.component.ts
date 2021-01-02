import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPropertyBase } from 'src/app/model/IPropertyBase.interface';
import { HousingService } from 'src/app/services/housing.service';
@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})

export class PropertyListComponent implements OnInit {
  SellRent: number = 1;
  Properties: Array<IPropertyBase>;
  Today = new Date();
  City = '';
  SearchCity = '';
  sortDirection = 'asc';
  sortByParams = '';

  constructor(private router: Router,private route: ActivatedRoute, private housingService:HousingService) {

  }

  ngOnInit(): void {
    //Check User is loggedin
    if(!localStorage.getItem('token')) {
      this.router.navigate(['/user/login']);
    }

    if(this.route.snapshot.url.toString()){
      this.SellRent = 2; // Means we are on ren-property url Else on the base url.
    }

    this.housingService.getAllProperties(this.SellRent).subscribe(
      data=> {
        this.Properties = data;
        console.log(this.Properties);
      }, error => {
        console.log(error);
    });
  }

  onFilterCity() {
    this.SearchCity = this.City;
  }

  onClearText(){
    if(this.City.length === 0){
      this.SearchCity = this.City;
    }
  }

  onsortDirection(){
    if(this.sortDirection === 'asc'){
      this.sortDirection = 'desc';
    }
    else {
      this.sortDirection = 'asc';
    }
  }
}
