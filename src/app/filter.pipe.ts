import { Pipe, PipeTransform } from '@angular/core';
import { IAcronym } from './acronym.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: IAcronym[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter(it => {
      return (it.acronym.toLowerCase().includes(searchText) 
      || it.expanded.toLowerCase().includes(searchText)) ;
    });
  }

}
