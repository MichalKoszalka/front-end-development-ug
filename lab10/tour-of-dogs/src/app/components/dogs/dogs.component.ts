import { Component, OnInit } from '@angular/core';
import { DOGS } from '../../data/mock-dogs';
import { Dog } from '../../model/dog';
import { DogService } from '../../services/dog.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {

  filteredDogs = [];
  dogs = [];  
  selectedDog: Dog;

  constructor(private dogService: DogService, private router: Router) {
  }

  private loadDogs() {
    this.dogService.findAll().subscribe(
      data => {
        this.dogs = data;
        this.filteredDogs = data;
      }
    );
  }

  ngOnInit() {
    this.loadDogs();
  }

  onSelect(dog: Dog) {
    this.selectedDog = dog;
    this.router.navigate(['/dog-detail', dog.id]);
  }

  onDogsFiltered(dogs: Dog[]) {
    this.filteredDogs = dogs;
  }

}