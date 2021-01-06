import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';
import { Property } from '../model/Property';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }

  getAllCities(): Observable<string[]> {
    return this.http.get<string[]>("http://localhost:5000/api/city");
  }

  getAllProperties(SellRent?: number) : Observable<Property[]> {
    return this.http.get('data/properties.json').pipe(
      map(data => {
        const propertiesArray: Array<Property> = [];
        const props= JSON.parse(localStorage.getItem('props'));

        if(props){
          props.forEach(element => {
            if(SellRent)
            {
              if(element.SellRent === SellRent){
                propertiesArray.push(element);
              }
            }
            else {
              propertiesArray.push(element);
            }
          });
        }

        for(const id in data){
          if(SellRent){
            if(data.hasOwnProperty(id) && data[id].SellRent === SellRent){
              propertiesArray.push(data[id]);
            }
          }
          else {
            propertiesArray.push(data[id]);
          }
        }

        return propertiesArray;
      })
    );
  }

  getPropertyById(propId: number) {
    return this.getAllProperties().pipe(
      map(propertiseList => {
        //throw new Error("Test Error"); //This line Added to Check the Route Resolver added for property detail
        return propertiseList.find(p => p.Id === propId);
      })
    );
  }

  addProperty(prop: Property) {
    let props = [];
    if(localStorage.getItem('props')) {
      props= JSON.parse(localStorage.getItem('props'));
      // We can use Spreed Operater (...) to Add a Property in list
      //props = [prop, ...props]; //Add new Property at first index
      prop.Id = props.length + 1;
      props = [...props, prop];  //Add new Property at last index
    }
    else {
      prop.Id = 101;
      props = [prop];
    }

    localStorage.setItem('props',JSON.stringify(props));
  }
}
