import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value:any):any{
    var curYear=new Date().getFullYear();
    var userYear=new Date(value).getFullYear();
    var userAge=curYear-userYear;

    return userAge;
  }

}
