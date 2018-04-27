import { Breed } from "./Breed";
export declare class Dog {
    name: string;
    breed: Breed;
    weight: number;
    height: number;
    startWeight: number;
    exp: number;
    intelligence: number;
    constructor(name: string, breed: Breed, weight: number, height: number);
    introduce(): void;
    bark(): void;
    feed(): void;
    canRun(): boolean;
    run(): void;
    walk(): void;
    train(): void;
    sit(): void;
    canDoTheTrick(): boolean;
    doTheTrick(): void;
}
