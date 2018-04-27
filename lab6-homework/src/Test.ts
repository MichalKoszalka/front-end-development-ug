import { GermanShepherd } from "./GermanShepherd";
import { GreatDane } from "./GreatDane";
import { Greyhound } from "./Greyhound";
import { DogController } from "./DogController";

let rex = new GermanShepherd("rex");
let hector = new GreatDane("hector");
let mimi = new Greyhound("mimi");

rex.introduce();
rex.bark();
rex.canRun();
rex.run();
rex.walk();
rex.sit();
rex.canDoTheTrick();
rex.doTheTrick();
rex.train();
rex.train();
rex.train();
rex.sit();
rex.doTheTrick();
for(let i = 0; i < 45; i++) {
    rex.feed();
}
rex.run();
for(let i = 0; i < 25; i++) {
    rex.walk();
}
rex.run();


hector.introduce();
hector.bark();
hector.canRun();
hector.run();
hector.walk();
hector.sit();
hector.canDoTheTrick();
hector.doTheTrick();
hector.train();
hector.train();
hector.train();
hector.sit();
hector.doTheTrick();

mimi.introduce();
mimi.bark();
mimi.canRun();
mimi.run();
mimi.walk();
mimi.sit();
mimi.canDoTheTrick();
mimi.doTheTrick();
mimi.train();
mimi.train();
mimi.train();
mimi.sit();
mimi.doTheTrick();

let dogController = new DogController();

dogController.addDog(rex);
dogController.addDog(hector);
dogController.addDog(mimi);

console.log(dogController.findAllBreed());
console.log(dogController.findByBreed(mimi.breed));
console.log(dogController.findTrainedDogs());
console.log(dogController.findOverWeightDogs());