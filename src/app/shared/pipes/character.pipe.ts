import { Pipe, PipeTransform } from '@angular/core';
import { Character } from '../model/shared';

@Pipe({
  name: 'character'
})
export class CharacterPipe implements PipeTransform {
  transform(list: Character[], filter: string = '') {
    const lowerCaseFilter: string = filter.toLowerCase().trim();
    const filteredList: Character[] = list.filter((el: Character) => {
      return el.name.toLowerCase().includes(lowerCaseFilter);
    });

    return filteredList;
  }

}
