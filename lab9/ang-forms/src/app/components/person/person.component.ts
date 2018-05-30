import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';
import { PersonService } from '../../services/person.service';
import { Person } from '../../model/person_model';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  myForm: FormGroup;
  imie: AbstractControl;
  rokUr: AbstractControl;

  person: Person[];

  constructor(fb: FormBuilder, private personService: PersonService) {
    this.myForm = fb.group({
      'imie' : ['Podaj imie', Validators.compose([
        Validators.required, Validators.minLength(3), this.myImieValidator
      ])],
      'rokUr' : ['Podaj rok urodzenia', Validators.compose([
        Validators.min(1950)
      ])]
    });

    this.imie = this.myForm.controls['imie'];
    this.rokUr = this.myForm.controls['rokUr'];

    this.myForm.controls['imie'].valueChanges.subscribe(imie => console.log(imie));
    // this.personService.getPersons().subscribe()
   }

  ngOnInit() {
  }

  mySubmit(value: any) {
     const person = new Person(this.imie.value, this.rokUr.value);
     this.personService.addPerson(person);

    //  this.imie.status statusy validacji
    // this.imie.pristine
    // this.imie.pending
    // this.imie.touched
    // this.imie.untouched
    // this.imie.invalid
  }

  myImieValidator(control: FormControl) {
    if (control.value.match(/^Bol/i)) {
      return {
        'bolekValue': true
      };
    }
  }

}
