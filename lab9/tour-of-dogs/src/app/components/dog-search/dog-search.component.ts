import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Dog } from '../../model/dog';

@Component({
  selector: 'app-dog-search',
  templateUrl: './dog-search.component.html',
  styleUrls: ['./dog-search.component.css']
})
export class DogSearchComponent implements OnInit {

  @Output() dogsFiltered = new EventEmitter<Array<Dog>>();

  searchControl = new FormControl();

  @Input() dogs: Dog[];

  constructor() {
    this.searchControl.valueChanges.subscribe(
      searchTerm => this.informParent(this.dogs.filter(dog => dog.name.includes(searchTerm)))
    );
  }

  informParent(dogs: Dog[]) {
    this.dogsFiltered.emit(dogs);
  }

  ngOnInit() {
  }

}
