import { Injectable } from '@angular/core';
import * as alertyfy from 'alertifyjs';


@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  Success(message: string){
    alertyfy.success('Success ! ' + message);
  }

  Warning(message: string){
    alertyfy.warning('Warning ! ' + message);
  }

  Error(message: string){
    alertyfy.error('Error ! ' + message);
  }
}
