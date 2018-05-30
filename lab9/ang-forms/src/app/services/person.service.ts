import { Injectable } from '@angular/core';
import { Person } from '../model/person_model';
import { of } from 'rxjs/observable/of';



@Injectable()
export class PersonService {

  persons: Person[];

  constructor() {
    this.persons = [new Person('Bolek', 1978), new Person('Lolek', 1979), new Person('Tola', 1975)];
   }

   getPersons() {
     return of(this.persons);
   }

   addPerson(person: Person) {
     this.persons.push(person);
   }

}
