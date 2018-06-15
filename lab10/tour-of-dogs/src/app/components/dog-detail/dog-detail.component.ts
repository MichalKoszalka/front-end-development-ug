import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Dog } from '../../model/dog';
import { DogService } from '../../services/dog.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, AbstractControl, FormBuilder } from '@angular/forms';
import { CustomFormBuilder } from '../../commons/customFormGroup';

@Component({
  selector: 'app-dog-detail',
  templateUrl: './dog-detail.component.html',
  styleUrls: ['./dog-detail.component.css']
})
export class DogDetailComponent implements OnInit {

  myForm: FormGroup;
  name: AbstractControl;
  height: AbstractControl;  
  weight: AbstractControl;
  dogId: number

  constructor(private dogService: DogService, private route: ActivatedRoute, private formBuilder: FormBuilder, private router: Router) {
    this.myForm = CustomFormBuilder.build(this.formBuilder);
    this.name = this.myForm.controls['name'];
    this.height = this.myForm.controls['height'];
    this.weight = this.myForm.controls['weight']; 
   }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.dogId = +params['id'];
      this.dogService.findOne(this.dogId).subscribe(dog => this.fillForm(dog));
    });
  }

  fillForm(dog: Dog) {
    this.myForm.patchValue({
      id: dog.id,
      name: dog.name,
      weight: dog.weight,
      height: dog.height
    });
  }
  
  deleteDog() {
    this.dogService.delete(this.dogId).subscribe(_ => {
      this.clearForm();
      this.router.navigate(['/all-dogs']);    
    });
  }

  updateDog() {
    if(this.myForm.valid) {
    var dog = new Dog(this.name.value, this.weight.value, this.height.value);
    dog.id = this.dogId;
    this.dogService.update(dog).subscribe();
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
