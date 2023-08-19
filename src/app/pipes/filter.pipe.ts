import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, ...arg: any[]): any {
    const resultadoPais = [];
    for (const pais of value) {
      if (pais.country.toLowerCase().indexOf(arg.toString().toLowerCase()) > -1) {
resultadoPais.push(pais);
      }
    }
    return resultadoPais;
  }

}
