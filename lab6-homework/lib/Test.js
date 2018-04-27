"use strict";

var _GermanShepherd = require("./GermanShepherd");

var _GreatDane = require("./GreatDane");

var _Greyhound = require("./Greyhound");

var _DogController = require("./DogController");

var rex = new _GermanShepherd.GermanShepherd("rex");
var hector = new _GreatDane.GreatDane("hector");
var mimi = new _Greyhound.Greyhound("mimi");
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

for (var i = 0; i < 45; i++) {
  rex.feed();
}

rex.run();

for (var _i = 0; _i < 25; _i++) {
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
var dogController = new _DogController.DogController();
dogController.addDog(rex);
dogController.addDog(hector);
dogController.addDog(mimi);
console.log(dogController.findAllBreed());
console.log(dogController.findByBreed(mimi.breed));
console.log(dogController.findTrainedDogs());
console.log(dogController.findOverWeightDogs());