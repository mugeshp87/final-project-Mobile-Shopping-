import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(products:any[],searchtext:string): any{
    if(!products)
    {
      return []
    }
    if(!searchtext)
    {
      return products;
    }
    searchtext=searchtext.toLocaleLowerCase();
  
  return products.filter(it=>{
    return it.toLocaleLowerCase().includes(searchtext);
  })
  }

}
