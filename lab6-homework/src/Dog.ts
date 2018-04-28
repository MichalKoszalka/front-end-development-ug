import { Breed } from "./Breed";

export class Dog {
    public startWeight: number;
    public exp: number;
    public intelligence: number;
    constructor(public name: string, public breed: Breed, public weight: number, public height: number) {
        this.name = name;
        this.breed = breed;
        this.weight = weight;
        this.startWeight = weight;
        this.height = height;
        this.exp = 0;
        this.intelligence = 1;
    }

    public introduce () {
        console.log(`I am ${this.name}`);
    }

    public bark() {
        console.log("wow wow");
    }

    public feed() {
        console.log("yummy");
        this.weight++
    }

    public canRun() {
        return this.weight < 2 * this.startWeight;
    }

    public run() {
       if (this.weight >= (2 * this.startWeight)) {
        this.bark();
        } else {
            console.log("running");
            if(this.weight > this.startWeight) {
                this.weight--;
            }
        }
    }

    public walk() {
        console.log("walking");
        if(this.weight > this.startWeight) {
            this.weight--;
        }
    }

    public train() {
        this.exp = this.exp + (1 * this.intelligence);
    }

    public sit() {
        if(this.exp > 0) {
            console.log("siting");
        } else {
            this.bark();
        } 
    }

    public canDoTheTrick() {
        return this.exp > 5;
    }

    public doTheTrick() {
        if(this.exp > 5) {
            console.log("doing trick")
        } else {
            this.bark();
        }
    }
}