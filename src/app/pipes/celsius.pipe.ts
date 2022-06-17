import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'celsius'
})
export class CelsiusPipe implements PipeTransform {

  transform(value: string): string {

    let temperature = Number(value)-273.15;

    let temp = temperature.toFixed(1);

    if(value.length == 0)
    {
      return value;
    }
    
    return temp.toString()
  }

}
