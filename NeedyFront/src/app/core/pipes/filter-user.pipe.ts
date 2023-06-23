import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../interfaces/user';

@Pipe({
  name: 'filterUser'
})
export class FilterUserPipe implements PipeTransform {

  transform(users: User[], userLogged: string, search: string = ''): User[] {

    if (search.length === 0) {
      return users.filter(user => user.ci !== userLogged);
    }

    const filteredResults = users.filter((user) => user.skills.some(
      (skill) => skill.name.toLowerCase().includes(search))
    );

    return filteredResults;
  }

}
