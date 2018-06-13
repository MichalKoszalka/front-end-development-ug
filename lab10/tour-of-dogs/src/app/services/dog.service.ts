import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dog } from '../model/dog';
import { DOGS } from '../data/mock-dogs';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DogService {

  apiUrl = 'localhost:3000/';
  dogs: Observable<Dog[]>;
  lastId: number;

  constructor(private http: HttpClient) {
    this.dogs = this.findAll();
   }

  findAll(): Observable<Dog[]> {
    return this.http.get<Dog[]>(this.apiUrl);
  }

  add(dog: Dog) {
    this.http.post(this.apiUrl, dog).subscribe();
  }

  delete(dog: Dog) {
    this.http.delete(this.apiUrl+dog.id).subscribe();
  }

}
