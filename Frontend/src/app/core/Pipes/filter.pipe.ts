import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterString: string, propName: string): any[] {
    const resultArray = [];
    if(value){
      if(value.length === 0 || filterString === '' || propName === ''){
        return value;
      }

      value.forEach(elem => {
        if(elem[propName] === filterString) {
          resultArray.push(elem);
        }
      });
    }

    return resultArray;
  }

}
