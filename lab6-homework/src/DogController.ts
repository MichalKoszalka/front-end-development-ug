import { Dog } from "./Dog";
import { Breed } from "./Breed";

export class DogController {
    private allDogs: Dog[] = [];

    public addDog(dog) {
        this.allDogs.push(dog);
    }

    public removeDog(dog) {
        this.allDogs.splice(this.allDogs.indexOf(dog), 1);
    }

    public findByBreed(breed): Dog[] {
        return this.allDogs.filter(dog => dog.breed === breed);
    }

    public findAllBreed(): Breed[] {
        return this.allDogs.map(dog => dog.breed);
    }

    public findHeavierThan(weight): Dog[] {
        return this.allDogs.filter(dog => dog.weight > weight);
    }

    public findTallerThan(height): Dog[] {
        return this.allDogs.filter(dog => dog.height > height);
    }

    public findOverWeightDogs(): Dog[] {
        return this.allDogs.filter(dog => dog.weight > 1.5 * dog.startWeight);
    }

    public trainAll() {
        return this.allDogs.forEach(dog => dog.train());
    }

    public findTrainedDogs(): Dog[] {
        return this.allDogs.filter(dog => dog.canDoTheTrick());
    }

}