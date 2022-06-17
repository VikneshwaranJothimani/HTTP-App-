import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, limit:number): string {

    

    if(limit == 15)
    {
     return value.substr(0,15)+"...";
    }

    else if(limit == 30 )
    {
     return value.substr(0,30)+"...";

    }


    return value;
  }

}
