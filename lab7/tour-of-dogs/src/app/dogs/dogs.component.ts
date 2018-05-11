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
  selectedDog: Dog;

  constructor() { }

  ngOnInit() {
  }

  onSelect(dog: Dog): void {
    this.selectedDog = dog;
  }

}
