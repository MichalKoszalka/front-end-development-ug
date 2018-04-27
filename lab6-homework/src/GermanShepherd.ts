import { Dog } from "./Dog";
import { Breed } from "./Breed";

export class GermanShepherd extends Dog {
    constructor(public name, weight = 30, height = 60) {
        super(name, Breed.GermanShepherd, weight, height);
        this.startWeight = weight;
        this.exp = 1;
        this.intelligence = 5;
    }
}