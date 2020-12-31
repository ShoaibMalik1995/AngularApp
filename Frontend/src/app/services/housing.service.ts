import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';
import { Property } from '../model/Property';
import { IPropertyBase } from '../model/IPropertyBase.interface';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }

  getAllProperties(SellRent: number) : Observable<IPropertyBase[]> {
    return this.http.get('data/properties.json').pipe(
      map(data => {
        const propertiesArray: Array<IPropertyBase> = [];
        const props= JSON.parse(localStorage.getItem('props'));

        if(props){
          props.forEach(element => {
            if(element.SellRent === SellRent){
              propertiesArray.push(element);
            }
          });
        }

        for(const id in data){
          if(data.hasOwnProperty(id) && data[id].SellRent === SellRent){
            propertiesArray.push(data[id]);
          }
        }

        return propertiesArray;
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
