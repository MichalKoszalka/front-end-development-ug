import { Component, OnInit } from '@angular/core';
import { DOGS } from '../../data/mock-dogs';
import { Dog } from '../../model/dog';
import { DogService } from '../../services/dog.service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {

  dogs: Dog[];
  filteredDogs = [];
  selectedDog: Dog;

  constructor(private dogService: DogService) {
    this.loadDogs();
  }

  private loadDogs() {
    this.dogs = this.dogService.findAll();
    this.filteredDogs = this.dogs;
  }

  ngOnInit() {
  }

  onSelect(dog: Dog) {
    this.selectedDog = dog;
  }

  onDogsFiltered(dogs: Dog[]) {
    this.filteredDogs = dogs;
  }

  onDogAdded() {
    this.loadDogs();
  }

  onDogDeleted() {
    this.loadDogs();   
  }

}
