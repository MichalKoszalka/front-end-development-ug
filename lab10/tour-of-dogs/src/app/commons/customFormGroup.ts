import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { Dog } from "../model/dog";

export class CustomFormBuilder {

    public static build(fb: FormBuilder) {
        return fb.group({
            'name' : ['', Validators.compose([
              Validators.required, Validators.minLength(3),
            ])],
            'weight' : ['', Validators.compose([
              Validators.required, Validators.min(5), Validators.max(50)
            ])],
            'height' : ['', Validators.compose([
              Validators.required, Validators.min(25), Validators.max(100)
            ])]
          });
    }
}