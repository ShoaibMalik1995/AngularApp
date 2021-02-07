import { Injectable } from '@angular/core';
import {
  forEach,
  isEmpty,
  isArray,
  find,
  every,
  countBy,
  map,
  filter,
  orderBy,
  reduce
} from 'lodash'

@Injectable({
  providedIn: 'root'
})

export class LodashService {

  constructor() { }

  get forEach() {
    return forEach;
  }

  get isEmpty() {
    return isEmpty;
  }

  get find() {
    return find;
  }

  get every() {
    return every;
  }

  get isArray() {
    return isArray;
  }

  get countBy() {
    return countBy;
  }

  get map() {
    return map;
  }

  get filter() {
    return filter;
  }

  get orderBy() {
    return orderBy;
  }

  get reduce() {
    return reduce;
  }
}
