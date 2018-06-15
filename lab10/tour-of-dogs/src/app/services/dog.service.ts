import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dog } from '../model/dog';
import { DOGS } from '../data/mock-dogs';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DogService {

  apiUrl = 'http://localhost:3000/dogs';
  dogs: Observable<Dog[]>;
  lastId: number;

  constructor(private http: HttpClient) {
    this.dogs = this.findAll();
   }

  findAll(): Observable<Dog[]> {
    return this.http.get<Dog[]>(this.apiUrl);
  }

  add(dog: Dog): Observable<Object> {
    return this.http.post(this.apiUrl, dog);
  }

  update(dog: Dog): Observable<Object> {
    return this.http.put(this.apiUrl, dog);
  }

  delete(dogId: number): Observable<Object>  {
    return this.http.delete(`${this.apiUrl}/${dogId}`);;
  }

  findOne(id: number): Observable<Dog> {
    return this.http.get<Dog>(`${this.apiUrl}/${id}`);
  }

}
