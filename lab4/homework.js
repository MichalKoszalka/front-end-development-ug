class DogController {

    constructor() {
        this.allDogs = []
    }
    
    get allDogs () {
        return allDogs;
    }

    addDog(dog) {
        allDogs.push(dog);
    }

    removeDog (dog) {
        allDogs.splice(allDogs.indexOf(dog), 1);
    }

    findByBreed (breed) {
        return allDogs.filter(dog => dog.breed = breed);
    }

    findAllBreed () {
        return allDogs.map(dog => dog.breed);
    }

    findHeavierThan (weight) {
        return allDogs.filter(dog.weight > weight);
    }

    findTallerThan (height) {
        return allDogs.filter(dog.height > height);
    }
}


class Dog {
    constructor(name, breed, weight, height) {
        this.name = name;
        this.breed = breed;
        this.weight = weight;
        this.height = height;
    };

    introduce () {
        console.log(`I am ${this.name}`);
    };

    bark() {
        console.log("hau hau");
    };

}

class Greyhound extends Dog {
    constructor(name, weight = 35, height = 70) {
        this.name = name;
        this.breed = "Greyhound";
        this.weight = weight;
        this.height = height;
    }

}

class GreatDane extends Dog {
    constructor(name, weight = 54, height = 75) {
        this.name = name;
        this.breed = "Great dane";
        this.weight = weight;
        this.height = height;
    }
}

class GermanShepherd extends Dog {
    constructor(name, weight = 30, height = 60) {
        this.name = name;
        this.breed = "German shepherd";
        this.weight = weight;
        this.height = height;
    }
}