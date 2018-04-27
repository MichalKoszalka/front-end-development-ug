import { Dog } from "./Dog";
import { Breed } from "./Breed";

export class Greyhound extends Dog {
    constructor(name, weight = 35, height = 70) {
        super(name, Breed.Greyhound, weight, height);
        this.startWeight = weight;
        this.exp = 0;
        this.intelligence = 3;
    }

}