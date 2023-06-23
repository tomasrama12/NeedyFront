import { Pipe, PipeTransform } from '@angular/core';
import { Need } from '../interfaces/need';

@Pipe({
  name: 'filterNeed'
})
export class FilterNeedPipe implements PipeTransform {

  transform(needs: Need[], user: string, search: string = ''): Need[] {

    if (search.length === 0) {
      return needs.filter( need => need.requestor.ci !== user);
    }

    const filteredResults = needs.filter( (need) => need.requestedSkills.some( 
      (skill) => skill.name.toLowerCase().includes(search))
    );

    return filteredResults;    
  }

}
