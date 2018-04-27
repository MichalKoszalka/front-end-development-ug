import { Dog } from "./Dog";
import { Breed } from "./Breed";

export class DogController {
    public allDogs: Dog[] = [];

    addDog(dog) {
        this.allDogs.push(dog);
    }

    removeDog(dog) {
        this.allDogs.splice(this.allDogs.indexOf(dog), 1);
    }

    findByBreed(breed): Dog[] {
        return this.allDogs.filter(dog => dog.breed === breed);
    }

    findAllBreed(): Breed[] {
        return this.allDogs.map(dog => dog.breed);
    }

    findHeavierThan(weight): Dog[] {
        return this.allDogs.filter(dog => dog.weight > weight);
    }

    findTallerThan(height): Dog[] {
        return this.allDogs.filter(dog => dog.height > height);
    }

    findOverWeightDogs(): Dog[] {
        return this.allDogs.filter(dog => dog.weight > 1.5 * dog.startWeight);
    }

    trainAll() {
        return this.allDogs.forEach(dog => dog.train());
    }

    findTrainedDogs(): Dog[] {
        return this.allDogs.filter(dog => dog.canDoTheTrick());
    }

}