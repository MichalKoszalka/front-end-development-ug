import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { DogService } from '../../services/dog.service';
import { Dog } from '../../model/dog';
import { AbstractControl, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CustomFormBuilder } from '../../commons/customFormGroup';
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-dog',
  templateUrl: './add-dog.component.html',
  styleUrls: ['./add-dog.component.css']
})
export class AddDogComponent implements OnInit {

  myForm: FormGroup;
  name: AbstractControl;
  height: AbstractControl;  
  weight: AbstractControl;

  constructor(formBuilder: FormBuilder, private dogService: DogService, private router: Router) {
    this.myForm = CustomFormBuilder.build(formBuilder);
    this.name = this.myForm.controls['name'];
    this.height = this.myForm.controls['height'];
    this.weight = this.myForm.controls['weight'];    
   }

  ngOnInit() {
  }

  addDog() {
    if(this.myForm.valid) {
      const dog = new Dog(this.name.value, this.weight.value, this.height.value);
      this.dogService.add(dog).subscribe(
          _ => {
            this.clearForm();
            this.router.navigate(['/all-dogs']);
          }
      );
    }
  }

  clearForm() {
    this.myForm.reset({
      name: '',
      weight: '',
      height: '',
    });
  }



}
