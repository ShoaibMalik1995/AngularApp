import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  SellRent: number = 1;
  Properties: Array<IProperty>;

  constructor(private route: ActivatedRoute, private housingService:HousingService) {

  }

  ngOnInit(): void {

    if(this.route.snapshot.url.toString()){
      this.SellRent = 2; // Means we are on ren-property url Else on the base url.
    }

    this.housingService.getAllProperties(this.SellRent).subscribe(
      data=> {
        this.Properties = data;
        console.log(data);
      }, error => {
        console.log(error);
      }
    )
  }

}
