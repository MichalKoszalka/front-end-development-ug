class Dog {
    constructor(name, breed, weight, height) {
        this.name = name;
        this.breed = breed;
        this.weight = weight;
        this.startWeight = weight;
        this.height = height;
        this.exp = 0;
        this.intelligence = 1;
    }

    introduce () {
        console.log(`I am ${this.name}`);
    }

    bark() {
        console.log("wow wow");
    }

    feed() {
        console.log("yummy");
        this.weight++
    }

    canRun() {
        return this.weight < 2 * this.startWeight;
    }

    run() {
       if (this.weight >= (2 * this.startWeight)) {
        this.bark();
        } else {
            console.log("running");
            if(this.weight > this.startWeight) {
                this.weight--;
            }
        }
    }

    walk() {
        console.log("walking");
        if(this.weight > this.startWeight) {
            this.weight--;
        }
    }

    train() {
        this.exp = this.exp + (1 * this.intelligence);
    }

    sit() {
        if(this.exp > 0) {
            console.log("siting");
        } else {
            this.bark();
        } 
    }

    canDoTheTrick() {
        return this.exp > 5;
    }

    doTheTrick() {
        if(this.exp > 5) {
            console.log("doing trick")
        } else {
            this.bark();
        }
    }

}

class Greyhound extends Dog {
    constructor(name, weight = 35, height = 70) {
        super();
        this.name = name;
        this.breed = "Greyhound";
        this.weight = weight;
        this.startWeight = weight;
        this.height = height;
        this.exp = 0;
        this.intelligence = 3;
    }

}

class GreatDane extends Dog {
    constructor(name, weight = 54, height = 75) {
        super();        
        this.name = name;
        this.breed = "Great dane";
        this.weight = weight;
        this.startWeight = weight;
        this.height = height;
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

class GermanShepherd extends Dog {
    constructor(name, weight = 30, height = 60) {
        super();
        this.name = name;
        this.breed = "German shepherd";
        this.weight = weight;
        this.startWeight = weight;
        this.height = height;
        this.exp = 1;
        this.intelligence = 5;
    }
}

class DogController {

    constructor() {
        this._allDogs = [];
    }

    set allDogs (allDogs) {
        this._allDogs = allDogs;
    }
    
    get allDogs () {
        return  this._allDogs;
    }

    addDog(dog) {
        this._allDogs.push(dog);
    }

    removeDog (dog) {
        this._allDogs.splice( this._allDogs.indexOf(dog), 1);
    }

    findByBreed (breed) {
        return  this._allDogs.filter(dog => dog.breed === breed);
    }

    findAllBreed () {
        return  this._allDogs.map(dog => dog.breed);
    }

    findHeavierThan (weight) {
        return  this._allDogs.filter(dog => dog.weight > weight);
    }

    findTallerThan (height) {
        return  this._allDogs.filter(dog => dog.height > height);
    }

    findOverWeightDogs () {
        return  this._allDogs.filter(dog => dog.weight > 1.5 * dog.startWeight);
    }

    trainAll () {
        return  this._allDogs.forEach(dog => dog.train());
    }

    findTrainedDogs () {
        return  this._allDogs.filter(dog => dog.canDoTheTrick());
    }

}

var rex = new GermanShepherd("rex");
var hector = new GreatDane("hector");
var mimi = new Greyhound("mimi");

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
for(i = 0; i < 45; i++) {
    rex.feed();
}
rex.run();
for(i = 0; i < 25; i++) {
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

var dogController = new DogController();

dogController.addDog(rex);
dogController.addDog(hector);
dogController.addDog(mimi);

console.log(dogController.findAllBreed());
console.log(dogController.findByBreed(mimi.breed));
console.log(dogController.findTrainedDogs());
console.log(dogController.findOverWeightDogs());







