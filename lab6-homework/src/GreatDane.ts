import { Dog } from "./Dog";
import { Breed } from "./Breed";

export class GreatDane extends Dog {
    constructor(name, weight = 54, height = 75) {
        super(name, Breed.GreatDane, weight, height);        
        this.startWeight = weight;
        this.exp = 0;
        this.intelligence = 3;
    }

    canRun() {
        return this.weight < (1.5 * this.startWeight);
    }

    run() {
        if (this.weight >= (1.5 * this.startWeight)) {
            this.bark();
         } else {
             console.log("running");
             if(this.weight > this.startWeight) {
                this.weight--;
             }
         }
     }
}