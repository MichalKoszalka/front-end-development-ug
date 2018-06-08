import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { DogService } from '../../services/dog.service';
import { Dog } from '../../model/dog';
import { AbstractControl, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CustomFormBuilder } from '../../commons/customFormGroup';

@Component({
  selector: 'app-add-dog',
  templateUrl: './add-dog.component.html',
  styleUrls: ['./add-dog.component.css']
})
export class AddDogComponent implements OnInit {

  @Output() dogAdded = new EventEmitter<void>();

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

  addDog() {
    const dog = new Dog(this.name.value, this.weight.value, this.height.value);
    this.dogService.add(dog);
    this.dogAdded.emit();
  }



}
