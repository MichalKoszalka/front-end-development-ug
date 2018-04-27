import { Dog } from "./Dog";
import { Breed } from "./Breed";
export declare class DogController {
    allDogs: Dog[];
    addDog(dog: any): void;
    removeDog(dog: any): void;
    findByBreed(breed: any): Dog[];
    findAllBreed(): Breed[];
    findHeavierThan(weight: any): Dog[];
    findTallerThan(height: any): Dog[];
    findOverWeightDogs(): Dog[];
    trainAll(): void;
    findTrainedDogs(): Dog[];
}
