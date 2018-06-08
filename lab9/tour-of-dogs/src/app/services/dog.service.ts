import { Injectable } from '@angular/core';
import { Dog } from '../model/dog';
import { DOGS } from '../data/mock-dogs';

@Injectable()
export class DogService {

  dogs: Dog[];
  lastId: number;

  constructor() {
    this.dogs = DOGS;
    this.updateLastId();
   }

  private updateLastId() {
    this.lastId = Math.max.apply(null, this.dogs.map( dog => dog.id));
  }

  findAll() {
    return this.dogs;
  }

  add(dog: Dog) {
    this.lastId =  this.lastId + 1;
    dog.id = this.lastId;
    this.dogs.push(dog);
  }

  delete(dog: Dog) {
    this.dogs = this.dogs.filter( doggy => doggy.id !== dog.id);
    this.updateLastId();
  }

}
