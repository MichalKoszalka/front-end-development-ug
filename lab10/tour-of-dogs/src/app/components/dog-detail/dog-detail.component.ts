import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Dog } from '../../model/dog';
import { DogService } from '../../services/dog.service';

@Component({
  selector: 'app-dog-detail',
  templateUrl: './dog-detail.component.html',
  styleUrls: ['./dog-detail.component.css']
})
export class DogDetailComponent implements OnInit {

  @Output() dogDeleted = new EventEmitter<Dog>();
  @Input() dog: Dog;

  constructor(private dogService: DogService) { }

  ngOnInit() {
  }
  
  deleteDog(dog: Dog) {
    this.dogService.delete(dog);
    this.dogDeleted.emit(dog);
    this.dog = null;
  }

}
