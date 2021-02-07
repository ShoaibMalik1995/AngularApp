import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Array<string>, args?: any[]): any {
    if(value && args) {
      // 0: Sorting Field Name; 1: Sort Order
      if(args.length > 0) {
        const sortField = args[0];
        const sortOrder = args.length > 1 ? args[1] : "";
        let multipler = 1;
        if(sortOrder == "desc"){
          multipler = -1;
        }

        value.sort((a: any, b:any) => {
          if (a[sortField] < b[sortField]) {
            return -1 * multipler;
          }
          else if (a[sortField] > b[sortField]){
            return 1 * multipler;
          }
          else {
            return 0;
          }

        });
      }

    }

    return value;
  }

}
