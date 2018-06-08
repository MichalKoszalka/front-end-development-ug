import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Dog } from '../../model/dog';
import { DogService } from '../../services/dog.service';
import { FormGroup, AbstractControl, FormBuilder } from '@angular/forms';
import { CustomFormBuilder } from '../../commons/customFormGroup';

@Component({
  selector: 'app-dog-detail',
  templateUrl: './dog-detail.component.html',
  styleUrls: ['./dog-detail.component.css']
})
export class DogDetailComponent implements OnInit {

  @Output() dogDeleted = new EventEmitter<Dog>();
  @Input() dog: Dog;

  myForm: FormGroup;
  name: AbstractControl;
  height: AbstractControl;  
  weight: AbstractControl;

  constructor(fb: FormBuilder, private dogService: DogService) {
    this.myForm = CustomFormBuilder.build(fb);
    this.name = this.myForm.controls['name'];
    this.height = this.myForm.controls['height'];
    this.weight = this.myForm.controls['weight'];    
   }

  ngOnInit() {
  }
  
  deleteDog(dog: Dog) {
    this.dogService.delete(dog);
    this.dogDeleted.emit(dog);
    this.dog = null;
  }

}
