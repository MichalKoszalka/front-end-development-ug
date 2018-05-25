import { Component, OnInit } from '@angular/core';
import { DOGS } from '../mock-dogs';
import { Dog } from '../dog';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {

  dogs = DOGS;
  filteredDogs = [];
  selectedDog: Dog;

  constructor() {
    this.filteredDogs = this.dogs;
  }

  ngOnInit() {
  }

  onSelect(dog: Dog): void {
    this.selectedDog = dog;
  }

  onDogsFiltered(dogs: Dog[]) {
    this.filteredDogs = dogs;
  }

}
