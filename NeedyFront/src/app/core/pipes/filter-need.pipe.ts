import { Pipe, PipeTransform } from '@angular/core';
import { Need } from '../interfaces/need';

@Pipe({
  name: 'filterNeed'
})
export class FilterNeedPipe implements PipeTransform {

  transform(needs: Need[], search: string = ''): Need[] {

    const userLogged = localStorage.getItem('userCI')!;
    
    if (search.length === 0) {
      return needs.filter( need => need.requestor.ci !== userLogged);
    }

    const filteredResults = needs.filter( (need) => need.requestedSkills.some( 
      (skill) => skill.name.toLowerCase().includes(search))
    );

    return filteredResults;    
  }

}
